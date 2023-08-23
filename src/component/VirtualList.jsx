import React, { useState, useRef } from 'react';
import styles from './VirtualList.module.css'

const ITEM_HEIGHT = 60;
const QTY_SHOW = 4

const VirtualList = ({ total }) => {
  const [startOffset, setStartOffset] = useState(0); // Для расчета отступа
  const [visibleCount, setVisibleCount] = useState(QTY_SHOW); // Кол-во отображаемых элементов
  const containerRef = useRef(null); // Получить доступ к контейнеру списка

  const handleScroll = () => { // Функия обработки скролла
    const scrollTop = containerRef.current.scrollTop; // Где в данный момент скролл
    const startIndex = Math.floor(scrollTop / ITEM_HEIGHT); // Индекс перевого элемента, который будем видимым
    
    setStartOffset(startIndex * ITEM_HEIGHT); // Начальное смещение
    setVisibleCount(Math.min(QTY_SHOW, total - startIndex)); // Количество видимых элементов
  }
    
  return (
    <div ref={containerRef} onScroll={handleScroll} className={styles.wrapper}>
      <ul className={styles.list} style={{ height: `${total * ITEM_HEIGHT}px` }}>
        {/* Рендер видимых элементов списка */}
        {Array.from({ length: visibleCount }).map((_, index) => (
          <li key={index} className={styles.itemList} style={{ top: `${startOffset + index * ITEM_HEIGHT}px` }}>
            {startOffset / ITEM_HEIGHT + index + 1}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default VirtualList;