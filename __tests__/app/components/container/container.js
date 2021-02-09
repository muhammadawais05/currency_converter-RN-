import React, { Children, PropTypes } from 'react';
import {view} from 'react-native';
import { styles } from '.';

import styles from './styles';

const Container = ({Children}) => {
    <view style={styles.Container}>
        {Children}
    </view>
};

Container.protoTypes = {
    Children: PropTypes.any,

};

export default Container;