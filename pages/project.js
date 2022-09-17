import React from 'react';
import Tag from '../components/common/Tag/Tag';

function project() {
    return (
        <div>
            <div className='flex gap-4 mt-4'>
                <div className='w-2/3'>
                    <img src='/bookit.png' className='rounded-xl' />
                </div>
                <div className='w-1/2'>
                    <p className='text-gray-600'>A platform that helps people find hotels that suit their needs. It is built with an integrated Stripe payment system utilising nextjs and redux for state management.</p>
                    <div className='mt-5'>
                        <Tag className='cursor-pointer'>
                            <a href='https://github.com/vaib1343/bookit'>Repo</a>
                        </Tag>
                        <Tag className='cursor-pointer'>
                            <a href='https://bookit1343.vercel.app/'>Demo</a>
                        </Tag>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 mt-4'>
                <div className='w-2/3'>
                    <img src='/task.png' className='rounded-xl' />
                </div>
                <div className='w-1/2'>
                    <p className='text-gray-600'>The platform facilitates with the user's task organisation using Jira as inspiration. This programme allows you to create tasks and change their status as needed</p>
                    <div className='mt-5'>
                        <Tag className='cursor-pointer'>
                            <a href='https://github.com/vaib1343/task_management'>Repo</a>
                        </Tag>
                        <Tag className='cursor-pointer'>
                            <a href='https://task-management-alpha.vercel.app/'>Demo</a>
                        </Tag>
                    </div>
                </div>
            </div>
            <div className='flex gap-4 mt-4'>
                <div className='w-2/3'>
                    <img src='/corona.png' className='rounded-xl' />
                </div>
                <div className='w-1/2'>
                    <p className='text-gray-600'>This website offers a graphic portrayal of the COVID19 pandemic's global death toll and population of infected persons. Additionally, it provides data broken down by country on the number of fatalities, infected, and recovered people.</p>
                    <div className='mt-5'>
                        <Tag className='cursor-pointer'>
                            <a href='https://github.com/vaib1343/covid'>Repo</a>
                        </Tag>
                        <Tag className='cursor-pointer'>
                            <a href='https://vaib1343.github.io/covid'>Demo</a>
                        </Tag>
                    </div>
                </div>
            </div>
            {/* <Card className={'w-[23rem]'}>
                <Card.Header>
                    <a href='https://bookit1343.vercel.app/' target='_blank'>
                        <img className='w-[100%] rounded-xl' src='/bookit.png' />
                        <h3 className='my-2 text-gray-500 text-lg font-bold'>Bookit</h3>
                    </a>
                </Card.Header>

                <Card.Body className='h-[15rem]'>
                    <p>A platform that helps people find hotels that suit their needs. It is built with an integrated Stripe payment system utilising nextjs and redux for state management.</p>
                </Card.Body>
            </Card>
            <Card className={'w-[23rem]'}>
                <Card.Header>
                    <a href='https://vaib1343.github.io/covid' target='_blank'>
                        <img className='w-[100%] rounded-xl' src='/corona.png' />
                        <h3 className='my-2 text-gray-500 text-lg font-bold'>Coronameter</h3>
                    </a>
                </Card.Header>
                <Card.Body className='h-[15rem]'>
                    <p>This website offers a graphic portrayal of the COVID19 pandemic's global death toll and population of infected persons. Additionally, it provides data broken down by country on the number of fatalities, infected, and recovered people.</p>
                </Card.Body>
            </Card>
            <Card className={'w-[23rem]'}>
                <Card.Header>
                    <a href='https://task-management-alpha.vercel.app/' target='_blank'>
                        <img className='w-[100%] rounded-xl' src='/task.png' />
                        <h3 className='my-2 text-gray-500 text-lg font-bold'>Bookit</h3>
                    </a>
                </Card.Header>
                <Card.Body className='h-[15rem]'>
                    <p>The platform facilitates with the user's task organisation using Jira as inspiration. This programme allows you to create tasks and change their status as needed.</p>
                </Card.Body>
            </Card> */}
        </div>
    );
}

export default project;
