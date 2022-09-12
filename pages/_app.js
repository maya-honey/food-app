import "../styles/globals.css";


//Componentは現在activeなページ。ルート間を異動す
//る度に中身が代わる。
//pagePropsは、データ取得メソッドによってページに
//プリロードされた初期Propsを持つオブジェクト。
//それ以外は空のオブジェクト。
function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
