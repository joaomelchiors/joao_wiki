// Gera wiki/index.md a partir do frontmatter das páginas (CLAUDE.md §10).
// Uso (da raiz):  node scripts/indice.ts            → reescreve wiki/index.md
//                 node scripts/indice.ts --checar   → só aponta problemas, não escreve
//
// Cada página informa no próprio frontmatter: title, descricao, type, status, updated.
// O índice não é editado à mão: quem cria ou altera uma página ajusta o frontmatter dela e roda este script.

import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const WIKI = join(RAIZ, "wiki");
const SAIDA = join(WIKI, "index.md");
const CHECAR = process.argv.includes("--checar");

interface Pagina {
  caminho: string; // relativo a wiki/
  title: string;
  descricao: string;
  type: string;
  status: string;
  updated: string;
}

function listar(dir: string): string[] {
  const saida: string[] = [];
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) saida.push(...listar(p));
    else if (n.endsWith(".md") && n !== "README.md") saida.push(p);
  }
  return saida;
}

// Lê os campos escalares do frontmatter (aspas simples ou duplas, ou sem aspas).
function campos(txt: string): Record<string, string> {
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(txt);
  const r: Record<string, string> = {};
  if (!fm) return r;
  for (const l of fm[1].split(/\r?\n/)) {
    const m = /^([a-z_]+)\s*:\s*(.*)$/.exec(l);
    if (!m) continue;
    let v = m[2].trim();
    if (v.startsWith("'") && v.endsWith("'")) v = v.slice(1, -1).replace(/''/g, "'");
    else if (v.startsWith('"') && v.endsWith('"')) v = v.slice(1, -1).replace(/\\"/g, '"');
    r[m[1]] = v;
  }
  return r;
}

const problemas: string[] = [];
const paginas: Pagina[] = listar(WIKI)
  .filter((p) => p !== SAIDA)
  .map((p) => {
    const c = campos(readFileSync(p, "utf8"));
    const caminho = relative(WIKI, p).split("\\").join("/");
    for (const k of ["title", "descricao", "type", "status", "updated"]) if (!c[k]) problemas.push(`${caminho}: falta \`${k}\``);
    return { caminho, title: c.title ?? "", descricao: c.descricao ?? "", type: c.type ?? "", status: c.status ?? "", updated: c.updated ?? "" };
  });

if (CHECAR) {
  console.log(problemas.length ? problemas.join("\n") : `ok: ${paginas.length} páginas com frontmatter completo`);
  process.exit(problemas.length ? 1 : 0);
}

const linha = (p: Pagina): string => {
  // se a descricao já abre com a marca e o motivo, como "**(draft: uma fonte de opinião)**", não repete
  const jaMarcada = /^\*\*\((draft|superseded)\b/.test(p.descricao);
  const marca = jaMarcada ? "" : p.status === "superseded" ? "**(superseded)** " : p.status === "draft" ? "**(draft)** " : "";
  return `- [${basename(p.caminho)}](./${p.caminho}): ${marca}${p.descricao}${p.updated ? ` Última atualização: ${p.updated}` : ""}`;
};
const por = (pred: (p: Pagina) => boolean): Pagina[] => paginas.filter(pred).sort((a, b) => a.caminho.localeCompare(b.caminho));

const ENTRADA = ["overview.md", "open-questions.md", "log.md"];
const fontes = por((p) => p.type === "source");
const conceitos = por((p) => p.type === "concept");
const entidades = por((p) => p.type === "entity");
const sinteses = por((p) => p.type === "synthesis");
const manutencao = por((p) => p.type === "maintenance" && !ENTRADA.includes(p.caminho));
const entrada = ENTRADA.map((c) => paginas.find((p) => p.caminho === c)).filter((p): p is Pagina => !!p);
const conhecidos = new Set([...fontes, ...conceitos, ...entidades, ...sinteses, ...manutencao, ...entrada]);
const outros = paginas.filter((p) => !conhecidos.has(p));

const contagem = (lista: Pagina[]): string => {
  const sup = lista.filter((p) => p.status === "superseded").length;
  const dra = lista.filter((p) => p.status === "draft").length;
  const extras = [dra ? `${dra} draft` : "", sup ? `${sup} superseded` : ""].filter(Boolean);
  return `${lista.length}${extras.length ? ` (${extras.join(", ")})` : ""}`;
};
const maisRecente = paginas.map((p) => p.updated).filter(Boolean).sort().at(-1) ?? "";

const md: string[] = [
  "---",
  "title: 'Índice'",
  "descricao: 'Índice da wiki, gerado a partir do frontmatter das páginas por scripts/indice.ts.'",
  "type: maintenance",
  "status: active",
  "created: 2026-04-07",
  `updated: ${maisRecente}`,
  "tags: [index]",
  "source_files: []",
  "related_pages:",
  "  - ./overview.md",
  "  - ./log.md",
  "  - ./open-questions.md",
  "---",
  "",
  "# Índice",
  "",
  "> **Gerado por `node scripts/indice.ts` — não edite à mão.** Cada linha vem do frontmatter da página (`descricao`, `status`, `updated`). Para mudar uma linha, mude a página e rode o script.",
  "",
  "Para achar páginas sem ler este arquivo inteiro, busque no frontmatter: `title:`, `descricao:` e `tags:` em `wiki/`.",
  "",
  "## Contagens",
  "",
  `- resumo de fonte: ${contagem(fontes)}`,
  `- página de conceito: ${contagem(conceitos)}`,
  `- página de entidade: ${contagem(entidades)}`,
  `- página de síntese: ${contagem(sinteses)}`,
  `- página de manutenção: ${contagem([...entrada, ...manutencao, ...outros.filter((p) => p.type === "maintenance")]) }`,
  "",
  "## Páginas de Entrada",
  "",
  ...entrada.map(linha),
  "",
  "## Fontes",
  "",
  ...fontes.map(linha),
  "",
  "## Conceitos",
  "",
  ...conceitos.map(linha),
  "",
  "## Entidades",
  "",
  ...entidades.map(linha),
  "",
  "## Sínteses",
  "",
  ...sinteses.map(linha),
  "",
  "## Manutenção",
  "",
  ...manutencao.map(linha),
  "",
  ...(outros.length ? ["## Sem tipo reconhecido", "", ...outros.map(linha), ""] : []),
];
writeFileSync(SAIDA, md.join("\n"), "utf8");
console.log(`index.md gerado: ${paginas.length} páginas${problemas.length ? ` · ${problemas.length} problema(s) de frontmatter (rode com --checar)` : ""}`);
