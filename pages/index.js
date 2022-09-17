import Timeline from '../components/common/Timeline/Tiimeline';
import { TbBrandReactNative, TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandDocker } from 'react-icons/tb';
import { SiRedux, SiKubernetes, SiSass, SiNextdotjs, SiInstagram, SiLinkedin, SiTwitter, SiGithub, SiFacebook, SiGmail } from 'react-icons/si';
import Tag from '../components/common/Tag/Tag';
import Heading from '../components/common/Heading/Heading';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../components/common/Button/Button';

export default function Home() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7gftwdf', 'template_xacdg8f', form.current, 'fOiVoiLc0LGZxeiEg').then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <div>
            <div className='flex flex-wrap items-center justify-center'>
                <Tag className='rounded-full'>
                    <a href='https://instagram.com/noob.hav' target='_blank'>
                        <SiInstagram />
                    </a>
                </Tag>
                <Tag className='rounded-full'>
                    <a href='https://facebook.com/imvaib' target='_blank'>
                        <SiFacebook />
                    </a>
                </Tag>
                <Tag>
                    <a href='https://www.linkedin.com/in/vaib1343/' target='_blank'>
                        <SiLinkedin />
                    </a>
                </Tag>
                <Tag>
                    <a href='https://github.com/vaib1343' target='_blank'>
                        <SiGithub />
                    </a>
                </Tag>
                <Tag>
                    <a className='https://twitter.com/VaibVarshney' target='_blank'>
                        <SiTwitter />
                    </a>
                </Tag>
            </div>
            <div className=' mt-10'>
                <Heading size={'sm'} weight={'semibold'}>
                    EXPERIENCE:
                </Heading>
                <Timeline />
            </div>
            <div className='mt-10'>
                <Heading size={'sm'} weight='semibold'>
                    SKILLS:
                </Heading>
                <div className='ml-3 mt-5 flex flex-wrap items-center'>
                    <Tag>
                        <TbBrandHtml5 className='inline' /> HTML
                    </Tag>
                    <Tag>
                        <TbBrandCss3 className='inline' /> CSS
                    </Tag>
                    <Tag>
                        <TbBrandJavascript className='inline' /> Javascript
                    </Tag>
                    <Tag>
                        <TbBrandReactNative className='inline' /> React.js
                    </Tag>
                    <Tag>
                        <SiNextdotjs className='inline' /> Next.js
                    </Tag>
                    <Tag>
                        <SiRedux className='inline' /> Redux
                    </Tag>
                    <Tag>
                        <SiSass className='inline' /> Sass
                    </Tag>
                    <Tag>
                        <TbBrandDocker className='inline' /> Docker
                    </Tag>
                    <Tag>
                        <SiKubernetes className='inline' /> K8
                    </Tag>
                </div>
                <div className='mt-10'>
                    <Heading size={'sm'} weight='semibold'>
                        CONTACT:
                    </Heading>
                    <div>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                                    Name
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' placeholder='Name' name='from_name' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                                    Email
                                </label>
                                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' placeholder='xyz@gmail.com' name='email_id' />
                            </div>
                            <div className='mb-4'>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
                                    Message
                                </label>
                                <textarea className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='message' name='message' placeholder='Hi! any message' />
                            </div>
                            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='sumbit'>
                                <SiGmail className='inline' /> Send
                            </button> */}
                                <Button color='blue' className='text-white rounded' type='submit'>
                                    <SiGmail className='inline' /> Send
                                </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
