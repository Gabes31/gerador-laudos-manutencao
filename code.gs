const SPREADSHEET_ID = '[COLOQUE_SEU_SPREADSHEET_ID_AQUI]';
const NOME_ABA = 'Historico';

// Função obrigatória para gerar a página Web e permitir iframe no Google Sites
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Gerador de Laudos - [NOME_DA_EMPRESA]')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); 
}

// Função chamada pelo front-end para salvar na planilha
function salvarLaudo(dados) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(NOME_ABA);

    // Se a aba não existir, cria e configura o cabeçalho
    if (!sheet) {
      sheet = ss.insertSheet(NOME_ABA);
      sheet.appendRow([
        "Data do Registro (Sistema)", "Data Identificação", "Prefixo", "Placa", 
        "Linha", "Garantia", "Responsável", "Categoria Problema", 
        "Problema (Genérico)", "Descrição Detalhada", "Solução Aplicada"
      ]);
      sheet.getRange("A1:K1").setFontWeight("bold");
    }

    // Salva os dados como uma nova linha
    sheet.appendRow([
      new Date(), // Timestamp automático
      dados.dataIdentificacao,
      dados.prefixo,
      dados.placa,
      dados.linha,
      dados.garantia,
      dados.responsavel,
      dados.categoriaProblema,
      dados.descricaoGenerica,
      dados.descricaoDetalhada,
      dados.solucaoAplicada
    ]);

    return { sucesso: true, mensagem: "Laudo salvo com sucesso na planilha!" };
  } catch (erro) {
    return { sucesso: false, mensagem: "Erro ao salvar: " + erro.message };
  }
}