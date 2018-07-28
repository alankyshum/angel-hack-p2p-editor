import Y from 'yjs'
import yArray from 'y-array'
import yWebsocketsClient from 'y-webrtc'
import yMemory from 'y-memory'
import yMap from 'y-map'
import yText from 'y-text'
// ..
Y.extend(yArray, yWebsocketsClient, yMemory, yArray, yMap, yText /*, .. */)
