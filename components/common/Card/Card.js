import React from 'react';

const getChildrenOnDisplayName = (children, displayName) => {
    return React.Children.map(children, (child) => {
        return child.type.displayName == displayName ? child : null;
    });
};

function Card({ children, className }) {
    const Header = getChildrenOnDisplayName(children, 'Header');
    const Body = getChildrenOnDisplayName(children, 'Body');
    const Footer = getChildrenOnDisplayName(children, 'Footer');
    return (
        <div className={`bg-white p-5 rounded-xl inline-block ${className}`}>
            {Header}
            {Body}
            {Footer}
        </div>
    );
}

const Header = ({ children, style, className, ...other }) => {
    return <div>{children}</div>;
};

Header.displayName = 'Header';
Card.Header = Header;

const Body = ({ children, styles, className, ...other }) => {
    return <div className={`p-3 bg-gray-200 rounded-xl ${className}`}>{children}</div>;
};

Body.displayName = 'Body';
Card.Body = Body;

const Footer = ({ children, styles, className, ...other }) => {
    return <div>{children}</div>;
};

Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;
