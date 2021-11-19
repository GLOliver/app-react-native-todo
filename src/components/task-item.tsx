import React, { useCallback } from "react";
import { Pressable } from 'react-native';
import { Box, HStack, Text, useTheme, themeTools, useColorModeValue } from 'native-base';
import AnimatedCheckBox from "./animated-checkbox";

interface Props {
    isDone: boolean,
    onToggleCheckbox?: () => void
}

const TaskItem = (props: Props) => {
    const { isDone, onToggleCheckbox } = props;
    const theme = useTheme();
    const highlightColor = themeTools.getColor(
        theme,
        useColorModeValue('blue.500', 'blue.400')
    );
    const boxStroke = themeTools.getColor(
        theme,
        useColorModeValue('muted.300', 'muted.500')
    );
    const checkmarkColor = themeTools.getColor(
        theme,
        useColorModeValue('white', 'white')
    );
    const activeTextColor = themeTools.getColor(
        theme,
        useColorModeValue('darkText', 'lightText')
    );
    const doneTextColor = themeTools.getColor(
        theme,
        useColorModeValue('muted.400', 'muted.600')
    );

    return (
        <HStack
            alignItems="center" w="full" px={4} py={2}
            bg={useColorModeValue('warmGray.50', 'primary.900')}>
            <Box width={30} height={30} mr={2}>
                <Pressable onPress={onToggleCheckbox}>
                    <AnimatedCheckBox highlightColor={highlightColor}
                        checkmarkColor={checkmarkColor}
                        boxOutlineColor={boxStroke}
                        checked={isDone}></AnimatedCheckBox>
                </Pressable>
            </Box>
            <Text>Task item!{/* Parou em 34:48 */}</Text> 
        </HStack >
    )
}

export default TaskItem;