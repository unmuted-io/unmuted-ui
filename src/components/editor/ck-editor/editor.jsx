import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

function getEditor(editor) {
    switch (editor) {
        case 'classic':
            return ClassicEditor;
        case 'balloon':
            return BalloonEditor;
        case 'inline':
            return InlineEditor;
        case 'document':
            return DecoupledEditor;
        default:
            return ClassicEditor;
    }
}

class CkEditor extends React.Component {
    render() {
        return <CKEditor
                editor={ getEditor(this.props.editor) }
                data= {this.props.html}
                onInit={ editor => {
                    if (this.props.editor === 'document') {
                        const toolbarContainer = document.querySelector('.document-editor__toolbar');
                        toolbarContainer.appendChild(editor.ui.view.toolbar.element);
                        window.editor = editor;
                    }
                    // console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    // const data = editor.getData();
                    // console.log( { event, editor, data } );
                } }
                onBlur={ editor => {
                    // console.log( 'Blur.', editor );
                } }
                onFocus={ editor => {
                    // console.log( 'Focus.', editor );
                } }
            />


    }
}

export default CkEditor;