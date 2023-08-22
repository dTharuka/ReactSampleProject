import React from 'react'
import $ from "jquery";
import { Container, Row, Col } from 'react-bootstrap';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import jsPDF from 'jspdf';

type customerProp={
    pdf:jsPDF;
  }

function Pdf(props:customerProp) {

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });
      const pdfData = props.pdf.output('datauristring');   
     

  return (
    <div>
          <PDFViewer className=' h-96'>
        <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{pdfData}</Text>
      </View>
    </Page>
  </Document>
  </PDFViewer>
    </div>
  )
}

export default Pdf