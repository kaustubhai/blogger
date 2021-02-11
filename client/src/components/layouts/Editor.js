import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const Editor = ({setDescription, description}) => {
    return (
        <div>
            <CKEditor
                    editor={ ClassicEditor }
                    data={description}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setDescription(data)
                    }}
                />
        </div>
    )
}

export default Editor
