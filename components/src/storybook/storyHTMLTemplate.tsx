import React from 'react';

export const storyHTMLTemplate = (title: string, children: React.ReactNode) => {
  return (
    <div className="component-container">
      <h2> {title} </h2>
      <hr />
      <div className="flex-components">{children}</div>
    </div>
  );
};
