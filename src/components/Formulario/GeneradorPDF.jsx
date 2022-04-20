import React from "react";
import {
  Page,
  Font,
  PDFDownloadLink,
  Link,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const encabezadoPdf =
  "https://res.cloudinary.com/microfinanzasalcaravanarauca/image/upload/v1641594699/encabezado_6f769b54a9.png";
Font.register({
  family: "Ubuntu",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
    },
    {
      // src: FontUbuntu700,
      // src: 'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf',
      src: "https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf",
      // src: 'http://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmYUtvAx05IsDqlA.ttf',
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});
const styles = StyleSheet.create({
  section: {
    width: "100%",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    position: "relative",
    zIndex: 100,
    top: 0,
    left: 0,
  },
  sectionTabla: {
    width: "95%",
    marginHorizontal: "auto",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "Ubuntu",
    fontWeight: 700,
  },
  fechaText: {
    fontSize: 11,
    // marginTop: 15,
    marginLeft: 21,
    // fontSize: 11,
    marginBottom: 20,
    // marginLeft: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: 11,
    fontFamily: "Ubuntu",
    width: "95%",
  },
  textLine: {
    // margin: 0,
    marginLeft: 20,
    fontSize: 11,
    textAlign: "justify",
    fontFamily: "Ubuntu",
  },
  textHash: {
    fontSize: 9,
    fontFamily: "Ubuntu",
    textAlign: "justify",
    marginLeft: 20,
    textDecoration: "none",
    width: "95%",
  },
  textMd5: {
    fontSize: 8,
    fontFamily: "Ubuntu",
    fontWeight: "bold",
  },
  textTitle: {
    margin: 0,
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Ubuntu",
  },
  containerDepartamentoCartera: {
    flexDirection: "row",
    backgroundColor: "#000000",
  },
  textDepartamentoCartera: {
    margin: 5,
    marginLeft: 20,
    fontFamily: "Ubuntu",
    fontSize: 14,
    fontWeight: 700,
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  imageEncabezado: {
    width: 200,
    height: "auto",
    marginLeft: 350,
  },
  imageFirma: {
    width: 140,
    height: "auto",
    marginLeft: 20,
  },
  textRowTitle: {
    margin: 5,
    fontSize: 11,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowTitle: {
    backgroundColor: "#d9d9d9",
    fontSize: 11,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  rowTableTitle: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 8,
    flexDirection: "row",
    width: "95%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rowTable: {
    paddingVertical: 5,
    flexDirection: "row",
    width: "95%",
  },
  boxIdentificacion: {
    width: 80,
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#000000",
  },
  boxNombre: {
    width: 250,
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#000000",
  },
  responsabilidad: {
    width: 140,
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#000000",
  },
  numeroCredito: {
    width: 70,
    borderWidth: "4px",
    borderStyle: "solid",
    borderColor: "#000000",
  },
  ContainerImageFooter: {
    position: "absolute",
    zIndex: 1,
    bottom: "0%",
    left: 0,
    width: "100%",
  },
  textBold: {
    fontFamily: "Ubuntu",
    fontSize: 11,
    marginLeft: 5,
    fontWeight: "bold",
  },
  containerHash: {
    marginTop: 40,
    width: "92%",
  },
  containerAguaMicrofinanzas: {
    position: "absolute",
    zIndex: 1,
    top: "32%",
    left: 50,
  },
  imgAguaMicrofinanzas: {
    width: 480,
    height: "auto",
  },
  containerArticulo: {
    marginTop: 40,
    width: "92%",
  },
  containerWritingAlDia: {
    marginTop: 20,
  },
});

const MyDoc = (props) => {
  return (
    <Document>
      <Page
        size="LETTER"
        style={{ position: "relative", height: "100%", width: "100%" }}
        title="Paz y salvo Microfinanzas EL Alcaraván"
        author="Microfinanzas El Alcaraván"
        language="Español"
      >
        <View style={styles.section}>
          <Image style={styles.imageEncabezado} src={encabezadoPdf} />
          <Text style={styles.fechaText}>ARAUCA, 19 de abril de 2020</Text>
          <Text style={styles.title}>LA FUNDACIÓN EL ALCARAVÁN</Text>
          <Text style={styles.textTitle}>NIT 800088424-1</Text>
          <Text style={styles.title}>HACE CONSTAR QUE</Text>
          <View style={styles.sectionTabla}>
            <View style={styles.rowTableTitle}>
              <View style={styles.boxIdentificacion}>
                <Text style={styles.textBold}>CC. N°</Text>
              </View>
              <View style={styles.boxNombre}>
                <Text style={styles.textBold}>NOMBRE CLIENTE</Text>
              </View>
              <View style={styles.numeroCredito}>
                <Text style={styles.textBold}>N° CRÉDITO</Text>
              </View>
              <View style={styles.responsabilidad}>
                <Text style={styles.textBold}>RESPONSABILIDAD</Text>
              </View>
            </View>
            <View style={styles.rowTable}>
              <View style={styles.boxIdentificacion}>
                <Text style={styles.textRowTitle}>numidentidadtitular</Text>
              </View>
              <View style={styles.boxNombre}>
                <Text style={styles.textRowTitle}>nombretitular</Text>
              </View>
              <View style={styles.numeroCredito}>
                <Text style={styles.textRowTitle}>credito</Text>
              </View>
              <View style={styles.responsabilidad}>
                <Text style={styles.textRowTitle}>Titular</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textLine}>
              <Text style={styles.textBold}>Fecha de desembolso:</Text>{" "}
            </Text>
          </View>
          <View>
            <Text style={styles.textLine}>
              <Text style={styles.textBold}>Plazo:</Text> plazo meses.
            </Text>
          </View>
          <View style={styles.containerWritingAlDia}>
            <Text style={styles.text}>
              A fecha de hoy tiene un saldo total de{" "}
              <Text style={styles.textBold}>useFormat(data.saldo)</Text>, y se
              encuentra al día con la obligación.
            </Text>
          </View>
          <View style={styles.containerWritingAlDia}>
            <Text style={styles.text}>
              La presente se expide a solicitud de los interesados.
            </Text>
          </View>

          <View style={styles.containerArticulo}>
            <Text style={styles.textHash}>
              De acuerdo con el articulo 10 del artículo 1.6.1.12.12 Decreto
              1625 de 2016, los certificados expedidos en forma continua por
              computador no requieren firma autógrafa.
            </Text>
          </View>
          <View style={styles.containerHash}>
            <Text style={styles.textHash}>
              Puede consultar la veracidad del certificado en{" "}
              <Link
                src="https://microfinanzasalcaravan.com.co/verificar-certificado"
                style={styles.textHash}
              >
                https://microfinanzasalcaravan.com.co/verificar-certificado
              </Link>{" "}
              con el código{" "}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const MiTurno = (props) => {
  const { data } = props;
  return (
    <div>
      <PDFDownloadLink document={<MyDoc data={data} />} fileName="miTienda.pdf">
        {({ blob, url, loading, error }) => (
          <button>{loading ? "Cargando Documento..." : "Descargar "}</button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default MiTurno;
