# Beth Tábuas e Presentes

Landing page estática da Beth Tábuas e Presentes, com foco em cestas de café da manhã, tábuas, caixas gourmet e presentes personalizados em Lagoa Santa, Vespasiano e região.

## Estrutura

- `index.html`: marcação da página, SEO, dados estruturados e integrações de tracking.
- `style.css`: estilos responsivos da landing page.
- `script.js`: comportamento do menu mobile, rolagem suave, FAQ e animações de entrada.
- `images/`: imagens originais e versões otimizadas usadas no site.
- `assets/`: ícones e arquivos auxiliares.
- `robots.txt` e `sitemap.xml`: arquivos de indexação para buscadores.

## Como visualizar

Este projeto não depende de build. Para revisar localmente, abra o arquivo `index.html` no navegador.

Também é possível servir a pasta com um servidor estático:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Publicação

Envie todos os arquivos versionados para a raiz do domínio configurado para o site:

```text
https://bethcestas.com.br/
```

Antes de publicar, confirme se `sitemap.xml`, `robots.txt` e as URLs canônicas em `index.html` continuam apontando para o domínio correto.
