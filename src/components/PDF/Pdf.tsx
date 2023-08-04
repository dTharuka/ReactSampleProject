import React from 'react'
import $ from "jquery";
import { Container, Row, Col } from 'react-bootstrap';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import jsPDF from 'jspdf';

type customerProp={
    // cusID:string |undefined;
    // cusName:string |undefined;
    // cusEmail:string |undefined;
    // cusSalary:string |undefined;
    // cusAddress:string |undefined;
    // cusPostalCode:string |undefined;
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
          <PDFViewer>
        <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        {/* <Text>{props.cusID}</Text>
        <Text>{props.cusName}</Text>
        <Text>{props.cusEmail}</Text>
        <Text>{props.cusSalary}</Text>
        <Text>{props.cusAddress}</Text>
        <Text>{props.cusPostalCode}</Text> */}
        <Text>{pdfData}</Text>

      </View>
      {/* <View style={styles.section}>
        <Text>Section #2</Text>
      </View> */}
    </Page>
  </Document>
  </PDFViewer>
    </div>
  )
}

export default Pdf