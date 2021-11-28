import React, { useRef, useEffect } from "react";
import { WebView } from "react-native-webview";

export default function WebViewScreen({ navigation, route }) {
  const ref = useRef(null);
  const { url } = route.params;

  useEffect(() => {
    ref.current.reload();
  }, []);

  return (
    <WebView
      ref={ref}
      source={{ uri: url }}
      style={{ marginTop: 20 }}
    />
  );
}
