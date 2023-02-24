import React from 'react';
import ReactDOM from 'react-dom';
import AsyncApiComponent from "@asyncapi/react-component";
import {PropsSchema} from "@asyncapi/react-component/lib/types";
import "@asyncapi/react-component/lib/styles/fiori.css";

const schema: PropsSchema = {
    // url: "https://api.ms.transfergo.com/" + serviceName + "/v1/async-docs.yml",
    url: "asyncapi.yaml",
}

ReactDOM.render(
  <React.StrictMode>
      <AsyncApiComponent schema={schema} />
  </React.StrictMode>,
  document.getElementById('root')
);
