import { IconButton } from '@mui/material'
import * as S from './styles'
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
            const itemWidth = 160;
            const maxPos = Math.max(0, Math.ceil(listWidth / itemWidth) - Math.ceil(containerWidth / itemWidth));
            setMaxPosition(maxPos);
        }
    }, [children]);

    const handleLeftArrow = () => {
        if (listPosition > 0) {
            setListPosition(prevPosition => {
                const newPosition = prevPosition - 1;
                setScrollx(newPosition * 160);
                return newPosition;
            });
        }
    }

    const handleRightArrow = () => {
        if (listPosition < maxPosition) {
            setListPosition(prevPosition => {
                const newPosition = prevPosition + 1;
                setScrollx(newPosition * 160);
                return newPosition;
            });
        }
    }

    return (
        <S.Container ref={containerRef}>
            <IconButton color="primary" sx={{
                left: '9%',
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
            <S.List position={scrollx} ref={listRef}>
                {children}
            </S.List>
            <IconButton color="primary" sx={{
                right: '9%',
                position: 'absolute',
                background: 'white',
                '&:hover': {
                    background: '#f4f4f4'
                },
            }} size='large' onClick={handleRightArrow}
                disabled={listPosition === maxPosition}>
                <NavigateNextIcon />
            </IconButton>
        </S.Container>
    )
}
