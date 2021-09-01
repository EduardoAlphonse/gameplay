import React from 'react';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories';
import { Category } from '../Category';

import { styles } from './styles';

type CategorySelectProps = {
  selectedCategory: string;
  hasCheckBox?: boolean;
  handleCategorySelect: (categoryId: string) => void;
};

export function CategorySelect({
  selectedCategory,
  hasCheckBox,
  handleCategorySelect,
}: CategorySelectProps) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingLeft: 24, paddingRight: 12 }}
    >
      {categories.map(({ id, icon, title }) => (
        <Category
          key={id}
          icon={icon}
          title={title}
          checked={id === selectedCategory}
          onPress={() => handleCategorySelect(id)}
          hasCheckBox={hasCheckBox}
        />
      ))}
    </ScrollView>
  );
}
