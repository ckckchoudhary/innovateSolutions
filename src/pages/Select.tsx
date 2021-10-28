import React, { Component } from 'react';

interface SelectOptions {
    label: string;
    value: string;
}

interface SelectProps {
    name: string;
    options: Array<SelectOptions>
    selected: string
}

class Select extends Component<SelectProps> {
    render() {
        const { name, options, selected } = this.props;
        return (
            <div>
                <select name={name}>
                    {(options && options.length > 0) &&
                        options.map(({ label, value }) => { 
                            return (<option key={value} value={value} selected={(selected === value)}>{label}</option>)
                        })
                    }
                </select>
            </div>
        );
    }
}

export default Select;