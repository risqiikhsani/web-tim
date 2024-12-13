"use client";

import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Strike from "@tiptap/extension-strike";
import React from "react";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Strike,
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    autofocus: true,
  });

  if (!editor) {
    return null;
  }

  // Toolbar for editor actions
  const Toolbar = () => (
    <div className="flex space-x-2 p-2 border-b bg-gray-100">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 ${editor.isActive("bold") ? "bg-gray-300" : ""}`}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 ${editor.isActive("italic") ? "bg-gray-300" : ""}`}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-2 ${editor.isActive("strike") ? "bg-gray-300" : ""}`}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-2 ${editor.isActive("heading", { level: 1 }) ? "bg-gray-300" : ""}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}
      >
        H2
      </button>
    </div>
  );

  return (
    <div>
      <Toolbar />
      <EditorContent editor={editor} />

      {/* Floating menu */}
      {editor && (
        <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="p-2 bg-white shadow rounded">
            <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
            <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
          </div>
        </FloatingMenu>
      )}

      {/* Bubble menu */}
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="p-2 bg-white shadow rounded">
            <button onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</button>
            <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
              H3
            </button>
          </div>
        </BubbleMenu>
      )}
    </div>
  );
};

export default Tiptap;
