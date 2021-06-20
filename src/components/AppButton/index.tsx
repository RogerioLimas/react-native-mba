import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    onPress: () => void;
    title: string;
}

const AppButton = (props: Props) => {
    const { onPress, title } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;
