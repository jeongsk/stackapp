import React, {useState} from 'react';
import {StyleSheet, View, Button, ScrollView, StatusBar} from 'react-native';

import ChildWindow from './ChildWindow';

const buttons = {
  Reddit: 'https://www.reddit.com/',
  Medium: 'https://medium.com/',
  Notion: 'https://www.notion.so/',
  Pocket: 'https://getpocket.com',
  Google: 'https://google.com',
};

const App = () => {
  const handleOnClose = key => () => {
    setChildWindowList(prev => {
      return prev.filter((e, i) => e.key !== key);
    });
  };

  const [childWindowList, setChildWindowList] = useState([
    <ChildWindow
      key="0"
      title="Google"
      url="https://google.com"
      onClose={handleOnClose('0')}
    />,
  ]);

  const onPressButton = name => () => {
    const url = buttons[name];
    setChildWindowList(prev => {
      const key = `${name}_${new Date().getTime()}`;
      return [
        ...prev,
        <ChildWindow
          key={key}
          title={name}
          url={url}
          onClose={handleOnClose(key)}
        />,
      ];
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View>
          {Object.keys(buttons).map((btnName, i) => {
            return (
              <Button
                key={`${btnName}${i}`}
                onPress={onPressButton(btnName)}
                title={btnName}
              />
            );
          })}
          <Button onPress={e => e} title="Add" />
        </View>
        <ScrollView horizontal style={styles.scrollView}>
          {childWindowList}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollView: {
    flex: 1,
    height: '100%',
  },
});

export default App;
