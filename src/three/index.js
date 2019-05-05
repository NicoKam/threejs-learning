/* eslint-disable camelcase,import/named */
import {
  WebGLMultisampleRenderTarget,
  WebGLRenderTargetCube,
  WebGLRenderTarget,
  WebGLRenderer,
  ShaderLib,
  UniformsLib,
  UniformsUtils,
  ShaderChunk,
  FogExp2,
  Fog,
  Scene,
  Sprite,
  LOD,
  SkinnedMesh,
  Skeleton,
  Bone,
  Mesh,
  LineSegments,
  LineLoop,
  Line,
  Points,
  Group,
  VideoTexture,
  DataTexture,
  DataTexture2DArray,
  DataTexture3D,
  CompressedTexture,
  CubeTexture,
  CanvasTexture,
  DepthTexture,
  Texture,
  AnimationLoader,
  CompressedTextureLoader,
  DataTextureLoader,
  CubeTextureLoader,
  TextureLoader,
  ObjectLoader,
  MaterialLoader,
  BufferGeometryLoader,
  DefaultLoadingManager,
  LoadingManager,
  ImageLoader,
  ImageBitmapLoader,
  FontLoader,
  FileLoader,
  Loader,
  LoaderUtils,
  Cache,
  AudioLoader,
  SpotLightShadow,
  SpotLight,
  PointLight,
  RectAreaLight,
  HemisphereLight,
  HemisphereLightProbe,
  DirectionalLightShadow,
  DirectionalLight,
  AmbientLight,
  AmbientLightProbe,
  LightShadow,
  Light,
  LightProbe,
  StereoCamera,
  PerspectiveCamera,
  OrthographicCamera,
  CubeCamera,
  ArrayCamera,
  Camera,
  AudioListener,
  PositionalAudio,
  AudioContext,
  AudioAnalyser,
  Audio,
  VectorKeyframeTrack,
  StringKeyframeTrack,
  QuaternionKeyframeTrack,
  NumberKeyframeTrack,
  ColorKeyframeTrack,
  BooleanKeyframeTrack,
  PropertyMixer,
  PropertyBinding,
  KeyframeTrack,
  AnimationUtils,
  AnimationObjectGroup,
  AnimationMixer,
  AnimationClip,
  Uniform,
  InstancedBufferGeometry,
  BufferGeometry,
  Geometry,
  InterleavedBufferAttribute,
  InstancedInterleavedBuffer,
  InterleavedBuffer,
  InstancedBufferAttribute,
  Face3,
  Object3D,
  Raycaster,
  Layers,
  EventDispatcher,
  Clock,
  QuaternionLinearInterpolant,
  LinearInterpolant,
  DiscreteInterpolant,
  CubicInterpolant,
  Interpolant,
  Triangle,
  Math,
  Spherical,
  Cylindrical,
  Plane,
  Frustum,
  Sphere,
  Ray,
  Matrix4,
  Matrix3,
  Box3,
  Box2,
  Line3,
  Euler,
  Vector4,
  Vector3,
  Vector2,
  Quaternion,
  Color,
  SphericalHarmonics3,
  ImmediateRenderObject,
  VertexNormalsHelper,
  SpotLightHelper,
  SkeletonHelper,
  PointLightHelper,
  RectAreaLightHelper,
  HemisphereLightHelper,
  LightProbeHelper,
  GridHelper,
  PolarGridHelper,
  PositionalAudioHelper,
  FaceNormalsHelper,
  DirectionalLightHelper,
  CameraHelper,
  BoxHelper,
  Box3Helper,
  PlaneHelper,
  ArrowHelper,
  AxesHelper,
  Shape,
  Path,
  ShapePath,
  Font,
  CurvePath,
  Curve,
  ImageUtils,
  ShapeUtils,
  WebGLUtils,
  WireframeGeometry,
  ParametricGeometry,
  ParametricBufferGeometry,
  TetrahedronGeometry,
  TetrahedronBufferGeometry,
  OctahedronGeometry,
  OctahedronBufferGeometry,
  IcosahedronGeometry,
  IcosahedronBufferGeometry,
  DodecahedronGeometry,
  DodecahedronBufferGeometry,
  PolyhedronGeometry,
  PolyhedronBufferGeometry,
  TubeGeometry,
  TubeBufferGeometry,
  TorusKnotGeometry,
  TorusKnotBufferGeometry,
  TorusGeometry,
  TorusBufferGeometry,
  TextGeometry,
  TextBufferGeometry,
  SphereGeometry,
  SphereBufferGeometry,
  RingGeometry,
  RingBufferGeometry,
  PlaneGeometry,
  PlaneBufferGeometry,
  LatheGeometry,
  LatheBufferGeometry,
  ShapeGeometry,
  ShapeBufferGeometry,
  ExtrudeGeometry,
  ExtrudeBufferGeometry,
  EdgesGeometry,
  ConeGeometry,
  ConeBufferGeometry,
  CylinderGeometry,
  CylinderBufferGeometry,
  CircleGeometry,
  CircleBufferGeometry,
  BoxGeometry,
  CubeGeometry,
  BoxBufferGeometry,
  ShadowMaterial,
  SpriteMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  PointsMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  MeshNormalMaterial,
  MeshLambertMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  LineDashedMaterial,
  LineBasicMaterial,
  Material,
  Float64BufferAttribute,
  Float32BufferAttribute,
  Uint32BufferAttribute,
  Int32BufferAttribute,
  Uint16BufferAttribute,
  Int16BufferAttribute,
  Uint8ClampedBufferAttribute,
  Uint8BufferAttribute,
  Int8BufferAttribute,
  BufferAttribute,
  ArcCurve,
  CatmullRomCurve3,
  CubicBezierCurve,
  CubicBezierCurve3,
  EllipseCurve,
  LineCurve,
  LineCurve3,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  SplineCurve,
  REVISION,
  MOUSE,
  CullFaceNone,
  CullFaceBack,
  CullFaceFront,
  CullFaceFrontBack,
  FrontFaceDirectionCW,
  FrontFaceDirectionCCW,
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
  FrontSide,
  BackSide,
  DoubleSide,
  FlatShading,
  SmoothShading,
  NoColors,
  FaceColors,
  VertexColors,
  NoBlending,
  NormalBlending,
  AdditiveBlending,
  SubtractiveBlending,
  MultiplyBlending,
  CustomBlending,
  AddEquation,
  SubtractEquation,
  ReverseSubtractEquation,
  MinEquation,
  MaxEquation,
  ZeroFactor,
  OneFactor,
  SrcColorFactor,
  OneMinusSrcColorFactor,
  SrcAlphaFactor,
  OneMinusSrcAlphaFactor,
  DstAlphaFactor,
  OneMinusDstAlphaFactor,
  DstColorFactor,
  OneMinusDstColorFactor,
  SrcAlphaSaturateFactor,
  NeverDepth,
  AlwaysDepth,
  LessDepth,
  LessEqualDepth,
  EqualDepth,
  GreaterEqualDepth,
  GreaterDepth,
  NotEqualDepth,
  MultiplyOperation,
  MixOperation,
  AddOperation,
  NoToneMapping,
  LinearToneMapping,
  ReinhardToneMapping,
  Uncharted2ToneMapping,
  CineonToneMapping,
  ACESFilmicToneMapping,
  UVMapping,
  CubeReflectionMapping,
  CubeRefractionMapping,
  EquirectangularReflectionMapping,
  EquirectangularRefractionMapping,
  SphericalReflectionMapping,
  CubeUVReflectionMapping,
  CubeUVRefractionMapping,
  RepeatWrapping,
  ClampToEdgeWrapping,
  MirroredRepeatWrapping,
  NearestFilter,
  NearestMipMapNearestFilter,
  NearestMipMapLinearFilter,
  LinearFilter,
  LinearMipMapNearestFilter,
  LinearMipMapLinearFilter,
  UnsignedByteType,
  ByteType,
  ShortType,
  UnsignedShortType,
  IntType,
  UnsignedIntType,
  FloatType,
  HalfFloatType,
  UnsignedShort4444Type,
  UnsignedShort5551Type,
  UnsignedShort565Type,
  UnsignedInt248Type,
  AlphaFormat,
  RGBFormat,
  RGBAFormat,
  LuminanceFormat,
  LuminanceAlphaFormat,
  RGBEFormat,
  DepthFormat,
  DepthStencilFormat,
  RedFormat,
  RGB_S3TC_DXT1_Format,
  RGBA_S3TC_DXT1_Format,
  RGBA_S3TC_DXT3_Format,
  RGBA_S3TC_DXT5_Format,
  RGB_PVRTC_4BPPV1_Format,
  RGB_PVRTC_2BPPV1_Format,
  RGBA_PVRTC_4BPPV1_Format,
  RGBA_PVRTC_2BPPV1_Format,
  RGB_ETC1_Format,
  RGBA_ASTC_4x4_Format,
  RGBA_ASTC_5x4_Format,
  RGBA_ASTC_5x5_Format,
  RGBA_ASTC_6x5_Format,
  RGBA_ASTC_6x6_Format,
  RGBA_ASTC_8x5_Format,
  RGBA_ASTC_8x6_Format,
  RGBA_ASTC_8x8_Format,
  RGBA_ASTC_10x5_Format,
  RGBA_ASTC_10x6_Format,
  RGBA_ASTC_10x8_Format,
  RGBA_ASTC_10x10_Format,
  RGBA_ASTC_12x10_Format,
  RGBA_ASTC_12x12_Format,
  LoopOnce,
  LoopRepeat,
  LoopPingPong,
  InterpolateDiscrete,
  InterpolateLinear,
  InterpolateSmooth,
  ZeroCurvatureEnding,
  ZeroSlopeEnding,
  WrapAroundEnding,
  TrianglesDrawMode,
  TriangleStripDrawMode,
  TriangleFanDrawMode,
  LinearEncoding,
  sRGBEncoding,
  GammaEncoding,
  RGBEEncoding,
  LogLuvEncoding,
  RGBM7Encoding,
  RGBM16Encoding,
  RGBDEncoding,
  BasicDepthPacking,
  RGBADepthPacking,
  TangentSpaceNormalMap,
  ObjectSpaceNormalMap,
  Face4,
  LineStrip,
  LinePieces,
  MeshFaceMaterial,
  MultiMaterial,
  PointCloud,
  Particle,
  ParticleSystem,
  PointCloudMaterial,
  ParticleBasicMaterial,
  ParticleSystemMaterial,
  Vertex,
  DynamicBufferAttribute,
  Int8Attribute,
  Uint8Attribute,
  Uint8ClampedAttribute,
  Int16Attribute,
  Uint16Attribute,
  Int32Attribute,
  Uint32Attribute,
  Float32Attribute,
  Float64Attribute,
  ClosedSplineCurve3,
  SplineCurve3,
  Spline,
  AxisHelper,
  BoundingBoxHelper,
  EdgesHelper,
  WireframeHelper,
  XHRLoader,
  BinaryTextureLoader,
  GeometryUtils,
  Projector,
  CanvasRenderer,
  JSONLoader,
  SceneUtils,
  LensFlare,
} from "./three.module";

export default {
  WebGLMultisampleRenderTarget,
  WebGLRenderTargetCube,
  WebGLRenderTarget,
  WebGLRenderer,
  ShaderLib,
  UniformsLib,
  UniformsUtils,
  ShaderChunk,
  FogExp2,
  Fog,
  Scene,
  Sprite,
  LOD,
  SkinnedMesh,
  Skeleton,
  Bone,
  Mesh,
  LineSegments,
  LineLoop,
  Line,
  Points,
  Group,
  VideoTexture,
  DataTexture,
  DataTexture2DArray,
  DataTexture3D,
  CompressedTexture,
  CubeTexture,
  CanvasTexture,
  DepthTexture,
  Texture,
  AnimationLoader,
  CompressedTextureLoader,
  DataTextureLoader,
  CubeTextureLoader,
  TextureLoader,
  ObjectLoader,
  MaterialLoader,
  BufferGeometryLoader,
  DefaultLoadingManager,
  LoadingManager,
  ImageLoader,
  ImageBitmapLoader,
  FontLoader,
  FileLoader,
  Loader,
  LoaderUtils,
  Cache,
  AudioLoader,
  SpotLightShadow,
  SpotLight,
  PointLight,
  RectAreaLight,
  HemisphereLight,
  HemisphereLightProbe,
  DirectionalLightShadow,
  DirectionalLight,
  AmbientLight,
  AmbientLightProbe,
  LightShadow,
  Light,
  LightProbe,
  StereoCamera,
  PerspectiveCamera,
  OrthographicCamera,
  CubeCamera,
  ArrayCamera,
  Camera,
  AudioListener,
  PositionalAudio,
  AudioContext,
  AudioAnalyser,
  Audio,
  VectorKeyframeTrack,
  StringKeyframeTrack,
  QuaternionKeyframeTrack,
  NumberKeyframeTrack,
  ColorKeyframeTrack,
  BooleanKeyframeTrack,
  PropertyMixer,
  PropertyBinding,
  KeyframeTrack,
  AnimationUtils,
  AnimationObjectGroup,
  AnimationMixer,
  AnimationClip,
  Uniform,
  InstancedBufferGeometry,
  BufferGeometry,
  Geometry,
  InterleavedBufferAttribute,
  InstancedInterleavedBuffer,
  InterleavedBuffer,
  InstancedBufferAttribute,
  Face3,
  Object3D,
  Raycaster,
  Layers,
  EventDispatcher,
  Clock,
  QuaternionLinearInterpolant,
  LinearInterpolant,
  DiscreteInterpolant,
  CubicInterpolant,
  Interpolant,
  Triangle,
  Math,
  Spherical,
  Cylindrical,
  Plane,
  Frustum,
  Sphere,
  Ray,
  Matrix4,
  Matrix3,
  Box3,
  Box2,
  Line3,
  Euler,
  Vector4,
  Vector3,
  Vector2,
  Quaternion,
  Color,
  SphericalHarmonics3,
  ImmediateRenderObject,
  VertexNormalsHelper,
  SpotLightHelper,
  SkeletonHelper,
  PointLightHelper,
  RectAreaLightHelper,
  HemisphereLightHelper,
  LightProbeHelper,
  GridHelper,
  PolarGridHelper,
  PositionalAudioHelper,
  FaceNormalsHelper,
  DirectionalLightHelper,
  CameraHelper,
  BoxHelper,
  Box3Helper,
  PlaneHelper,
  ArrowHelper,
  AxesHelper,
  Shape,
  Path,
  ShapePath,
  Font,
  CurvePath,
  Curve,
  ImageUtils,
  ShapeUtils,
  WebGLUtils,
  WireframeGeometry,
  ParametricGeometry,
  ParametricBufferGeometry,
  TetrahedronGeometry,
  TetrahedronBufferGeometry,
  OctahedronGeometry,
  OctahedronBufferGeometry,
  IcosahedronGeometry,
  IcosahedronBufferGeometry,
  DodecahedronGeometry,
  DodecahedronBufferGeometry,
  PolyhedronGeometry,
  PolyhedronBufferGeometry,
  TubeGeometry,
  TubeBufferGeometry,
  TorusKnotGeometry,
  TorusKnotBufferGeometry,
  TorusGeometry,
  TorusBufferGeometry,
  TextGeometry,
  TextBufferGeometry,
  SphereGeometry,
  SphereBufferGeometry,
  RingGeometry,
  RingBufferGeometry,
  PlaneGeometry,
  PlaneBufferGeometry,
  LatheGeometry,
  LatheBufferGeometry,
  ShapeGeometry,
  ShapeBufferGeometry,
  ExtrudeGeometry,
  ExtrudeBufferGeometry,
  EdgesGeometry,
  ConeGeometry,
  ConeBufferGeometry,
  CylinderGeometry,
  CylinderBufferGeometry,
  CircleGeometry,
  CircleBufferGeometry,
  BoxGeometry,
  CubeGeometry,
  BoxBufferGeometry,
  ShadowMaterial,
  SpriteMaterial,
  RawShaderMaterial,
  ShaderMaterial,
  PointsMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  MeshNormalMaterial,
  MeshLambertMaterial,
  MeshDepthMaterial,
  MeshDistanceMaterial,
  MeshBasicMaterial,
  MeshMatcapMaterial,
  LineDashedMaterial,
  LineBasicMaterial,
  Material,
  Float64BufferAttribute,
  Float32BufferAttribute,
  Uint32BufferAttribute,
  Int32BufferAttribute,
  Uint16BufferAttribute,
  Int16BufferAttribute,
  Uint8ClampedBufferAttribute,
  Uint8BufferAttribute,
  Int8BufferAttribute,
  BufferAttribute,
  ArcCurve,
  CatmullRomCurve3,
  CubicBezierCurve,
  CubicBezierCurve3,
  EllipseCurve,
  LineCurve,
  LineCurve3,
  QuadraticBezierCurve,
  QuadraticBezierCurve3,
  SplineCurve,
  REVISION,
  MOUSE,
  CullFaceNone,
  CullFaceBack,
  CullFaceFront,
  CullFaceFrontBack,
  FrontFaceDirectionCW,
  FrontFaceDirectionCCW,
  BasicShadowMap,
  PCFShadowMap,
  PCFSoftShadowMap,
  FrontSide,
  BackSide,
  DoubleSide,
  FlatShading,
  SmoothShading,
  NoColors,
  FaceColors,
  VertexColors,
  NoBlending,
  NormalBlending,
  AdditiveBlending,
  SubtractiveBlending,
  MultiplyBlending,
  CustomBlending,
  AddEquation,
  SubtractEquation,
  ReverseSubtractEquation,
  MinEquation,
  MaxEquation,
  ZeroFactor,
  OneFactor,
  SrcColorFactor,
  OneMinusSrcColorFactor,
  SrcAlphaFactor,
  OneMinusSrcAlphaFactor,
  DstAlphaFactor,
  OneMinusDstAlphaFactor,
  DstColorFactor,
  OneMinusDstColorFactor,
  SrcAlphaSaturateFactor,
  NeverDepth,
  AlwaysDepth,
  LessDepth,
  LessEqualDepth,
  EqualDepth,
  GreaterEqualDepth,
  GreaterDepth,
  NotEqualDepth,
  MultiplyOperation,
  MixOperation,
  AddOperation,
  NoToneMapping,
  LinearToneMapping,
  ReinhardToneMapping,
  Uncharted2ToneMapping,
  CineonToneMapping,
  ACESFilmicToneMapping,
  UVMapping,
  CubeReflectionMapping,
  CubeRefractionMapping,
  EquirectangularReflectionMapping,
  EquirectangularRefractionMapping,
  SphericalReflectionMapping,
  CubeUVReflectionMapping,
  CubeUVRefractionMapping,
  RepeatWrapping,
  ClampToEdgeWrapping,
  MirroredRepeatWrapping,
  NearestFilter,
  NearestMipMapNearestFilter,
  NearestMipMapLinearFilter,
  LinearFilter,
  LinearMipMapNearestFilter,
  LinearMipMapLinearFilter,
  UnsignedByteType,
  ByteType,
  ShortType,
  UnsignedShortType,
  IntType,
  UnsignedIntType,
  FloatType,
  HalfFloatType,
  UnsignedShort4444Type,
  UnsignedShort5551Type,
  UnsignedShort565Type,
  UnsignedInt248Type,
  AlphaFormat,
  RGBFormat,
  RGBAFormat,
  LuminanceFormat,
  LuminanceAlphaFormat,
  RGBEFormat,
  DepthFormat,
  DepthStencilFormat,
  RedFormat,
  RGB_S3TC_DXT1_Format,
  RGBA_S3TC_DXT1_Format,
  RGBA_S3TC_DXT3_Format,
  RGBA_S3TC_DXT5_Format,
  RGB_PVRTC_4BPPV1_Format,
  RGB_PVRTC_2BPPV1_Format,
  RGBA_PVRTC_4BPPV1_Format,
  RGBA_PVRTC_2BPPV1_Format,
  RGB_ETC1_Format,
  RGBA_ASTC_4x4_Format,
  RGBA_ASTC_5x4_Format,
  RGBA_ASTC_5x5_Format,
  RGBA_ASTC_6x5_Format,
  RGBA_ASTC_6x6_Format,
  RGBA_ASTC_8x5_Format,
  RGBA_ASTC_8x6_Format,
  RGBA_ASTC_8x8_Format,
  RGBA_ASTC_10x5_Format,
  RGBA_ASTC_10x6_Format,
  RGBA_ASTC_10x8_Format,
  RGBA_ASTC_10x10_Format,
  RGBA_ASTC_12x10_Format,
  RGBA_ASTC_12x12_Format,
  LoopOnce,
  LoopRepeat,
  LoopPingPong,
  InterpolateDiscrete,
  InterpolateLinear,
  InterpolateSmooth,
  ZeroCurvatureEnding,
  ZeroSlopeEnding,
  WrapAroundEnding,
  TrianglesDrawMode,
  TriangleStripDrawMode,
  TriangleFanDrawMode,
  LinearEncoding,
  sRGBEncoding,
  GammaEncoding,
  RGBEEncoding,
  LogLuvEncoding,
  RGBM7Encoding,
  RGBM16Encoding,
  RGBDEncoding,
  BasicDepthPacking,
  RGBADepthPacking,
  TangentSpaceNormalMap,
  ObjectSpaceNormalMap,
  Face4,
  LineStrip,
  LinePieces,
  MeshFaceMaterial,
  MultiMaterial,
  PointCloud,
  Particle,
  ParticleSystem,
  PointCloudMaterial,
  ParticleBasicMaterial,
  ParticleSystemMaterial,
  Vertex,
  DynamicBufferAttribute,
  Int8Attribute,
  Uint8Attribute,
  Uint8ClampedAttribute,
  Int16Attribute,
  Uint16Attribute,
  Int32Attribute,
  Uint32Attribute,
  Float32Attribute,
  Float64Attribute,
  ClosedSplineCurve3,
  SplineCurve3,
  Spline,
  AxisHelper,
  BoundingBoxHelper,
  EdgesHelper,
  WireframeHelper,
  XHRLoader,
  BinaryTextureLoader,
  GeometryUtils,
  Projector,
  CanvasRenderer,
  JSONLoader,
  SceneUtils,
  LensFlare,
};