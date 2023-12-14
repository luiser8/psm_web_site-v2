import React from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import IconCustom from './IconCustom';

const AccordionCustom = ({ data }) => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            {data.length !== 0 ? (
                <>
                    {data.map((item, index) => (
                        <Accordion key={index} open={open === item.id} icon={<IconCustom id={item.id} open={open} />}>
                            <AccordionHeader onClick={() => handleOpen(item.id)}>{item.title}</AccordionHeader>
                            <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                {item.description1}
                            </AccordionBody>
                            <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                {item.description2}
                            </AccordionBody>
                            <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                {item.description3}
                            </AccordionBody>
                            <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                {item.description4}
                            </AccordionBody>
                            {item?.description5 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description5}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description6 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description6}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description7 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description7}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description8 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description8}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description9 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description9}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description10 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description10}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description11 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description11}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description12 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description12}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description13 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description13}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description14 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description14}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description15 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description15}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description16 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description16}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description17 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description17}
                                </AccordionBody>
                            ) : (<></>)}
                            {item?.description18 ? (
                                <AccordionBody className="pt-0 font-normal text-md text-dark mb-1">
                                    {item.description18}
                                </AccordionBody>
                            ) : (<></>)}
                        </Accordion>
                    ))}
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default AccordionCustom;