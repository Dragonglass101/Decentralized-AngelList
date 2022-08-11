import React, { useState, useEffect } from 'react'
import {
    Document,
    Font,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";

  const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Times-Roman',
      fontWeight: 'bold'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald',
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman',
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
    viewer: {
        width: window.innerWidth, //the pdf viewer will take up all of the width and height
        height: window.innerHeight,
      }
  });
  
  Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  });
  
  const Subtitle = ({ children, ...props }) => (
    <Text style={styles.subtitle} {...props}>
      {children}
    </Text>
  );
  
export const Test = () => {
    return (
        <PDFViewer style={styles.viewer}>
      <Document>
      <Page style={styles.body} wrap>
        <Text style={styles.title}>Post Money Valuation Cap</Text>

        {/* <Subtitle>
        THIS INSTRUMENT AND ANY SECURITIES ISSUABLE PURSUANT HERETO HAVE NOT BEEN REGISTERED UNDER THE 
        SECURITIES ACT OF 1933, AS AMENDED (THE “SECURITIES ACT”), OR UNDER THE SECURITIES LAWS OF CERTAIN 
        STATES.  THESE SECURITIES MAY NOT BE OFFERED, SOLD OR OTHERWISE TRANSFERRED, PLEDGED OR HYPOTHECATED 
        EXCEPT AS PERMITTED IN THIS SAFE AND UNDER THE ACT AND APPLICABLE STATE SECURITIES LAWS PURSUANT TO AN 
        EFFECTIVE REGISTRATION STATEMENT OR AN EXEMPTION THEREFROM.  
        </Subtitle> */}
        <Text style={styles.text}>
        THIS INSTRUMENT AND ANY SECURITIES ISSUABLE PURSUANT HERETO HAVE NOT BEEN REGISTERED UNDER THE 
        SECURITIES ACT OF 1933, AS AMENDED (THE “SECURITIES ACT”), OR UNDER THE SECURITIES LAWS OF CERTAIN 
        STATES.  THESE SECURITIES MAY NOT BE OFFERED, SOLD OR OTHERWISE TRANSFERRED, PLEDGED OR HYPOTHECATED 
        EXCEPT AS PERMITTED IN THIS SAFE AND UNDER THE ACT AND APPLICABLE STATE SECURITIES LAWS PURSUANT TO AN 
        EFFECTIVE REGISTRATION STATEMENT OR AN EXEMPTION THEREFROM.
        </Text>  

        <Text style={styles.text}>
        
        </Text>
        <Text style={styles.text}>
         
        </Text>
        <Text style={styles.text}>
       
        </Text>
        <Subtitle break>
          Capítulo II: Que trata de la primera salida que de su tierra hizo el
          ingenioso Don Quijote
        </Subtitle>
        <Text style={styles.text}>
          
        </Text>
        <Text style={styles.text}>
         
        </Text>
        <Text style={styles.text}>
         
        </Text>
        <Text style={styles.text}>
          
        </Text>
        <Text style={styles.text}>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
    </PDFViewer>
    )
}