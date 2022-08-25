import { match } from 'assert';
import { useState, useCallback } from 'react';
const { createEditor, Editor, Transforms } = require('slate');
import { Element as SlateElement } from 'slate';
const { Editable, Slate, withReact, ReactEditor } = require('slate-react');

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const Button = (props: any) => {
  const { children, format, active, ...rest } = props;
  return (
    <button
      className={active ? 'bg-red-500' : 'btn primary-btn'}
      title={format}
      {...rest}
    >
      {children}
    </button>
  );
};

const toggleMark = (editor: any, format: any) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
  ReactEditor.focus(editor);
};
const isMarkActive = (editor: any, format: any) => {
  const marks: any = Editor.marks(editor);

  return marks ? marks[format] === true : false;
};

const DefaultElement = (props: any) => {
  return <p {...props.attributes}>{props.children}</p>;
};
const CodeElement = (props: any) => {
  return (
    <h2 className="text-2xl font-bold" {...props.attributes}>
      {props.children}
    </h2>
  );
};

const MyEditor = () => {
  const [editor] = useState(() => withReact(createEditor()));
  const format = 'hOne';

  const renderElement = useCallback((props: any) => {
    switch (props.element.type) {
      case format:
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const matchCustom = (props: string) => {
    return Editor.nodes(editor, {
      match: (n: any) => n.type === props,
    });
  };
  const transformCustom = (match: any, props: string) => {
    return Transforms.setNodes(
      editor,
      { type: match ? 'paragraph' : props },
      { match: (n: any) => Editor.isBlock(editor, n) }
    );
  };

  return (
    <Slate editor={editor} value={initialValue}>
      <div className="w-full">
        <div className="flex px-1 py-2">
          <Button
            active={isMarkActive(editor, format)}
            format={format}
            onMouseDown={(e: any) => {
              e.preventDefault();
              const [match] = matchCustom('hOne');
              transformCustom(match, 'hOne');
            }}
          >
            見出し
          </Button>
          <Button
            active={isMarkActive(editor, format)}
            format={format}
            onMouseDown={(e: any) => {
              e.preventDefault();
              const [match] = matchCustom('hOne');
              transformCustom(match, 'hOne');
            }}
          >
            見出し
          </Button>
        </div>
        <Editable
          renderElement={renderElement}
          className="create-form h-96 resize-y"
          placeholder="説明文"
          onKeyDown={(event: any) => {
            if (event.key === 'Tab') {
              // Prevent the ampersand character from being inserted.
              event.preventDefault();
              // Execute the `insertText` method when the event occurs.
              editor.insertText('  ');
            }
          }}
        />
      </div>
    </Slate>
  );
};

export default MyEditor;
