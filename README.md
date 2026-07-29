# Gerador de Laudos de Manutenção 🚌🛠️

Uma aplicação web desenvolvida em **React 18** (Standalone) e **Google Apps Script** (Backend/Banco de Dados) para criar, imprimir e registrar laudos técnicos de manutenção de frota[cite: 14, 15].

## 🚀 Funcionalidades

*   **Formulário Dinâmico React:** Interface reativa para preenchimento de dados do veículo (Prefixo, Placa, Linha, Garantia), categorização do problema e descrição da solução[cite: 15].
*   **Upload de Evidências:** Permite anexar múltiplas fotos diretamente no laudo, tanto para o problema relatado quanto para a solução aplicada[cite: 15].
*   **Geração Nativa de PDF:** Layout otimizado via CSS (`@media print`) para gerar um documento no padrão A4 perfeitamente formatado para impressão ou salvamento em PDF[cite: 15].
*   **Painel Pareto em Tempo Real:** Constrói automaticamente uma tabela de Pareto com a frequência dos problemas registrados na sessão, calculando o percentual acumulado[cite: 15].
*   **Integração com Google Sheets:** Salva o histórico de laudos diretamente em uma planilha do Google de forma transparente, estruturando os dados para auditoria[cite: 14, 15].

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** React 18 (via CDN), Babel Standalone, Tailwind CSS, Material Icons[cite: 15].
*   **Backend & Armazenamento:** Google Apps Script (`Code.gs`) e Google Sheets[cite: 14].

## ⚙️ Instalação e Configuração

1.  Crie uma nova planilha no Google Sheets e anote o seu ID (encontrado na URL).
2.  Abra o editor de extensões do Google Apps Script.
3.  Crie o arquivo `Code.gs` e cole o código de backend correspondente.
4.  Substitua a constante `SPREADSHEET_ID` pelo ID da sua planilha[cite: 14].
5.  Crie um arquivo HTML chamado `index.html` e cole o código do frontend[cite: 14].
6.  No arquivo `index.html`, personalize os campos `[NOME_DA_EMPRESA]` e `[ENDERECO_DA_EMPRESA]` com as informações da sua organização[cite: 15].
7.  Implante o projeto como um "Aplicativo Web" acessível aos usuários desejados.
