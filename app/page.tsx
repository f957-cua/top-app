'use client';
import { useEffect, useState } from 'react';
import {Htag, Button, P, Tag} from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState(() => 11);
  useEffect(()=>{
    console.log('mounted', counter);
  }, []);
  
  useEffect(()=>{
    console.log('updated', counter);
  }, [counter]);

  return (
      <>
        <Htag tag='h1'>Курсы по Photoshops {counter}</Htag>
        <Button appearance='primary'arrow='right' onClick={() => setCounter(x=> x + 1)}>Button</Button>
        <Button appearance='ghost' arrow='down'>Buttons</Button>
        <P size='l'>Large</P>
        <P>Medium</P>
        <P size='s'>Small</P>
        <Tag size='s' color='grey'>tag</Tag>
        <Tag color='green'>Tag</Tag>
        <Tag color='red'>Tag</Tag>
        <Tag size='s' color='primary'>Tag</Tag>
      </>
  );
}
