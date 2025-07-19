import React from 'react'

type Props = {
  text: string;
};

const TitleText = ({ text }: Props) => (
  <h1 className="text-4xl md:text-6xl font-bold">{text}</h1>
);
export default TitleText;
