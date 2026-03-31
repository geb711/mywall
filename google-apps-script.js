// ╔══════════════════════════════════════════════════════════════╗
// ║  MYWALL — Script de Google Sheets para captura de leads    ║
// ║  Copiá este código en Apps Script (ver instrucciones)      ║
// ╚══════════════════════════════════════════════════════════════╝

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si la hoja está vacía, agregar encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'WhatsApp', 'Panel elegido']);
      
      // Formato de encabezados
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#c8a97e');
      headerRange.setFontColor('#0f0f0f');
    }
    
    // Agregar el nuevo lead
    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || '',
      data.email || '',
      data.whatsapp || '',
      data.panel || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
