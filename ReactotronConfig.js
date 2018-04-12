import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    Reactotron
        .configure({ host: "192.168.0.18" })
        .useReactNative()
        .connect();

    const normalConsoleLog = console.log;

    console.log = (...args) => {
        normalConsoleLog(...args);

        Reactotron.display({
            name: 'CONSOLE.LOG',
            value: args,
            preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null
        });
    };

    Reactotron.clear();
}
