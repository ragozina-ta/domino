"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=44e8a6c7"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=44e8a6c7"; const createRoot = __vite__cjsImport1_reactDom_client["createRoot"];
import App from "/src/App.tsx";
import { ErrorBoundary } from "/src/components/error-boundary.tsx";
import "/src/index.css";
createRoot(document.getElementById("root"), {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  }
}).render(
  /* @__PURE__ */ jsxDEV(ErrorBoundary, { "data-replit-metadata": "artifacts/chemical-chain/src/main.tsx:14:2", "data-component-name": "ErrorBoundary", children: /* @__PURE__ */ jsxDEV(App, { "data-replit-metadata": "artifacts/chemical-chain/src/main.tsx:15:4", "data-component-name": "App" }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/chemical-chain/src/main.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "/home/runner/workspace/artifacts/chemical-chain/src/main.tsx",
    lineNumber: 14,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IjtBQWNJO0FBZEosU0FBU0Esa0JBQWtCO0FBRTNCLE9BQU9DLFNBQVM7QUFDaEIsU0FBU0MscUJBQXFCO0FBRTlCLE9BQU87QUFFUEYsV0FBV0csU0FBU0MsZUFBZSxNQUFNLEdBQUk7QUFBQTtBQUFBLEVBRTNDQyxlQUFlQSxDQUFDQyxPQUFPQyxjQUFjO0FBQ25DQyxZQUFRRixNQUFNQSxPQUFPQyxVQUFVRSxjQUFjO0FBQUEsRUFDL0M7QUFDRixDQUFDLEVBQUVDO0FBQUFBLEVBQ0QsdUJBQUMsaUJBQVksOEdBQ1gsaUNBQUMsT0FBRSxzR0FBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQUksS0FETjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUE7QUFDRiIsIm5hbWVzIjpbImNyZWF0ZVJvb3QiLCJBcHAiLCJFcnJvckJvdW5kYXJ5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9uQ2F1Z2h0RXJyb3IiLCJlcnJvciIsImVycm9ySW5mbyIsImNvbnNvbGUiLCJjb21wb25lbnRTdGFjayIsInJlbmRlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeSB9IGZyb20gJ0AvY29tcG9uZW50cy9lcnJvci1ib3VuZGFyeSc7XG5cbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykhLCB7XG4gIC8vIEtlZXBzIGNhdWdodCBlcnJvcnMgb2ZmIHJlcG9ydEVycm9yKCksIHdoaWNoIHdvdWxkIHJhaXNlIHRoZSBkZXYgb3ZlcmxheS5cbiAgb25DYXVnaHRFcnJvcjogKGVycm9yLCBlcnJvckluZm8pID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yLCBlcnJvckluZm8uY29tcG9uZW50U3RhY2spO1xuICB9LFxufSkucmVuZGVyKFxuICA8RXJyb3JCb3VuZGFyeT5cbiAgICA8QXBwIC8+XG4gIDwvRXJyb3JCb3VuZGFyeT4sXG4pO1xuIl0sImZpbGUiOiIvaG9tZS9ydW5uZXIvd29ya3NwYWNlL2FydGlmYWN0cy9jaGVtaWNhbC1jaGFpbi9zcmMvbWFpbi50c3gifQ==