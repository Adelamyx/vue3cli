// https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
// vue.config.js
// px to rem 
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem'); 
// console.log(11111, process.env)

const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');


const path = require('path')
function resolvePath(src) {
  return path.resolve(__dirname, src)
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '//xx.xxx.com/static/abc/'
    : '/',
    outputDir: 'dist', // npm run build 打包文件
    assetsDir: 'assets', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    indexPath: 'index.html', 
    productionSourceMap: process.env.NODE_ENV === 'development' ? false : true, // sourcemap
    configureWebpack: {
        resolve: {
            alias: {
                // '@':path.resolve(__dirname, 'src'),
                '@assets': resolvePath('src/assets'),
                //   '@app': resolvePath('src/app'),
                //   '@pages': resolvePath('src/app/pages'),
                '@shared': resolvePath('src/app/shared'),
                //   '@core': resolvePath('src/app/core'),
                //   '@utils': resolvePath('src/app/core/utils'),
                //   '@constant': resolvePath('src/app/core/constant'),
                //   '@styles': resolvePath('src/app/core/styles'),
                //   '@components': resolvePath('src/app/shared/components'),
                //   '@mixins': resolvePath('src/app/shared/mixins'),
                //   '@plugins': resolvePath('src/app/shared/plugins')
            }
          },
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    require("postcss-px-to-viewport")({
                        unitToConvert: "px",
                        viewportWidth: 750,
                        unitPrecision: 3,
                        propList: ["*"],
                        viewportUnit: "vw",
                        fontViewportUnit: "vw",
                        selectorBlackList: [],
                        minPixelValue: 1,
                        mediaQuery: false,
                        replace: true,
                        exclude: /(\/|\\)(node_modules)(\/|\\)/,
                    })
                    // pxtorem({
                    //     rootValue: 75,
                    //     propList: ['*'],
                    //     exclude: 'node_modules', 
                    // }),
                ]
            },
            less: {
                modifyVars: {
                }
            },
            scss: {
                prependData: `@import "~@assets/css/mixin.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.module
        .rule('ts')
        .use('ts-loader')
        .tap(options =>{
            options = merge(options, {
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [
                        tsImportPluginFactory({
                            libraryName: 'vant',
                            libraryDirectory: 'es',
                            // style: true,
                            // 这句必须加上，不然修改主题没有效果
                            style: name => `${name}/style/less`,
                        }),
                    ]
                }),
                compilerOptions: {
                    module: 'es2015'
                }
            });
            return options;
        });
    }
}