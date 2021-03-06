import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
        isOpen: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        const {
            onClick,
            props: { isOpen, label },
        } = this;

        return (
            <div
                // style={{ "{{"}}
                style={{
                    // background: isOpen ? '#fae042' : '#6db65b',
                    'border-top': '1px solid #8f8f68',
                    padding: '5px 10px',
                }
                }
            >
                <div onClick={onClick} style={{ cursor: 'pointer' }}>
                    {label}
                    < div style={{ float: 'right' }}>
                        {!isOpen && <span>&#9650;</span>}
                        {isOpen && <span>&#9660;</span>}
                    </div >
                </div >
                { isOpen && (
                    <div
                        style={{
                            // background: '#6db65b',
                            // 'border-top': '1px solid #8f8f68',
                            marginTop: 10,
                            padding: '10px 20px',
                        }
                        }
                    >
                        { this.props.children}
                    </div >
                )
                }
            </div >
        );
    }
}

export default AccordionSection;