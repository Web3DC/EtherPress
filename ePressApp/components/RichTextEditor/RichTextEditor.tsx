import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import ThemeEditor from '@/ThemeEditor';
import ToolbarPlugin from '../plugins/ToolbarPlugin';
import './RichTextEditor.css';
import React, { useEffect } from 'react';

function Placeholder() {
  return <div className="editor-placeholder">Write your blog content here...</div>;
}

const editorConfig = {
  namespace: 'React.js Demo',
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error;
  },
  // The editor theme
  theme: ThemeEditor,
};

const EditorCapturePlugin = React.forwardRef(function EditorCapturePlugin(props: any, ref: any) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    ref.current = editor;
    return () => {
      ref.current = null;
    };
  }, [editor, ref]);

  return null;
});


const RichTextEditor = React.forwardRef(function RichTextEditor(props: any, ref: any) {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <EditorCapturePlugin ref={ref} />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
});

export default RichTextEditor;
