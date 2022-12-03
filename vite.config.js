import Icons from 'unplugin-icons/vite'

export default {
  build: {
    sourcemap: true,
    minify: false,
    outDir: "lib",
    lib: {
      entry: "src/index",
      formats: ["es"],
      fileName: "index"
    }
  },
  plugins: [
    Icons({ /* options */ }),
  ],
}
