import React from 'react';
import ReactDOM from 'react-dom';
import AsyncApiComponent from "@asyncapi/react-component";
// import {PropsSchema} from "@asyncapi/react-component/lib/types";
import "@asyncapi/react-component/lib/styles/fiori.css";

// const schema: PropsSchema = {
//     // url: "https://domain.com/async-docs.yml",
// }

// const schema: PropsSchema = {
//     url: "asyncapi.yaml",
// }

const schema: string = `
asyncapi: 2.0.0
info:
  title: Account Service
  version: '1.0.0'
  description: |
    Manages user accounts in the system.
  license:
    name: Apache 2.0
    url: https://www.apache.org/licenses/LICENSE-2.0

servers:
  production:
    url: mqtt://test.mosquitto.org
    protocol: mqtt
    description: Test MQTT broker

channels:
  user/signedup:
    subscribe:
      operationId: emitUserSignUpEvent
      message:
        $ref : '#/components/messages/UserSignedUp'

components:
  messages:
    UserSignedUp:
      name: userSignedUp
      title: User signed up event
      summary: Inform about a new user registration in the system
      contentType: application/json
      payload:
        $ref: '#/components/schemas/userSignedUpPayload'

  schemas:
    userSignedUpPayload:
      type: object
      properties:
        firstName:
          type: string
          description: "foo"
        lastName:
          type: string
          description: "bar"
        email:
          type: string
          format: email
          description: "baz"
        createdAt:
          type: string
          format: date-time
`

ReactDOM.render(
  <React.StrictMode>
      <AsyncApiComponent schema={schema} />
  </React.StrictMode>,
  document.getElementById('root')
);
