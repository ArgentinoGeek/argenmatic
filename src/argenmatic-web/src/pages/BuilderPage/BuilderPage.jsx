import React, { useEffect, useRef } from 'react';
import styles from './BuilderPage.module.css';
import FancyNavbar from "../../components/FancyNavbar/FancyNavbar";
import styled from 'styled-components';
import EmailEditor from 'react-email-editor';
import axios from 'axios';
import { saveAs } from 'file-saver';
import sample from './sample.json';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }
  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const BuilderPage = (props) => {
    useEffect(() => {
        document.title = 'Argenmatic - Builder';
    });

    const emailEditorRef = useRef(null);

    const saveDesign = () => {
        emailEditorRef.current.editor.saveDesign((design) => {
            console.log('saveDesign', design);
            alert('Design JSON has been logged in your developer console.');
        });
    };

    const exportHtml = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            var encodedHtml = html.toString().replace(/"/g, '\\"')
                .replace(/\r?\n|\r/g, "");
            console.log('exportHtml', encodedHtml);
            // alert('Output HTML has been logged in your developer console.');
        });
    };

    const downloadPdf = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            // console.log('exportHtml', html);

            var encodedHtml = html.toString().replace(/"/g, '\\"')
                .replace(/\r?\n|\r/g, "");

            axios.post(`https://localhost:44376/Resume`, JSON.stringify(encodedHtml),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    responseType: 'arraybuffer'
                })
                .then(res => {
                    const buffer = Buffer.from(res.data, 'base64');
                    var base64 = btoa(String.fromCharCode.apply(null, buffer));
                    var fileContent = res.data.toString('base64');
                    console.log(base64);
                    var url = "data:application/pdf;base64," + base64;
                    // console.log(url);

                    window.open(url);
                    // const file = new Blob([new Uint8Array(res.data)], { type: 'application/pdf' });
                    // console.log(file);

                    // saveAs(file, 'Resume.pdf');
                }
                )
                .catch(error => {
                    console.log(error.response)
                });
        });
    };

    const onDesignLoad = (data) => {
        console.log('onDesignLoad', data);
    };

    const onLoad = () => {
        emailEditorRef.current.editor.addEventListener(
            'onDesignLoad',
            onDesignLoad
        );
        emailEditorRef.current.editor.loadDesign(sample);
    };

    return (
        <div className={styles.builderContainer}>
            <FancyNavbar />
            <Container>
                <Bar>
                    <h1>React Email Editor (Demo)</h1>

                    <button onClick={saveDesign}>Save Design</button>
                    <button onClick={exportHtml}>Export HTML</button>
                    <button onClick={downloadPdf}>Download (PDF)</button>
                </Bar>

                <React.StrictMode>
                    <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
                </React.StrictMode>
            </Container>
        </div>
    );
}

export default BuilderPage;