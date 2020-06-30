import React, {memo} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {WebView} from 'react-native-webview';

const USER_AGENT =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

const ChildWindow = ({title, url, onClose}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.closeButton}>
          <Button title="✕" onPress={onClose} />
        </View>
      </View>
      <WebView source={{uri: url}} userAgent={USER_AGENT} />
      {/* <View style={styles.footer}>
        <Text>Footer</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    minWidth: 500,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
    shadowRadius: 10,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  title: {},
  closeButton: {
    position: 'absolute',
    right: 5,
  },
  footer: {},
});

export default memo(ChildWindow);
