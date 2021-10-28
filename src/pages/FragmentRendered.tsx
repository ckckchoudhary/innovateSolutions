import React, { Component, useEffect, useState } from 'react';

const Fragment: React.FC = () => {
    return <>
        <li>Hello</li>
        <li>World</li>
    </>
}

const FragmentRender: React.FC = () => {
    return <div>
        <p>Fragment Renderer</p>
        <ul>
            <Fragment />
        </ul>
    </div>
}