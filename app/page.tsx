// 'use client';
// import { useState } from 'react';
import { TextArea } from '@/components/TextArea/TextArea';
import {Htag, Button, P, Tag } from '../components';
import { Input } from '@/components/Input/Input';
//import getMenu from '@/api/menu';


async function Home(): Promise<JSX.Element> {
  // const [rating, setRating] = useState<number>(4);
  //const menu = await getMenu(0);
  return (
      <>
        <Htag tag='h1'>Курсы по Photoshops</Htag>
        <Button appearance='primary'arrow='right'>Button</Button>
        <Button appearance='ghost' arrow='down'>Buttons</Button>
        <P size='l'>Large</P>
        <P>Medium</P>
        <P size='s'>Small</P>
        <Tag size='s' color='grey'>tag</Tag>
        <Tag color='green'>Tag</Tag>
        <Tag color='red'>Tag</Tag>
        <Tag size='s' color='primary'>Tag</Tag>
        <Input placeholder='test' />
        <TextArea />
        
      </>
  );
}

export default Home;
/* <Rating rating={rating} isEditable setRating={setRating}/> */