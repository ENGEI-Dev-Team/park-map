import React from 'react'

type Props = {
  text: string;
};

const SubTitleText = ({ text }: Props) => (
  <p className="text-xl mt-2">{text}</p>
);

export default SubTitleText;
