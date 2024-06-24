'use client'
import { IconButton } from '@mui/material'
import './styles.scss'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React, { useRef, useState, useEffect } from 'react';

type ListRowProps = {
    children: React.ReactNode
}



export const ListRow: React.FC<ListRowProps> = ({ children }) => {
    const [listPosition, setListPosition] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollx, setScrollx] = useState(0);
    const [maxPosition, setMaxPosition] = useState(0);

    useEffect(() => {
        if (containerRef.current && listRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const listWidth = listRef.current.scrollWidth;
            const maxPos = Math.max(0, Math.ceil((listWidth - containerWidth) / 280));
            setMaxPosition(maxPos);
        }
    }, [children]);

    const handleLeftArrow = () => {
        if (listPosition > 0) {
            setListPosition(prevPosition => {
                const newPosition = prevPosition - 1;
                setScrollx(newPosition * 280);
                return newPosition;
            });
        }
    }

    const handleRightArrow = () => {
        if (listPosition < maxPosition) {
            setListPosition(prevPosition => {
                const newPosition = prevPosition + 1;
                setScrollx(newPosition * 280);
                return newPosition;
            });
        }
    }

    return (
        <div className='wrapper-list'>
            <div className='container-list' ref={containerRef}>
                <IconButton color="primary" sx={{
                    left: '-35px',
                    position: 'absolute',
                    zIndex: 1,
                    background: 'white',
                    '&:hover': {
                        background: '#f4f4f4'
                    },
                }} size='large'
                    onClick={handleLeftArrow}
                    disabled={listPosition === 0}>
                    <NavigateBeforeIcon />
                </IconButton>
                <div className='list' style={{ transform:` translate3d(-${scrollx}px, 0px, 0px)`}} ref={listRef}>
                    {children}
                </div>
                <IconButton color="primary" sx={{
                    right: "-35px",
                    zIndex: 2,
                    position: 'absolute',
                    background: 'white',
                    '&:hover': {
                        background: '#f4f4f4'
                    },
                }} size='large' onClick={handleRightArrow}
                    disabled={listPosition === maxPosition}>
                    <NavigateNextIcon />
                </IconButton>
            </div>
        </div>
    )
}
