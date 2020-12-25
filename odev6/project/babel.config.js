const { join } = require('path');

const src = uri => join(__dirname, 'src', uri);

module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                alias: {
                    "@components": src('components'),
                    "@pages": src('pages'),
                    "@app": src('app'),
                    "@redux": src('redux')
                }
            }
        ],
        [
            "module:react-native-dotenv",
            {
                moduleName: "@env",
                path: ".env"
            }
        ]
    ]
};
