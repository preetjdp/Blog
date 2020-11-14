/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  JSON: never;
  Github_URI: any;
  Github_DateTime: any;
  Github_HTML: any;
  Github_GitObjectID: any;
  Github_GitTimestamp: any;
  Github_GitSSHRemote: any;
  Github_Date: any;
  Github_PreciseDateTime: any;
  Github_X509Certificate: any;
};











type BlurhashSharp = {
  readonly base64Image: Maybe<Scalars['String']>;
};

type BlurhashSharpFilterInput = {
  readonly base64Image: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};


type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly childMarkdownRemark: Maybe<MarkdownRemark>;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childImageSharp___fixed___base64 = 'childImageSharp.fixed.base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp.fixed.tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp.fixed.aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp.fixed.width',
  childImageSharp___fixed___height = 'childImageSharp.fixed.height',
  childImageSharp___fixed___src = 'childImageSharp.fixed.src',
  childImageSharp___fixed___srcSet = 'childImageSharp.fixed.srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp.fixed.srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp.fixed.srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp.fixed.originalName',
  childImageSharp___resolutions___base64 = 'childImageSharp.resolutions.base64',
  childImageSharp___resolutions___tracedSVG = 'childImageSharp.resolutions.tracedSVG',
  childImageSharp___resolutions___aspectRatio = 'childImageSharp.resolutions.aspectRatio',
  childImageSharp___resolutions___width = 'childImageSharp.resolutions.width',
  childImageSharp___resolutions___height = 'childImageSharp.resolutions.height',
  childImageSharp___resolutions___src = 'childImageSharp.resolutions.src',
  childImageSharp___resolutions___srcSet = 'childImageSharp.resolutions.srcSet',
  childImageSharp___resolutions___srcWebp = 'childImageSharp.resolutions.srcWebp',
  childImageSharp___resolutions___srcSetWebp = 'childImageSharp.resolutions.srcSetWebp',
  childImageSharp___resolutions___originalName = 'childImageSharp.resolutions.originalName',
  childImageSharp___fluid___base64 = 'childImageSharp.fluid.base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp.fluid.tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp.fluid.aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp.fluid.src',
  childImageSharp___fluid___srcSet = 'childImageSharp.fluid.srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp.fluid.srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp.fluid.srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp.fluid.sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp.fluid.originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp.fluid.originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp.fluid.presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp.fluid.presentationHeight',
  childImageSharp___sizes___base64 = 'childImageSharp.sizes.base64',
  childImageSharp___sizes___tracedSVG = 'childImageSharp.sizes.tracedSVG',
  childImageSharp___sizes___aspectRatio = 'childImageSharp.sizes.aspectRatio',
  childImageSharp___sizes___src = 'childImageSharp.sizes.src',
  childImageSharp___sizes___srcSet = 'childImageSharp.sizes.srcSet',
  childImageSharp___sizes___srcWebp = 'childImageSharp.sizes.srcWebp',
  childImageSharp___sizes___srcSetWebp = 'childImageSharp.sizes.srcSetWebp',
  childImageSharp___sizes___sizes = 'childImageSharp.sizes.sizes',
  childImageSharp___sizes___originalImg = 'childImageSharp.sizes.originalImg',
  childImageSharp___sizes___originalName = 'childImageSharp.sizes.originalName',
  childImageSharp___sizes___presentationWidth = 'childImageSharp.sizes.presentationWidth',
  childImageSharp___sizes___presentationHeight = 'childImageSharp.sizes.presentationHeight',
  childImageSharp___original___width = 'childImageSharp.original.width',
  childImageSharp___original___height = 'childImageSharp.original.height',
  childImageSharp___original___src = 'childImageSharp.original.src',
  childImageSharp___resize___src = 'childImageSharp.resize.src',
  childImageSharp___resize___tracedSVG = 'childImageSharp.resize.tracedSVG',
  childImageSharp___resize___width = 'childImageSharp.resize.width',
  childImageSharp___resize___height = 'childImageSharp.resize.height',
  childImageSharp___resize___aspectRatio = 'childImageSharp.resize.aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp.resize.originalName',
  childImageSharp___blurHash___base64Image = 'childImageSharp.blurHash.base64Image',
  childImageSharp___id = 'childImageSharp.id',
  childImageSharp___parent___id = 'childImageSharp.parent.id',
  childImageSharp___parent___parent___id = 'childImageSharp.parent.parent.id',
  childImageSharp___parent___parent___children = 'childImageSharp.parent.parent.children',
  childImageSharp___parent___children = 'childImageSharp.parent.children',
  childImageSharp___parent___children___id = 'childImageSharp.parent.children.id',
  childImageSharp___parent___children___children = 'childImageSharp.parent.children.children',
  childImageSharp___parent___internal___content = 'childImageSharp.parent.internal.content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp.parent.internal.contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp.parent.internal.description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp.parent.internal.fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp.parent.internal.ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp.parent.internal.mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp.parent.internal.owner',
  childImageSharp___parent___internal___type = 'childImageSharp.parent.internal.type',
  childImageSharp___children = 'childImageSharp.children',
  childImageSharp___children___id = 'childImageSharp.children.id',
  childImageSharp___children___parent___id = 'childImageSharp.children.parent.id',
  childImageSharp___children___parent___children = 'childImageSharp.children.parent.children',
  childImageSharp___children___children = 'childImageSharp.children.children',
  childImageSharp___children___children___id = 'childImageSharp.children.children.id',
  childImageSharp___children___children___children = 'childImageSharp.children.children.children',
  childImageSharp___children___internal___content = 'childImageSharp.children.internal.content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp.children.internal.contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp.children.internal.description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp.children.internal.fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp.children.internal.ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp.children.internal.mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp.children.internal.owner',
  childImageSharp___children___internal___type = 'childImageSharp.children.internal.type',
  childImageSharp___internal___content = 'childImageSharp.internal.content',
  childImageSharp___internal___contentDigest = 'childImageSharp.internal.contentDigest',
  childImageSharp___internal___description = 'childImageSharp.internal.description',
  childImageSharp___internal___fieldOwners = 'childImageSharp.internal.fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp.internal.ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp.internal.mediaType',
  childImageSharp___internal___owner = 'childImageSharp.internal.owner',
  childImageSharp___internal___type = 'childImageSharp.internal.type',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  childMarkdownRemark___id = 'childMarkdownRemark.id',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark.frontmatter.title',
  childMarkdownRemark___frontmatter___date = 'childMarkdownRemark.frontmatter.date',
  childMarkdownRemark___frontmatter___description = 'childMarkdownRemark.frontmatter.description',
  childMarkdownRemark___excerpt = 'childMarkdownRemark.excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark.rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark.fileAbsolutePath',
  childMarkdownRemark___fields___slug = 'childMarkdownRemark.fields.slug',
  childMarkdownRemark___html = 'childMarkdownRemark.html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark.htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark.excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark.headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark.headings.id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark.headings.value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark.headings.depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark.timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark.tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark.wordCount.paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark.wordCount.sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark.wordCount.words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark.parent.id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark.parent.parent.id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark.parent.parent.children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark.parent.children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark.parent.children.id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark.parent.children.children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark.parent.internal.content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark.parent.internal.contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark.parent.internal.description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark.parent.internal.fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark.parent.internal.ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark.parent.internal.mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark.parent.internal.owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark.parent.internal.type',
  childMarkdownRemark___children = 'childMarkdownRemark.children',
  childMarkdownRemark___children___id = 'childMarkdownRemark.children.id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark.children.parent.id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark.children.parent.children',
  childMarkdownRemark___children___children = 'childMarkdownRemark.children.children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark.children.children.id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark.children.children.children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark.children.internal.content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark.children.internal.contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark.children.internal.description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark.children.internal.fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark.children.internal.ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark.children.internal.mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark.children.internal.owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark.children.internal.type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark.internal.content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark.internal.contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark.internal.description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark.internal.fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark.internal.ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark.internal.mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark.internal.owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark.internal.type'
}

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type Github = {
  readonly codeOfConduct: Maybe<Github_CodeOfConduct>;
  readonly codesOfConduct: Maybe<ReadonlyArray<Maybe<Github_CodeOfConduct>>>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly enterpriseAdministratorInvitation: Maybe<Github_EnterpriseAdministratorInvitation>;
  readonly enterpriseAdministratorInvitationByToken: Maybe<Github_EnterpriseAdministratorInvitation>;
  readonly license: Maybe<Github_License>;
  readonly licenses: ReadonlyArray<Maybe<Github_License>>;
  readonly marketplaceCategories: ReadonlyArray<Github_MarketplaceCategory>;
  readonly marketplaceCategory: Maybe<Github_MarketplaceCategory>;
  readonly marketplaceListing: Maybe<Github_MarketplaceListing>;
  readonly marketplaceListings: Github_MarketplaceListingConnection;
  readonly meta: Github_GitHubMetadata;
  readonly node: Maybe<Github_Node>;
  readonly nodes: ReadonlyArray<Maybe<Github_Node>>;
  readonly organization: Maybe<Github_Organization>;
  readonly rateLimit: Maybe<Github_RateLimit>;
  readonly relay: Query;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryOwner: Maybe<Github_RepositoryOwner>;
  readonly resource: Maybe<Github_UniformResourceLocatable>;
  readonly search: Github_SearchResultItemConnection;
  readonly securityAdvisories: Github_SecurityAdvisoryConnection;
  readonly securityAdvisory: Maybe<Github_SecurityAdvisory>;
  readonly securityVulnerabilities: Github_SecurityVulnerabilityConnection;
  /** @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC. */
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  readonly topic: Maybe<Github_Topic>;
  readonly user: Maybe<Github_User>;
  readonly viewer: Github_User;
};


type Github_codeOfConductArgs = {
  key: Scalars['String'];
};


type Github_enterpriseArgs = {
  slug: Scalars['String'];
  invitationToken: Maybe<Scalars['String']>;
};


type Github_enterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'];
  enterpriseSlug: Scalars['String'];
  role: Github_EnterpriseAdministratorRole;
};


type Github_enterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String'];
};


type Github_licenseArgs = {
  key: Scalars['String'];
};


type Github_marketplaceCategoriesArgs = {
  includeCategories: Maybe<ReadonlyArray<Scalars['String']>>;
  excludeEmpty: Maybe<Scalars['Boolean']>;
  excludeSubcategories: Maybe<Scalars['Boolean']>;
};


type Github_marketplaceCategoryArgs = {
  slug: Scalars['String'];
  useTopicAliases: Maybe<Scalars['Boolean']>;
};


type Github_marketplaceListingArgs = {
  slug: Scalars['String'];
};


type Github_marketplaceListingsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  categorySlug: Maybe<Scalars['String']>;
  useTopicAliases: Maybe<Scalars['Boolean']>;
  viewerCanAdmin: Maybe<Scalars['Boolean']>;
  adminId: Maybe<Scalars['ID']>;
  organizationId: Maybe<Scalars['ID']>;
  allStates: Maybe<Scalars['Boolean']>;
  slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  primaryCategoryOnly?: Maybe<Scalars['Boolean']>;
  withFreeTrialsOnly?: Maybe<Scalars['Boolean']>;
};


type Github_nodeArgs = {
  id: Scalars['ID'];
};


type Github_nodesArgs = {
  ids: ReadonlyArray<Scalars['ID']>;
};


type Github_organizationArgs = {
  login: Scalars['String'];
};


type Github_rateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>;
};


type Github_repositoryArgs = {
  owner: Scalars['String'];
  name: Scalars['String'];
};


type Github_repositoryOwnerArgs = {
  login: Scalars['String'];
};


type Github_resourceArgs = {
  url: Scalars['Github_URI'];
};


type Github_searchArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: Github_SearchType;
};


type Github_securityAdvisoriesArgs = {
  orderBy?: Maybe<Github_SecurityAdvisoryOrder>;
  identifier: Maybe<Github_SecurityAdvisoryIdentifierFilter>;
  publishedSince: Maybe<Scalars['Github_DateTime']>;
  updatedSince: Maybe<Scalars['Github_DateTime']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_securityAdvisoryArgs = {
  ghsaId: Scalars['String'];
};


type Github_securityVulnerabilitiesArgs = {
  orderBy?: Maybe<Github_SecurityVulnerabilityOrder>;
  ecosystem: Maybe<Github_SecurityAdvisoryEcosystem>;
  package: Maybe<Scalars['String']>;
  severities: Maybe<ReadonlyArray<Github_SecurityAdvisorySeverity>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_sponsorsListingArgs = {
  slug: Scalars['String'];
};


type Github_topicArgs = {
  name: Scalars['String'];
};


type Github_userArgs = {
  login: Scalars['String'];
};

type Github_AcceptEnterpriseAdministratorInvitationInput = {
  readonly invitationId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AcceptEnterpriseAdministratorInvitationPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly invitation: Maybe<Github_EnterpriseAdministratorInvitation>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_AcceptTopicSuggestionInput = {
  readonly repositoryId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AcceptTopicSuggestionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly topic: Maybe<Github_Topic>;
};

enum Github_ActionExecutionCapabilitySetting {
  DISABLED = 'DISABLED',
  ALL_ACTIONS = 'ALL_ACTIONS',
  LOCAL_ACTIONS_ONLY = 'LOCAL_ACTIONS_ONLY',
  NO_POLICY = 'NO_POLICY'
}

type Github_Actor = {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly login: Scalars['String'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};


type Github_Actor_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

type Github_ActorLocation = {
  readonly city: Maybe<Scalars['String']>;
  readonly country: Maybe<Scalars['String']>;
  readonly countryCode: Maybe<Scalars['String']>;
  readonly region: Maybe<Scalars['String']>;
  readonly regionCode: Maybe<Scalars['String']>;
};

type Github_AddAssigneesToAssignableInput = {
  readonly assignableId: Scalars['ID'];
  readonly assigneeIds: ReadonlyArray<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddAssigneesToAssignablePayload = {
  readonly assignable: Maybe<Github_Assignable>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddCommentInput = {
  readonly subjectId: Scalars['ID'];
  readonly body: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly commentEdge: Maybe<Github_IssueCommentEdge>;
  readonly subject: Maybe<Github_Node>;
  readonly timelineEdge: Maybe<Github_IssueTimelineItemEdge>;
};

type Github_AddedToProjectEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

type Github_AddLabelsToLabelableInput = {
  readonly labelableId: Scalars['ID'];
  readonly labelIds: ReadonlyArray<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddLabelsToLabelablePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly labelable: Maybe<Github_Labelable>;
};

type Github_AddProjectCardInput = {
  readonly projectColumnId: Scalars['ID'];
  readonly contentId: Maybe<Scalars['ID']>;
  readonly note: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddProjectCardPayload = {
  readonly cardEdge: Maybe<Github_ProjectCardEdge>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly projectColumn: Maybe<Github_ProjectColumn>;
};

type Github_AddProjectColumnInput = {
  readonly projectId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddProjectColumnPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly columnEdge: Maybe<Github_ProjectColumnEdge>;
  readonly project: Maybe<Github_Project>;
};

type Github_AddPullRequestReviewCommentInput = {
  readonly pullRequestId: Maybe<Scalars['ID']>;
  readonly pullRequestReviewId: Maybe<Scalars['ID']>;
  readonly commitOID: Maybe<Scalars['Github_GitObjectID']>;
  readonly body: Scalars['String'];
  readonly path: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['Int']>;
  readonly inReplyTo: Maybe<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddPullRequestReviewCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly comment: Maybe<Github_PullRequestReviewComment>;
  readonly commentEdge: Maybe<Github_PullRequestReviewCommentEdge>;
};

type Github_AddPullRequestReviewInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly commitOID: Maybe<Scalars['Github_GitObjectID']>;
  readonly body: Maybe<Scalars['String']>;
  readonly event: Maybe<Github_PullRequestReviewEvent>;
  readonly comments: Maybe<ReadonlyArray<Maybe<Github_DraftPullRequestReviewComment>>>;
  readonly threads: Maybe<ReadonlyArray<Maybe<Github_DraftPullRequestReviewThread>>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddPullRequestReviewPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
  readonly reviewEdge: Maybe<Github_PullRequestReviewEdge>;
};

type Github_AddPullRequestReviewThreadInput = {
  readonly path: Scalars['String'];
  readonly body: Scalars['String'];
  readonly pullRequestId: Maybe<Scalars['ID']>;
  readonly pullRequestReviewId: Maybe<Scalars['ID']>;
  readonly line: Scalars['Int'];
  readonly side: Maybe<Github_DiffSide>;
  readonly startLine: Maybe<Scalars['Int']>;
  readonly startSide: Maybe<Github_DiffSide>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddPullRequestReviewThreadPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly thread: Maybe<Github_PullRequestReviewThread>;
};

type Github_AddReactionInput = {
  readonly subjectId: Scalars['ID'];
  readonly content: Github_ReactionContent;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddReactionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly reaction: Maybe<Github_Reaction>;
  readonly subject: Maybe<Github_Reactable>;
};

type Github_AddStarInput = {
  readonly starrableId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_AddStarPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly starrable: Maybe<Github_Starrable>;
};

type Github_App = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly logoBackgroundColor: Scalars['String'];
  readonly logoUrl: Scalars['Github_URI'];
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};


type Github_App_logoUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

type Github_ArchiveRepositoryInput = {
  readonly repositoryId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ArchiveRepositoryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_Assignable = {
  readonly assignees: Github_UserConnection;
};


type Github_Assignable_assigneesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_AssignedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly assignable: Github_Assignable;
  readonly assignee: Maybe<Github_Assignee>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  readonly user: Maybe<Github_User>;
};

type Github_Assignee = Github_Bot | Github_Mannequin | Github_Organization | Github_User;

type Github_AuditEntry = {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_AuditEntryActor = Github_Bot | Github_Organization | Github_User;

type Github_AuditLogOrder = {
  readonly field: Maybe<Github_AuditLogOrderField>;
  readonly direction: Maybe<Github_OrderDirection>;
};

enum Github_AuditLogOrderField {
  CREATED_AT = 'CREATED_AT'
}

type Github_AutomaticBaseChangeFailedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly newBase: Scalars['String'];
  readonly oldBase: Scalars['String'];
  readonly pullRequest: Github_PullRequest;
};

type Github_AutomaticBaseChangeSucceededEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly newBase: Scalars['String'];
  readonly oldBase: Scalars['String'];
  readonly pullRequest: Github_PullRequest;
};

type Github_BaseRefChangedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

type Github_BaseRefForcePushedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly afterCommit: Maybe<Github_Commit>;
  readonly beforeCommit: Maybe<Github_Commit>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly ref: Maybe<Github_Ref>;
};

type Github_Blame = {
  readonly ranges: ReadonlyArray<Github_BlameRange>;
};

type Github_BlameRange = {
  readonly age: Scalars['Int'];
  readonly commit: Github_Commit;
  readonly endingLine: Scalars['Int'];
  readonly startingLine: Scalars['Int'];
};

type Github_Blob = Github_Node & Github_GitObject & {
  readonly abbreviatedOid: Scalars['String'];
  readonly byteSize: Scalars['Int'];
  readonly commitResourcePath: Scalars['Github_URI'];
  readonly commitUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  readonly isBinary: Maybe<Scalars['Boolean']>;
  readonly isTruncated: Scalars['Boolean'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly repository: Github_Repository;
  readonly text: Maybe<Scalars['String']>;
};

type Github_Bot = Github_Node & Github_Actor & Github_UniformResourceLocatable & {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};


type Github_Bot_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

type Github_BranchProtectionRule = Github_Node & {
  readonly branchProtectionRuleConflicts: Github_BranchProtectionRuleConflictConnection;
  readonly creator: Maybe<Github_Actor>;
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly dismissesStaleReviews: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly isAdminEnforced: Scalars['Boolean'];
  readonly matchingRefs: Github_RefConnection;
  readonly pattern: Scalars['String'];
  readonly pushAllowances: Github_PushAllowanceConnection;
  readonly repository: Maybe<Github_Repository>;
  readonly requiredApprovingReviewCount: Maybe<Scalars['Int']>;
  readonly requiredStatusCheckContexts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly requiresApprovingReviews: Scalars['Boolean'];
  readonly requiresCodeOwnerReviews: Scalars['Boolean'];
  readonly requiresCommitSignatures: Scalars['Boolean'];
  readonly requiresStatusChecks: Scalars['Boolean'];
  readonly requiresStrictStatusChecks: Scalars['Boolean'];
  readonly restrictsPushes: Scalars['Boolean'];
  readonly restrictsReviewDismissals: Scalars['Boolean'];
  readonly reviewDismissalAllowances: Github_ReviewDismissalAllowanceConnection;
};


type Github_BranchProtectionRule_branchProtectionRuleConflictsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_BranchProtectionRule_matchingRefsArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_BranchProtectionRule_pushAllowancesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_BranchProtectionRule_reviewDismissalAllowancesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_BranchProtectionRuleConflict = {
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly conflictingBranchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly ref: Maybe<Github_Ref>;
};

type Github_BranchProtectionRuleConflictConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRuleConflictEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRuleConflict>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_BranchProtectionRuleConflictEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_BranchProtectionRuleConflict>;
};

type Github_BranchProtectionRuleConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRuleEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRule>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_BranchProtectionRuleEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_BranchProtectionRule>;
};

type Github_CancelEnterpriseAdminInvitationInput = {
  readonly invitationId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CancelEnterpriseAdminInvitationPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly invitation: Maybe<Github_EnterpriseAdministratorInvitation>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_ChangeUserStatusInput = {
  readonly emoji: Maybe<Scalars['String']>;
  readonly message: Maybe<Scalars['String']>;
  readonly organizationId: Maybe<Scalars['ID']>;
  readonly limitedAvailability: Maybe<Scalars['Boolean']>;
  readonly expiresAt: Maybe<Scalars['Github_DateTime']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ChangeUserStatusPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly status: Maybe<Github_UserStatus>;
};

type Github_ClearLabelsFromLabelableInput = {
  readonly labelableId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ClearLabelsFromLabelablePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly labelable: Maybe<Github_Labelable>;
};

type Github_CloneProjectInput = {
  readonly targetOwnerId: Scalars['ID'];
  readonly sourceId: Scalars['ID'];
  readonly includeWorkflows: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly body: Maybe<Scalars['String']>;
  readonly public: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CloneProjectPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly jobStatusId: Maybe<Scalars['String']>;
  readonly project: Maybe<Github_Project>;
};

type Github_CloneTemplateRepositoryInput = {
  readonly repositoryId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly ownerId: Scalars['ID'];
  readonly description: Maybe<Scalars['String']>;
  readonly visibility: Github_RepositoryVisibility;
  readonly includeAllBranches: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CloneTemplateRepositoryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_Closable = {
  readonly closed: Scalars['Boolean'];
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
};

type Github_ClosedEvent = Github_Node & Github_UniformResourceLocatable & {
  readonly actor: Maybe<Github_Actor>;
  readonly closable: Github_Closable;
  readonly closer: Maybe<Github_Closer>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};

type Github_CloseIssueInput = {
  readonly issueId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CloseIssuePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly issue: Maybe<Github_Issue>;
};

type Github_ClosePullRequestInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ClosePullRequestPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
};

type Github_Closer = Github_Commit | Github_PullRequest;

type Github_CodeOfConduct = Github_Node & {
  readonly body: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly key: Scalars['String'];
  readonly name: Scalars['String'];
  readonly resourcePath: Maybe<Scalars['Github_URI']>;
  readonly url: Maybe<Scalars['Github_URI']>;
};

enum Github_CollaboratorAffiliation {
  OUTSIDE = 'OUTSIDE',
  DIRECT = 'DIRECT',
  ALL = 'ALL'
}

type Github_Comment = {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_Comment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

enum Github_CommentAuthorAssociation {
  MEMBER = 'MEMBER',
  OWNER = 'OWNER',
  COLLABORATOR = 'COLLABORATOR',
  CONTRIBUTOR = 'CONTRIBUTOR',
  FIRST_TIME_CONTRIBUTOR = 'FIRST_TIME_CONTRIBUTOR',
  FIRST_TIMER = 'FIRST_TIMER',
  NONE = 'NONE'
}

enum Github_CommentCannotUpdateReason {
  ARCHIVED = 'ARCHIVED',
  INSUFFICIENT_ACCESS = 'INSUFFICIENT_ACCESS',
  LOCKED = 'LOCKED',
  LOGIN_REQUIRED = 'LOGIN_REQUIRED',
  MAINTENANCE = 'MAINTENANCE',
  VERIFIED_EMAIL_REQUIRED = 'VERIFIED_EMAIL_REQUIRED',
  DENIED = 'DENIED'
}

type Github_CommentDeletedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

type Github_Commit = Github_Node & Github_GitObject & Github_Subscribable & Github_UniformResourceLocatable & {
  readonly abbreviatedOid: Scalars['String'];
  readonly additions: Scalars['Int'];
  readonly associatedPullRequests: Maybe<Github_PullRequestConnection>;
  readonly author: Maybe<Github_GitActor>;
  readonly authoredByCommitter: Scalars['Boolean'];
  readonly authoredDate: Scalars['Github_DateTime'];
  readonly blame: Github_Blame;
  readonly changedFiles: Scalars['Int'];
  readonly comments: Github_CommitCommentConnection;
  readonly commitResourcePath: Scalars['Github_URI'];
  readonly commitUrl: Scalars['Github_URI'];
  readonly committedDate: Scalars['Github_DateTime'];
  readonly committedViaWeb: Scalars['Boolean'];
  readonly committer: Maybe<Github_GitActor>;
  readonly deletions: Scalars['Int'];
  readonly deployments: Maybe<Github_DeploymentConnection>;
  readonly history: Github_CommitHistoryConnection;
  readonly id: Scalars['ID'];
  readonly message: Scalars['String'];
  readonly messageBody: Scalars['String'];
  readonly messageBodyHTML: Scalars['Github_HTML'];
  readonly messageHeadline: Scalars['String'];
  readonly messageHeadlineHTML: Scalars['Github_HTML'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly onBehalfOf: Maybe<Github_Organization>;
  readonly parents: Github_CommitConnection;
  readonly pushedDate: Maybe<Scalars['Github_DateTime']>;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly signature: Maybe<Github_GitSignature>;
  readonly status: Maybe<Github_Status>;
  readonly statusCheckRollup: Maybe<Github_StatusCheckRollup>;
  readonly submodules: Github_SubmoduleConnection;
  readonly tarballUrl: Scalars['Github_URI'];
  readonly tree: Github_Tree;
  readonly treeResourcePath: Scalars['Github_URI'];
  readonly treeUrl: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
  readonly zipballUrl: Scalars['Github_URI'];
};


type Github_Commit_associatedPullRequestsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_PullRequestOrder>;
};


type Github_Commit_blameArgs = {
  path: Scalars['String'];
};


type Github_Commit_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Commit_deploymentsArgs = {
  environments: Maybe<ReadonlyArray<Scalars['String']>>;
  orderBy?: Maybe<Github_DeploymentOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Commit_historyArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  path: Maybe<Scalars['String']>;
  author: Maybe<Github_CommitAuthor>;
  since: Maybe<Scalars['Github_GitTimestamp']>;
  until: Maybe<Scalars['Github_GitTimestamp']>;
};


type Github_Commit_parentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Commit_submodulesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_CommitAuthor = {
  readonly id: Maybe<Scalars['ID']>;
  readonly emails: Maybe<ReadonlyArray<Scalars['String']>>;
};

type Github_CommitComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly commit: Maybe<Github_Commit>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly isMinimized: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly minimizedReason: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['Int']>;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanMinimize: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_CommitComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_CommitComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_CommitCommentConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CommitCommentEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CommitComment>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CommitCommentEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_CommitComment>;
};

type Github_CommitCommentThread = Github_Node & Github_RepositoryNode & {
  readonly comments: Github_CommitCommentConnection;
  readonly commit: Maybe<Github_Commit>;
  readonly id: Scalars['ID'];
  readonly path: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['Int']>;
  readonly repository: Github_Repository;
};


type Github_CommitCommentThread_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_CommitConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CommitEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Commit>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CommitContributionOrder = {
  readonly field: Github_CommitContributionOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_CommitContributionOrderField {
  OCCURRED_AT = 'OCCURRED_AT',
  COMMIT_COUNT = 'COMMIT_COUNT'
}

type Github_CommitContributionsByRepository = {
  readonly contributions: Github_CreatedCommitContributionConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};


type Github_CommitContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_CommitContributionOrder>;
};

type Github_CommitEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Commit>;
};

type Github_CommitHistoryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CommitEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Commit>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ConnectedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly isCrossRepository: Scalars['Boolean'];
  readonly source: Github_ReferencedSubject;
  readonly subject: Github_ReferencedSubject;
};

type Github_Contribution = {
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_ContributionCalendar = {
  readonly colors: ReadonlyArray<Scalars['String']>;
  readonly isHalloween: Scalars['Boolean'];
  readonly months: ReadonlyArray<Github_ContributionCalendarMonth>;
  readonly totalContributions: Scalars['Int'];
  readonly weeks: ReadonlyArray<Github_ContributionCalendarWeek>;
};

type Github_ContributionCalendarDay = {
  readonly color: Scalars['String'];
  readonly contributionCount: Scalars['Int'];
  readonly date: Scalars['Github_Date'];
  readonly weekday: Scalars['Int'];
};

type Github_ContributionCalendarMonth = {
  readonly firstDay: Scalars['Github_Date'];
  readonly name: Scalars['String'];
  readonly totalWeeks: Scalars['Int'];
  readonly year: Scalars['Int'];
};

type Github_ContributionCalendarWeek = {
  readonly contributionDays: ReadonlyArray<Github_ContributionCalendarDay>;
  readonly firstDay: Scalars['Github_Date'];
};

type Github_ContributionOrder = {
  readonly direction: Github_OrderDirection;
};

type Github_ContributionsCollection = {
  readonly commitContributionsByRepository: ReadonlyArray<Github_CommitContributionsByRepository>;
  readonly contributionCalendar: Github_ContributionCalendar;
  readonly contributionYears: ReadonlyArray<Scalars['Int']>;
  readonly doesEndInCurrentMonth: Scalars['Boolean'];
  readonly earliestRestrictedContributionDate: Maybe<Scalars['Github_Date']>;
  readonly endedAt: Scalars['Github_DateTime'];
  readonly firstIssueContribution: Maybe<Github_CreatedIssueOrRestrictedContribution>;
  readonly firstPullRequestContribution: Maybe<Github_CreatedPullRequestOrRestrictedContribution>;
  readonly firstRepositoryContribution: Maybe<Github_CreatedRepositoryOrRestrictedContribution>;
  readonly hasActivityInThePast: Scalars['Boolean'];
  readonly hasAnyContributions: Scalars['Boolean'];
  readonly hasAnyRestrictedContributions: Scalars['Boolean'];
  readonly isSingleDay: Scalars['Boolean'];
  readonly issueContributions: Github_CreatedIssueContributionConnection;
  readonly issueContributionsByRepository: ReadonlyArray<Github_IssueContributionsByRepository>;
  readonly joinedGitHubContribution: Maybe<Github_JoinedGitHubContribution>;
  readonly latestRestrictedContributionDate: Maybe<Scalars['Github_Date']>;
  readonly mostRecentCollectionWithActivity: Maybe<Github_ContributionsCollection>;
  readonly mostRecentCollectionWithoutActivity: Maybe<Github_ContributionsCollection>;
  readonly popularIssueContribution: Maybe<Github_CreatedIssueContribution>;
  readonly popularPullRequestContribution: Maybe<Github_CreatedPullRequestContribution>;
  readonly pullRequestContributions: Github_CreatedPullRequestContributionConnection;
  readonly pullRequestContributionsByRepository: ReadonlyArray<Github_PullRequestContributionsByRepository>;
  readonly pullRequestReviewContributions: Github_CreatedPullRequestReviewContributionConnection;
  readonly pullRequestReviewContributionsByRepository: ReadonlyArray<Github_PullRequestReviewContributionsByRepository>;
  readonly repositoryContributions: Github_CreatedRepositoryContributionConnection;
  readonly restrictedContributionsCount: Scalars['Int'];
  readonly startedAt: Scalars['Github_DateTime'];
  readonly totalCommitContributions: Scalars['Int'];
  readonly totalIssueContributions: Scalars['Int'];
  readonly totalPullRequestContributions: Scalars['Int'];
  readonly totalPullRequestReviewContributions: Scalars['Int'];
  readonly totalRepositoriesWithContributedCommits: Scalars['Int'];
  readonly totalRepositoriesWithContributedIssues: Scalars['Int'];
  readonly totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'];
  readonly totalRepositoriesWithContributedPullRequests: Scalars['Int'];
  readonly totalRepositoryContributions: Scalars['Int'];
  readonly user: Github_User;
};


type Github_ContributionsCollection_commitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


type Github_ContributionsCollection_issueContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


type Github_ContributionsCollection_issueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


type Github_ContributionsCollection_pullRequestContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


type Github_ContributionsCollection_pullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


type Github_ContributionsCollection_pullRequestReviewContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


type Github_ContributionsCollection_pullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


type Github_ContributionsCollection_repositoryContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


type Github_ContributionsCollection_totalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


type Github_ContributionsCollection_totalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


type Github_ContributionsCollection_totalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


type Github_ContributionsCollection_totalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


type Github_ContributionsCollection_totalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
};

type Github_ConvertedNoteToIssueEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

type Github_ConvertProjectCardNoteToIssueInput = {
  readonly projectCardId: Scalars['ID'];
  readonly repositoryId: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ConvertProjectCardNoteToIssuePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly projectCard: Maybe<Github_ProjectCard>;
};

type Github_ConvertToDraftEvent = Github_Node & Github_UniformResourceLocatable & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};

type Github_CreateBranchProtectionRuleInput = {
  readonly repositoryId: Scalars['ID'];
  readonly pattern: Scalars['String'];
  readonly requiresApprovingReviews: Maybe<Scalars['Boolean']>;
  readonly requiredApprovingReviewCount: Maybe<Scalars['Int']>;
  readonly requiresCommitSignatures: Maybe<Scalars['Boolean']>;
  readonly isAdminEnforced: Maybe<Scalars['Boolean']>;
  readonly requiresStatusChecks: Maybe<Scalars['Boolean']>;
  readonly requiresStrictStatusChecks: Maybe<Scalars['Boolean']>;
  readonly requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>;
  readonly dismissesStaleReviews: Maybe<Scalars['Boolean']>;
  readonly restrictsReviewDismissals: Maybe<Scalars['Boolean']>;
  readonly reviewDismissalActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly restrictsPushes: Maybe<Scalars['Boolean']>;
  readonly pushActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly requiredStatusCheckContexts: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateBranchProtectionRulePayload = {
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreatedCommitContribution = Github_Contribution & {
  readonly commitCount: Scalars['Int'];
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_CreatedCommitContributionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedCommitContributionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedCommitContribution>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CreatedCommitContributionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_CreatedCommitContribution>;
};

type Github_CreatedIssueContribution = Github_Contribution & {
  readonly isRestricted: Scalars['Boolean'];
  readonly issue: Github_Issue;
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_CreatedIssueContributionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedIssueContributionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedIssueContribution>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CreatedIssueContributionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_CreatedIssueContribution>;
};

type Github_CreatedIssueOrRestrictedContribution = Github_CreatedIssueContribution | Github_RestrictedContribution;

type Github_CreatedPullRequestContribution = Github_Contribution & {
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly pullRequest: Github_PullRequest;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_CreatedPullRequestContributionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestContributionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestContribution>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CreatedPullRequestContributionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_CreatedPullRequestContribution>;
};

type Github_CreatedPullRequestOrRestrictedContribution = Github_CreatedPullRequestContribution | Github_RestrictedContribution;

type Github_CreatedPullRequestReviewContribution = Github_Contribution & {
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly pullRequest: Github_PullRequest;
  readonly pullRequestReview: Github_PullRequestReview;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_CreatedPullRequestReviewContributionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestReviewContributionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestReviewContribution>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CreatedPullRequestReviewContributionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_CreatedPullRequestReviewContribution>;
};

type Github_CreatedRepositoryContribution = Github_Contribution & {
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_CreatedRepositoryContributionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedRepositoryContributionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedRepositoryContribution>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_CreatedRepositoryContributionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_CreatedRepositoryContribution>;
};

type Github_CreatedRepositoryOrRestrictedContribution = Github_CreatedRepositoryContribution | Github_RestrictedContribution;

type Github_CreateEnterpriseOrganizationInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly profileName: Scalars['String'];
  readonly billingEmail: Scalars['String'];
  readonly adminLogins: ReadonlyArray<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateEnterpriseOrganizationPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly organization: Maybe<Github_Organization>;
};

type Github_CreateIpAllowListEntryInput = {
  readonly ownerId: Scalars['ID'];
  readonly allowListValue: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly isActive: Scalars['Boolean'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateIpAllowListEntryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly ipAllowListEntry: Maybe<Github_IpAllowListEntry>;
};

type Github_CreateIssueInput = {
  readonly repositoryId: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly body: Maybe<Scalars['String']>;
  readonly assigneeIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly milestoneId: Maybe<Scalars['ID']>;
  readonly labelIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly projectIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateIssuePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly issue: Maybe<Github_Issue>;
};

type Github_CreateProjectInput = {
  readonly ownerId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly body: Maybe<Scalars['String']>;
  readonly template: Maybe<Github_ProjectTemplate>;
  readonly repositoryIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateProjectPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly project: Maybe<Github_Project>;
};

type Github_CreatePullRequestInput = {
  readonly repositoryId: Scalars['ID'];
  readonly baseRefName: Scalars['String'];
  readonly headRefName: Scalars['String'];
  readonly title: Scalars['String'];
  readonly body: Maybe<Scalars['String']>;
  readonly maintainerCanModify: Maybe<Scalars['Boolean']>;
  readonly draft: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreatePullRequestPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
};

type Github_CreateRefInput = {
  readonly repositoryId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateRefPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly ref: Maybe<Github_Ref>;
};

type Github_CreateRepositoryInput = {
  readonly name: Scalars['String'];
  readonly ownerId: Maybe<Scalars['ID']>;
  readonly description: Maybe<Scalars['String']>;
  readonly visibility: Github_RepositoryVisibility;
  readonly template: Maybe<Scalars['Boolean']>;
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  readonly hasWikiEnabled: Maybe<Scalars['Boolean']>;
  readonly hasIssuesEnabled: Maybe<Scalars['Boolean']>;
  readonly teamId: Maybe<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateRepositoryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_CreateTeamDiscussionCommentInput = {
  readonly discussionId: Scalars['ID'];
  readonly body: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateTeamDiscussionCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly teamDiscussionComment: Maybe<Github_TeamDiscussionComment>;
};

type Github_CreateTeamDiscussionInput = {
  readonly teamId: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly body: Scalars['String'];
  readonly private: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_CreateTeamDiscussionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly teamDiscussion: Maybe<Github_TeamDiscussion>;
};

type Github_CrossReferencedEvent = Github_Node & Github_UniformResourceLocatable & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly isCrossRepository: Scalars['Boolean'];
  readonly referencedAt: Scalars['Github_DateTime'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly source: Github_ReferencedSubject;
  readonly target: Github_ReferencedSubject;
  readonly url: Scalars['Github_URI'];
  readonly willCloseTarget: Scalars['Boolean'];
};



type Github_DeclineTopicSuggestionInput = {
  readonly repositoryId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly reason: Github_TopicSuggestionDeclineReason;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeclineTopicSuggestionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly topic: Maybe<Github_Topic>;
};

enum Github_DefaultRepositoryPermissionField {
  NONE = 'NONE',
  READ = 'READ',
  WRITE = 'WRITE',
  ADMIN = 'ADMIN'
}

type Github_Deletable = {
  readonly viewerCanDelete: Scalars['Boolean'];
};

type Github_DeleteBranchProtectionRuleInput = {
  readonly branchProtectionRuleId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteBranchProtectionRulePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteDeploymentInput = {
  readonly id: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteDeploymentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteIpAllowListEntryInput = {
  readonly ipAllowListEntryId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteIpAllowListEntryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly ipAllowListEntry: Maybe<Github_IpAllowListEntry>;
};

type Github_DeleteIssueCommentInput = {
  readonly id: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteIssueCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteIssueInput = {
  readonly issueId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteIssuePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_DeleteProjectCardInput = {
  readonly cardId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteProjectCardPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly column: Maybe<Github_ProjectColumn>;
  readonly deletedCardId: Maybe<Scalars['ID']>;
};

type Github_DeleteProjectColumnInput = {
  readonly columnId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteProjectColumnPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly deletedColumnId: Maybe<Scalars['ID']>;
  readonly project: Maybe<Github_Project>;
};

type Github_DeleteProjectInput = {
  readonly projectId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteProjectPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly owner: Maybe<Github_ProjectOwner>;
};

type Github_DeletePullRequestReviewCommentInput = {
  readonly id: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeletePullRequestReviewCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

type Github_DeletePullRequestReviewInput = {
  readonly pullRequestReviewId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeletePullRequestReviewPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

type Github_DeleteRefInput = {
  readonly refId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteRefPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteTeamDiscussionCommentInput = {
  readonly id: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteTeamDiscussionCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteTeamDiscussionInput = {
  readonly id: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DeleteTeamDiscussionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DemilestonedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly milestoneTitle: Scalars['String'];
  readonly subject: Github_MilestoneItem;
};

type Github_DeployedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly deployment: Github_Deployment;
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly ref: Maybe<Github_Ref>;
};

type Github_DeployKey = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly key: Scalars['String'];
  readonly readOnly: Scalars['Boolean'];
  readonly title: Scalars['String'];
  readonly verified: Scalars['Boolean'];
};

type Github_DeployKeyConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_DeployKeyEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_DeployKey>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_DeployKeyEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_DeployKey>;
};

type Github_Deployment = Github_Node & {
  readonly commit: Maybe<Github_Commit>;
  readonly commitOid: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly creator: Github_Actor;
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly environment: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly latestEnvironment: Maybe<Scalars['String']>;
  readonly latestStatus: Maybe<Github_DeploymentStatus>;
  readonly originalEnvironment: Maybe<Scalars['String']>;
  readonly payload: Maybe<Scalars['String']>;
  readonly ref: Maybe<Github_Ref>;
  readonly repository: Github_Repository;
  readonly state: Maybe<Github_DeploymentState>;
  readonly statuses: Maybe<Github_DeploymentStatusConnection>;
  readonly task: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['Github_DateTime'];
};


type Github_Deployment_statusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_DeploymentConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_DeploymentEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Deployment>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_DeploymentEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Deployment>;
};

type Github_DeploymentEnvironmentChangedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly deploymentStatus: Github_DeploymentStatus;
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
};

type Github_DeploymentOrder = {
  readonly field: Github_DeploymentOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_DeploymentOrderField {
  CREATED_AT = 'CREATED_AT'
}

enum Github_DeploymentState {
  ABANDONED = 'ABANDONED',
  ACTIVE = 'ACTIVE',
  DESTROYED = 'DESTROYED',
  ERROR = 'ERROR',
  FAILURE = 'FAILURE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  QUEUED = 'QUEUED',
  IN_PROGRESS = 'IN_PROGRESS'
}

type Github_DeploymentStatus = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly creator: Github_Actor;
  readonly deployment: Github_Deployment;
  readonly description: Maybe<Scalars['String']>;
  readonly environmentUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly logUrl: Maybe<Scalars['Github_URI']>;
  readonly state: Github_DeploymentStatusState;
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_DeploymentStatusConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_DeploymentStatusEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_DeploymentStatus>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_DeploymentStatusEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_DeploymentStatus>;
};

enum Github_DeploymentStatusState {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  INACTIVE = 'INACTIVE',
  ERROR = 'ERROR',
  QUEUED = 'QUEUED',
  IN_PROGRESS = 'IN_PROGRESS'
}

enum Github_DiffSide {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT'
}

type Github_DisconnectedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly isCrossRepository: Scalars['Boolean'];
  readonly source: Github_ReferencedSubject;
  readonly subject: Github_ReferencedSubject;
};

type Github_DismissPullRequestReviewInput = {
  readonly pullRequestReviewId: Scalars['ID'];
  readonly message: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_DismissPullRequestReviewPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

type Github_DraftPullRequestReviewComment = {
  readonly path: Scalars['String'];
  readonly position: Scalars['Int'];
  readonly body: Scalars['String'];
};

type Github_DraftPullRequestReviewThread = {
  readonly path: Scalars['String'];
  readonly line: Scalars['Int'];
  readonly side: Maybe<Github_DiffSide>;
  readonly startLine: Maybe<Scalars['Int']>;
  readonly startSide: Maybe<Github_DiffSide>;
  readonly body: Scalars['String'];
};

type Github_Enterprise = Github_Node & {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly billingInfo: Maybe<Github_EnterpriseBillingInfo>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  readonly location: Maybe<Scalars['String']>;
  readonly members: Github_EnterpriseMemberConnection;
  readonly name: Scalars['String'];
  readonly organizations: Github_OrganizationConnection;
  readonly ownerInfo: Maybe<Github_EnterpriseOwnerInfo>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly slug: Scalars['String'];
  readonly url: Scalars['Github_URI'];
  readonly userAccounts: Github_EnterpriseUserAccountConnection;
  readonly viewerIsAdmin: Scalars['Boolean'];
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


type Github_Enterprise_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


type Github_Enterprise_membersArgs = {
  organizationLogins: Maybe<ReadonlyArray<Scalars['String']>>;
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_EnterpriseMemberOrder>;
  role: Maybe<Github_EnterpriseUserAccountMembershipRole>;
  deployment: Maybe<Github_EnterpriseUserDeployment>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Enterprise_organizationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_OrganizationOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Enterprise_userAccountsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_EnterpriseAdministratorConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseAdministratorEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseAdministratorEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_User>;
  readonly role: Github_EnterpriseAdministratorRole;
};

type Github_EnterpriseAdministratorInvitation = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly email: Maybe<Scalars['String']>;
  readonly enterprise: Github_Enterprise;
  readonly id: Scalars['ID'];
  readonly invitee: Maybe<Github_User>;
  readonly inviter: Maybe<Github_User>;
  readonly role: Github_EnterpriseAdministratorRole;
};

type Github_EnterpriseAdministratorInvitationConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseAdministratorInvitationEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseAdministratorInvitation>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseAdministratorInvitationEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseAdministratorInvitation>;
};

type Github_EnterpriseAdministratorInvitationOrder = {
  readonly field: Github_EnterpriseAdministratorInvitationOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_EnterpriseAdministratorInvitationOrderField {
  CREATED_AT = 'CREATED_AT'
}

enum Github_EnterpriseAdministratorRole {
  OWNER = 'OWNER',
  BILLING_MANAGER = 'BILLING_MANAGER'
}

type Github_EnterpriseAuditEntryData = {
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
};

type Github_EnterpriseBillingInfo = {
  readonly allLicensableUsersCount: Scalars['Int'];
  readonly assetPacks: Scalars['Int'];
  /** @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC. */
  readonly availableSeats: Scalars['Int'];
  readonly bandwidthQuota: Scalars['Float'];
  readonly bandwidthUsage: Scalars['Float'];
  readonly bandwidthUsagePercentage: Scalars['Int'];
  /** @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC. */
  readonly seats: Scalars['Int'];
  readonly storageQuota: Scalars['Float'];
  readonly storageUsage: Scalars['Float'];
  readonly storageUsagePercentage: Scalars['Int'];
  readonly totalAvailableLicenses: Scalars['Int'];
  readonly totalLicenses: Scalars['Int'];
};

enum Github_EnterpriseDefaultRepositoryPermissionSettingValue {
  NO_POLICY = 'NO_POLICY',
  ADMIN = 'ADMIN',
  WRITE = 'WRITE',
  READ = 'READ',
  NONE = 'NONE'
}

enum Github_EnterpriseEnabledDisabledSettingValue {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  NO_POLICY = 'NO_POLICY'
}

enum Github_EnterpriseEnabledSettingValue {
  ENABLED = 'ENABLED',
  NO_POLICY = 'NO_POLICY'
}

type Github_EnterpriseIdentityProvider = Github_Node & {
  readonly digestMethod: Maybe<Github_SamlDigestAlgorithm>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly externalIdentities: Github_ExternalIdentityConnection;
  readonly id: Scalars['ID'];
  readonly idpCertificate: Maybe<Scalars['Github_X509Certificate']>;
  readonly issuer: Maybe<Scalars['String']>;
  readonly recoveryCodes: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly signatureMethod: Maybe<Github_SamlSignatureAlgorithm>;
  readonly ssoUrl: Maybe<Scalars['Github_URI']>;
};


type Github_EnterpriseIdentityProvider_externalIdentitiesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_EnterpriseMember = Github_EnterpriseUserAccount | Github_User;

type Github_EnterpriseMemberConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseMemberEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseMember>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseMemberEdge = {
  readonly cursor: Scalars['String'];
  /** @deprecated All members consume a license Removal on 2021-01-01 UTC. */
  readonly isUnlicensed: Scalars['Boolean'];
  readonly node: Maybe<Github_EnterpriseMember>;
};

type Github_EnterpriseMemberOrder = {
  readonly field: Github_EnterpriseMemberOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_EnterpriseMemberOrderField {
  LOGIN = 'LOGIN',
  CREATED_AT = 'CREATED_AT'
}

enum Github_EnterpriseMembersCanCreateRepositoriesSettingValue {
  NO_POLICY = 'NO_POLICY',
  ALL = 'ALL',
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  DISABLED = 'DISABLED'
}

enum Github_EnterpriseMembersCanMakePurchasesSettingValue {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED'
}

type Github_EnterpriseOrganizationMembershipConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseOrganizationMembershipEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Organization>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseOrganizationMembershipEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Organization>;
  readonly role: Github_EnterpriseUserAccountMembershipRole;
};

type Github_EnterpriseOutsideCollaboratorConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseOutsideCollaboratorEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseOutsideCollaboratorEdge = {
  readonly cursor: Scalars['String'];
  /** @deprecated All outside collaborators consume a license Removal on 2021-01-01 UTC. */
  readonly isUnlicensed: Scalars['Boolean'];
  readonly node: Maybe<Github_User>;
  readonly repositories: Github_EnterpriseRepositoryInfoConnection;
};


type Github_EnterpriseOutsideCollaboratorEdge_repositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_RepositoryOrder>;
};

type Github_EnterpriseOwnerInfo = {
  readonly actionExecutionCapabilitySettingOrganizations: Github_OrganizationConnection;
  readonly admins: Github_EnterpriseAdministratorConnection;
  readonly affiliatedUsersWithTwoFactorDisabled: Github_UserConnection;
  readonly affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'];
  readonly allowPrivateRepositoryForkingSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly allowPrivateRepositoryForkingSettingOrganizations: Github_OrganizationConnection;
  readonly defaultRepositoryPermissionSetting: Github_EnterpriseDefaultRepositoryPermissionSettingValue;
  readonly defaultRepositoryPermissionSettingOrganizations: Github_OrganizationConnection;
  readonly enterpriseServerInstallations: Github_EnterpriseServerInstallationConnection;
  readonly ipAllowListEnabledSetting: Github_IpAllowListEnabledSettingValue;
  readonly ipAllowListEntries: Github_IpAllowListEntryConnection;
  readonly isUpdatingDefaultRepositoryPermission: Scalars['Boolean'];
  readonly isUpdatingTwoFactorRequirement: Scalars['Boolean'];
  readonly membersCanChangeRepositoryVisibilitySetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly membersCanChangeRepositoryVisibilitySettingOrganizations: Github_OrganizationConnection;
  readonly membersCanCreateInternalRepositoriesSetting: Maybe<Scalars['Boolean']>;
  readonly membersCanCreatePrivateRepositoriesSetting: Maybe<Scalars['Boolean']>;
  readonly membersCanCreatePublicRepositoriesSetting: Maybe<Scalars['Boolean']>;
  readonly membersCanCreateRepositoriesSetting: Maybe<Github_EnterpriseMembersCanCreateRepositoriesSettingValue>;
  readonly membersCanCreateRepositoriesSettingOrganizations: Github_OrganizationConnection;
  readonly membersCanDeleteIssuesSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly membersCanDeleteIssuesSettingOrganizations: Github_OrganizationConnection;
  readonly membersCanDeleteRepositoriesSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly membersCanDeleteRepositoriesSettingOrganizations: Github_OrganizationConnection;
  readonly membersCanInviteCollaboratorsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly membersCanInviteCollaboratorsSettingOrganizations: Github_OrganizationConnection;
  readonly membersCanMakePurchasesSetting: Github_EnterpriseMembersCanMakePurchasesSettingValue;
  readonly membersCanUpdateProtectedBranchesSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly membersCanUpdateProtectedBranchesSettingOrganizations: Github_OrganizationConnection;
  readonly membersCanViewDependencyInsightsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly membersCanViewDependencyInsightsSettingOrganizations: Github_OrganizationConnection;
  readonly organizationProjectsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly organizationProjectsSettingOrganizations: Github_OrganizationConnection;
  readonly outsideCollaborators: Github_EnterpriseOutsideCollaboratorConnection;
  readonly pendingAdminInvitations: Github_EnterpriseAdministratorInvitationConnection;
  readonly pendingCollaboratorInvitations: Github_RepositoryInvitationConnection;
  /** @deprecated Repository invitations can now be associated with an email, not only an invitee. Use the `pendingCollaboratorInvitations` field instead. Removal on 2020-10-01 UTC. */
  readonly pendingCollaborators: Github_EnterprisePendingCollaboratorConnection;
  readonly pendingMemberInvitations: Github_EnterprisePendingMemberInvitationConnection;
  readonly repositoryProjectsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly repositoryProjectsSettingOrganizations: Github_OrganizationConnection;
  readonly samlIdentityProvider: Maybe<Github_EnterpriseIdentityProvider>;
  readonly samlIdentityProviderSettingOrganizations: Github_OrganizationConnection;
  readonly teamDiscussionsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  readonly teamDiscussionsSettingOrganizations: Github_OrganizationConnection;
  readonly twoFactorRequiredSetting: Github_EnterpriseEnabledSettingValue;
  readonly twoFactorRequiredSettingOrganizations: Github_OrganizationConnection;
};


type Github_EnterpriseOwnerInfo_actionExecutionCapabilitySettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_adminsArgs = {
  query: Maybe<Scalars['String']>;
  role: Maybe<Github_EnterpriseAdministratorRole>;
  orderBy?: Maybe<Github_EnterpriseMemberOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_affiliatedUsersWithTwoFactorDisabledArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_allowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_defaultRepositoryPermissionSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Github_DefaultRepositoryPermissionField;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_enterpriseServerInstallationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  connectedOnly?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_EnterpriseServerInstallationOrder>;
};


type Github_EnterpriseOwnerInfo_ipAllowListEntriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_IpAllowListEntryOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanCreateRepositoriesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Github_OrganizationMembersCanCreateRepositoriesSettingValue;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanDeleteIssuesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_membersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_organizationProjectsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_outsideCollaboratorsArgs = {
  login: Maybe<Scalars['String']>;
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_EnterpriseMemberOrder>;
  visibility: Maybe<Github_RepositoryVisibility>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_pendingAdminInvitationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_EnterpriseAdministratorInvitationOrder>;
  role: Maybe<Github_EnterpriseAdministratorRole>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_pendingCollaboratorInvitationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_RepositoryInvitationOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_pendingCollaboratorsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_RepositoryInvitationOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_pendingMemberInvitationsArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseOwnerInfo_repositoryProjectsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_samlIdentityProviderSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Github_IdentityProviderConfigurationState;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_teamDiscussionsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


type Github_EnterpriseOwnerInfo_twoFactorRequiredSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};

type Github_EnterprisePendingCollaboratorConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterprisePendingCollaboratorEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterprisePendingCollaboratorEdge = {
  readonly cursor: Scalars['String'];
  /** @deprecated All pending collaborators consume a license Removal on 2021-01-01 UTC. */
  readonly isUnlicensed: Scalars['Boolean'];
  readonly node: Maybe<Github_User>;
  readonly repositories: Github_EnterpriseRepositoryInfoConnection;
};


type Github_EnterprisePendingCollaboratorEdge_repositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_RepositoryOrder>;
};

type Github_EnterprisePendingMemberInvitationConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterprisePendingMemberInvitationEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_OrganizationInvitation>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
  readonly totalUniqueUserCount: Scalars['Int'];
};

type Github_EnterprisePendingMemberInvitationEdge = {
  readonly cursor: Scalars['String'];
  /** @deprecated All pending members consume a license Removal on 2020-07-01 UTC. */
  readonly isUnlicensed: Scalars['Boolean'];
  readonly node: Maybe<Github_OrganizationInvitation>;
};

type Github_EnterpriseRepositoryInfo = Github_Node & {
  readonly id: Scalars['ID'];
  readonly isPrivate: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly nameWithOwner: Scalars['String'];
};

type Github_EnterpriseRepositoryInfoConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseRepositoryInfoEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseRepositoryInfo>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseRepositoryInfoEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseRepositoryInfo>;
};

type Github_EnterpriseServerInstallation = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly customerName: Scalars['String'];
  readonly hostName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly isConnected: Scalars['Boolean'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly userAccounts: Github_EnterpriseServerUserAccountConnection;
  readonly userAccountsUploads: Github_EnterpriseServerUserAccountsUploadConnection;
};


type Github_EnterpriseServerInstallation_userAccountsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_EnterpriseServerInstallation_userAccountsUploadsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountsUploadOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_EnterpriseServerInstallationConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerInstallationEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerInstallation>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseServerInstallationEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseServerInstallation>;
};

type Github_EnterpriseServerInstallationOrder = {
  readonly field: Github_EnterpriseServerInstallationOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_EnterpriseServerInstallationOrderField {
  HOST_NAME = 'HOST_NAME',
  CUSTOMER_NAME = 'CUSTOMER_NAME',
  CREATED_AT = 'CREATED_AT'
}

type Github_EnterpriseServerUserAccount = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly emails: Github_EnterpriseServerUserAccountEmailConnection;
  readonly enterpriseServerInstallation: Github_EnterpriseServerInstallation;
  readonly id: Scalars['ID'];
  readonly isSiteAdmin: Scalars['Boolean'];
  readonly login: Scalars['String'];
  readonly profileName: Maybe<Scalars['String']>;
  readonly remoteCreatedAt: Scalars['Github_DateTime'];
  readonly remoteUserId: Scalars['Int'];
  readonly updatedAt: Scalars['Github_DateTime'];
};


type Github_EnterpriseServerUserAccount_emailsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountEmailOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_EnterpriseServerUserAccountConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccount>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseServerUserAccountEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseServerUserAccount>;
};

type Github_EnterpriseServerUserAccountEmail = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly isPrimary: Scalars['Boolean'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly userAccount: Github_EnterpriseServerUserAccount;
};

type Github_EnterpriseServerUserAccountEmailConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountEmailEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountEmail>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseServerUserAccountEmailEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseServerUserAccountEmail>;
};

type Github_EnterpriseServerUserAccountEmailOrder = {
  readonly field: Github_EnterpriseServerUserAccountEmailOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_EnterpriseServerUserAccountEmailOrderField {
  EMAIL = 'EMAIL'
}

type Github_EnterpriseServerUserAccountOrder = {
  readonly field: Github_EnterpriseServerUserAccountOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_EnterpriseServerUserAccountOrderField {
  LOGIN = 'LOGIN',
  REMOTE_CREATED_AT = 'REMOTE_CREATED_AT'
}

type Github_EnterpriseServerUserAccountsUpload = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly enterprise: Github_Enterprise;
  readonly enterpriseServerInstallation: Github_EnterpriseServerInstallation;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly syncState: Github_EnterpriseServerUserAccountsUploadSyncState;
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_EnterpriseServerUserAccountsUploadConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountsUploadEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountsUpload>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseServerUserAccountsUploadEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseServerUserAccountsUpload>;
};

type Github_EnterpriseServerUserAccountsUploadOrder = {
  readonly field: Github_EnterpriseServerUserAccountsUploadOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_EnterpriseServerUserAccountsUploadOrderField {
  CREATED_AT = 'CREATED_AT'
}

enum Github_EnterpriseServerUserAccountsUploadSyncState {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

type Github_EnterpriseUserAccount = Github_Node & Github_Actor & {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly enterprise: Github_Enterprise;
  readonly id: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly organizations: Github_EnterpriseOrganizationMembershipConnection;
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly user: Maybe<Github_User>;
};


type Github_EnterpriseUserAccount_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


type Github_EnterpriseUserAccount_organizationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_OrganizationOrder>;
  role: Maybe<Github_EnterpriseUserAccountMembershipRole>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_EnterpriseUserAccountConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseUserAccountEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseUserAccount>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_EnterpriseUserAccountEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_EnterpriseUserAccount>;
};

enum Github_EnterpriseUserAccountMembershipRole {
  MEMBER = 'MEMBER',
  OWNER = 'OWNER'
}

enum Github_EnterpriseUserDeployment {
  CLOUD = 'CLOUD',
  SERVER = 'SERVER'
}

type Github_ExternalIdentity = Github_Node & {
  readonly guid: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly organizationInvitation: Maybe<Github_OrganizationInvitation>;
  readonly samlIdentity: Maybe<Github_ExternalIdentitySamlAttributes>;
  readonly scimIdentity: Maybe<Github_ExternalIdentityScimAttributes>;
  readonly user: Maybe<Github_User>;
};

type Github_ExternalIdentityConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ExternalIdentityEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ExternalIdentity>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ExternalIdentityEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_ExternalIdentity>;
};

type Github_ExternalIdentitySamlAttributes = {
  readonly emails: Maybe<ReadonlyArray<Github_UserEmailMetadata>>;
  readonly familyName: Maybe<Scalars['String']>;
  readonly givenName: Maybe<Scalars['String']>;
  readonly groups: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly nameId: Maybe<Scalars['String']>;
  readonly username: Maybe<Scalars['String']>;
};

type Github_ExternalIdentityScimAttributes = {
  readonly emails: Maybe<ReadonlyArray<Github_UserEmailMetadata>>;
  readonly familyName: Maybe<Scalars['String']>;
  readonly givenName: Maybe<Scalars['String']>;
  readonly groups: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly username: Maybe<Scalars['String']>;
};

type Github_FollowerConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_FollowingConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_FollowUserInput = {
  readonly userId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_FollowUserPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly user: Maybe<Github_User>;
};

type Github_FundingLink = {
  readonly platform: Github_FundingPlatform;
  readonly url: Scalars['Github_URI'];
};

enum Github_FundingPlatform {
  GITHUB = 'GITHUB',
  PATREON = 'PATREON',
  OPEN_COLLECTIVE = 'OPEN_COLLECTIVE',
  KO_FI = 'KO_FI',
  TIDELIFT = 'TIDELIFT',
  COMMUNITY_BRIDGE = 'COMMUNITY_BRIDGE',
  LIBERAPAY = 'LIBERAPAY',
  ISSUEHUNT = 'ISSUEHUNT',
  OTECHIE = 'OTECHIE',
  CUSTOM = 'CUSTOM'
}

type Github_GenericHovercardContext = Github_HovercardContext & {
  readonly message: Scalars['String'];
  readonly octicon: Scalars['String'];
};

type Github_Gist = Github_Node & Github_Starrable & Github_UniformResourceLocatable & {
  readonly comments: Github_GistCommentConnection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly description: Maybe<Scalars['String']>;
  readonly files: Maybe<ReadonlyArray<Maybe<Github_GistFile>>>;
  readonly forks: Github_GistConnection;
  readonly id: Scalars['ID'];
  readonly isFork: Scalars['Boolean'];
  readonly isPublic: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly owner: Maybe<Github_RepositoryOwner>;
  readonly pushedAt: Maybe<Scalars['Github_DateTime']>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly stargazers: Github_StargazerConnection;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly viewerHasStarred: Scalars['Boolean'];
};


type Github_Gist_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Gist_filesArgs = {
  limit?: Maybe<Scalars['Int']>;
  oid: Maybe<Scalars['Github_GitObjectID']>;
};


type Github_Gist_forksArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_GistOrder>;
};


type Github_Gist_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};

type Github_GistComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly editor: Maybe<Github_Actor>;
  readonly gist: Github_Gist;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly isMinimized: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly minimizedReason: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanMinimize: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_GistComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_GistCommentConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_GistCommentEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_GistComment>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_GistCommentEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_GistComment>;
};

type Github_GistConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_GistEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Gist>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_GistEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Gist>;
};

type Github_GistFile = {
  readonly encodedName: Maybe<Scalars['String']>;
  readonly encoding: Maybe<Scalars['String']>;
  readonly extension: Maybe<Scalars['String']>;
  readonly isImage: Scalars['Boolean'];
  readonly isTruncated: Scalars['Boolean'];
  readonly language: Maybe<Github_Language>;
  readonly name: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly text: Maybe<Scalars['String']>;
};


type Github_GistFile_textArgs = {
  truncate: Maybe<Scalars['Int']>;
};

type Github_GistOrder = {
  readonly field: Github_GistOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_GistOrderField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  PUSHED_AT = 'PUSHED_AT'
}

enum Github_GistPrivacy {
  PUBLIC = 'PUBLIC',
  SECRET = 'SECRET',
  ALL = 'ALL'
}

type Github_GitActor = {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly date: Maybe<Scalars['Github_GitTimestamp']>;
  readonly email: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly user: Maybe<Github_User>;
};


type Github_GitActor_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

type Github_GitHubMetadata = {
  readonly gitHubServicesSha: Scalars['Github_GitObjectID'];
  readonly gitIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly hookIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly importerIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly isPasswordAuthenticationVerifiable: Scalars['Boolean'];
  readonly pagesIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
};

type Github_GitObject = {
  readonly abbreviatedOid: Scalars['String'];
  readonly commitResourcePath: Scalars['Github_URI'];
  readonly commitUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly repository: Github_Repository;
};


type Github_GitSignature = {
  readonly email: Scalars['String'];
  readonly isValid: Scalars['Boolean'];
  readonly payload: Scalars['String'];
  readonly signature: Scalars['String'];
  readonly signer: Maybe<Github_User>;
  readonly state: Github_GitSignatureState;
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

enum Github_GitSignatureState {
  VALID = 'VALID',
  INVALID = 'INVALID',
  MALFORMED_SIG = 'MALFORMED_SIG',
  UNKNOWN_KEY = 'UNKNOWN_KEY',
  BAD_EMAIL = 'BAD_EMAIL',
  UNVERIFIED_EMAIL = 'UNVERIFIED_EMAIL',
  NO_USER = 'NO_USER',
  UNKNOWN_SIG_TYPE = 'UNKNOWN_SIG_TYPE',
  UNSIGNED = 'UNSIGNED',
  GPGVERIFY_UNAVAILABLE = 'GPGVERIFY_UNAVAILABLE',
  GPGVERIFY_ERROR = 'GPGVERIFY_ERROR',
  NOT_SIGNING_KEY = 'NOT_SIGNING_KEY',
  EXPIRED_KEY = 'EXPIRED_KEY',
  OCSP_PENDING = 'OCSP_PENDING',
  OCSP_ERROR = 'OCSP_ERROR',
  BAD_CERT = 'BAD_CERT',
  OCSP_REVOKED = 'OCSP_REVOKED'
}



type Github_GpgSignature = Github_GitSignature & {
  readonly email: Scalars['String'];
  readonly isValid: Scalars['Boolean'];
  readonly keyId: Maybe<Scalars['String']>;
  readonly payload: Scalars['String'];
  readonly signature: Scalars['String'];
  readonly signer: Maybe<Github_User>;
  readonly state: Github_GitSignatureState;
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

type Github_HeadRefDeletedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly headRef: Maybe<Github_Ref>;
  readonly headRefName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
};

type Github_HeadRefForcePushedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly afterCommit: Maybe<Github_Commit>;
  readonly beforeCommit: Maybe<Github_Commit>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly ref: Maybe<Github_Ref>;
};

type Github_HeadRefRestoredEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
};

type Github_Hovercard = {
  readonly contexts: ReadonlyArray<Github_HovercardContext>;
};

type Github_HovercardContext = {
  readonly message: Scalars['String'];
  readonly octicon: Scalars['String'];
};


enum Github_IdentityProviderConfigurationState {
  ENFORCED = 'ENFORCED',
  CONFIGURED = 'CONFIGURED',
  UNCONFIGURED = 'UNCONFIGURED'
}

type Github_InviteEnterpriseAdminInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly invitee: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly role: Maybe<Github_EnterpriseAdministratorRole>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_InviteEnterpriseAdminPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly invitation: Maybe<Github_EnterpriseAdministratorInvitation>;
};

enum Github_IpAllowListEnabledSettingValue {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED'
}

type Github_IpAllowListEntry = Github_Node & {
  readonly allowListValue: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly isActive: Scalars['Boolean'];
  readonly name: Maybe<Scalars['String']>;
  readonly owner: Github_IpAllowListOwner;
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_IpAllowListEntryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IpAllowListEntryEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IpAllowListEntry>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_IpAllowListEntryEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_IpAllowListEntry>;
};

type Github_IpAllowListEntryOrder = {
  readonly field: Github_IpAllowListEntryOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_IpAllowListEntryOrderField {
  CREATED_AT = 'CREATED_AT',
  ALLOW_LIST_VALUE = 'ALLOW_LIST_VALUE'
}

type Github_IpAllowListOwner = Github_Enterprise | Github_Organization;

type Github_Issue = Github_Node & Github_Assignable & Github_Closable & Github_Comment & Github_Updatable & Github_UpdatableComment & Github_Labelable & Github_Lockable & Github_Reactable & Github_RepositoryNode & Github_Subscribable & Github_UniformResourceLocatable & {
  readonly activeLockReason: Maybe<Github_LockReason>;
  readonly assignees: Github_UserConnection;
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly closed: Scalars['Boolean'];
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  readonly comments: Github_IssueCommentConnection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly editor: Maybe<Github_Actor>;
  readonly hovercard: Github_Hovercard;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly labels: Maybe<Github_LabelConnection>;
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly locked: Scalars['Boolean'];
  readonly milestone: Maybe<Github_Milestone>;
  readonly number: Scalars['Int'];
  readonly participants: Github_UserConnection;
  readonly projectCards: Github_ProjectCardConnection;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly state: Github_IssueState;
  /** @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2020-10-01 UTC. */
  readonly timeline: Github_IssueTimelineConnection;
  readonly timelineItems: Github_IssueTimelineItemsConnection;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
  readonly customHTML: Maybe<Scalars['String']>;
};


type Github_Issue_assigneesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Issue_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Issue_hovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


type Github_Issue_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Issue_participantsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Issue_projectCardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};


type Github_Issue_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_Issue_timelineArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Issue_timelineItemsArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  skip: Maybe<Scalars['Int']>;
  itemTypes: Maybe<ReadonlyArray<Github_IssueTimelineItemsItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Issue_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_IssueComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly isMinimized: Scalars['Boolean'];
  readonly issue: Github_Issue;
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly minimizedReason: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanMinimize: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_IssueComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_IssueComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_IssueCommentConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueCommentEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IssueComment>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_IssueCommentEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_IssueComment>;
};

type Github_IssueConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Issue>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_IssueContributionsByRepository = {
  readonly contributions: Github_CreatedIssueContributionConnection;
  readonly repository: Github_Repository;
};


type Github_IssueContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};

type Github_IssueEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Issue>;
};

type Github_IssueFilters = {
  readonly assignee: Maybe<Scalars['String']>;
  readonly createdBy: Maybe<Scalars['String']>;
  readonly labels: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mentioned: Maybe<Scalars['String']>;
  readonly milestone: Maybe<Scalars['String']>;
  readonly since: Maybe<Scalars['Github_DateTime']>;
  readonly states: Maybe<ReadonlyArray<Github_IssueState>>;
  readonly viewerSubscribed: Maybe<Scalars['Boolean']>;
};

type Github_IssueOrder = {
  readonly field: Github_IssueOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_IssueOrderField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  COMMENTS = 'COMMENTS'
}

type Github_IssueOrPullRequest = Github_Issue | Github_PullRequest;

enum Github_IssueState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

type Github_IssueTimelineConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItemEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItem>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_IssueTimelineItem = Github_AssignedEvent | Github_ClosedEvent | Github_Commit | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MilestonedEvent | Github_ReferencedEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

type Github_IssueTimelineItemEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_IssueTimelineItem>;
};

type Github_IssueTimelineItems = Github_AddedToProjectEvent | Github_AssignedEvent | Github_ClosedEvent | Github_CommentDeletedEvent | Github_ConnectedEvent | Github_ConvertedNoteToIssueEvent | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DisconnectedEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MarkedAsDuplicateEvent | Github_MentionedEvent | Github_MilestonedEvent | Github_MovedColumnsInProjectEvent | Github_PinnedEvent | Github_ReferencedEvent | Github_RemovedFromProjectEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnmarkedAsDuplicateEvent | Github_UnpinnedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

type Github_IssueTimelineItemsConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItemsEdge>>>;
  readonly filteredCount: Scalars['Int'];
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItems>>>;
  readonly pageCount: Scalars['Int'];
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_IssueTimelineItemsEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_IssueTimelineItems>;
};

enum Github_IssueTimelineItemsItemType {
  ISSUE_COMMENT = 'ISSUE_COMMENT',
  CROSS_REFERENCED_EVENT = 'CROSS_REFERENCED_EVENT',
  ADDED_TO_PROJECT_EVENT = 'ADDED_TO_PROJECT_EVENT',
  ASSIGNED_EVENT = 'ASSIGNED_EVENT',
  CLOSED_EVENT = 'CLOSED_EVENT',
  COMMENT_DELETED_EVENT = 'COMMENT_DELETED_EVENT',
  CONNECTED_EVENT = 'CONNECTED_EVENT',
  CONVERTED_NOTE_TO_ISSUE_EVENT = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DEMILESTONED_EVENT = 'DEMILESTONED_EVENT',
  DISCONNECTED_EVENT = 'DISCONNECTED_EVENT',
  LABELED_EVENT = 'LABELED_EVENT',
  LOCKED_EVENT = 'LOCKED_EVENT',
  MARKED_AS_DUPLICATE_EVENT = 'MARKED_AS_DUPLICATE_EVENT',
  MENTIONED_EVENT = 'MENTIONED_EVENT',
  MILESTONED_EVENT = 'MILESTONED_EVENT',
  MOVED_COLUMNS_IN_PROJECT_EVENT = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PINNED_EVENT = 'PINNED_EVENT',
  REFERENCED_EVENT = 'REFERENCED_EVENT',
  REMOVED_FROM_PROJECT_EVENT = 'REMOVED_FROM_PROJECT_EVENT',
  RENAMED_TITLE_EVENT = 'RENAMED_TITLE_EVENT',
  REOPENED_EVENT = 'REOPENED_EVENT',
  SUBSCRIBED_EVENT = 'SUBSCRIBED_EVENT',
  TRANSFERRED_EVENT = 'TRANSFERRED_EVENT',
  UNASSIGNED_EVENT = 'UNASSIGNED_EVENT',
  UNLABELED_EVENT = 'UNLABELED_EVENT',
  UNLOCKED_EVENT = 'UNLOCKED_EVENT',
  USER_BLOCKED_EVENT = 'USER_BLOCKED_EVENT',
  UNMARKED_AS_DUPLICATE_EVENT = 'UNMARKED_AS_DUPLICATE_EVENT',
  UNPINNED_EVENT = 'UNPINNED_EVENT',
  UNSUBSCRIBED_EVENT = 'UNSUBSCRIBED_EVENT'
}

type Github_JoinedGitHubContribution = Github_Contribution & {
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_Label = Github_Node & {
  readonly color: Scalars['String'];
  readonly createdAt: Maybe<Scalars['Github_DateTime']>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly isDefault: Scalars['Boolean'];
  readonly issues: Github_IssueConnection;
  readonly name: Scalars['String'];
  readonly pullRequests: Github_PullRequestConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Maybe<Scalars['Github_DateTime']>;
  readonly url: Scalars['Github_URI'];
};


type Github_Label_issuesArgs = {
  orderBy: Maybe<Github_IssueOrder>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  states: Maybe<ReadonlyArray<Github_IssueState>>;
  filterBy: Maybe<Github_IssueFilters>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Label_pullRequestsArgs = {
  states: Maybe<ReadonlyArray<Github_PullRequestState>>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  headRefName: Maybe<Scalars['String']>;
  baseRefName: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_IssueOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_Labelable = {
  readonly labels: Maybe<Github_LabelConnection>;
};


type Github_Labelable_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_LabelConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_LabelEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Label>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_LabeledEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly label: Github_Label;
  readonly labelable: Github_Labelable;
};

type Github_LabelEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Label>;
};

type Github_LabelOrder = {
  readonly field: Github_LabelOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_LabelOrderField {
  NAME = 'NAME',
  CREATED_AT = 'CREATED_AT'
}

type Github_Language = Github_Node & {
  readonly color: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
};

type Github_LanguageConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_LanguageEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Language>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
  readonly totalSize: Scalars['Int'];
};

type Github_LanguageEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_Language;
  readonly size: Scalars['Int'];
};

type Github_LanguageOrder = {
  readonly field: Github_LanguageOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_LanguageOrderField {
  SIZE = 'SIZE'
}

type Github_License = Github_Node & {
  readonly body: Scalars['String'];
  readonly conditions: ReadonlyArray<Maybe<Github_LicenseRule>>;
  readonly description: Maybe<Scalars['String']>;
  readonly featured: Scalars['Boolean'];
  readonly hidden: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  readonly implementation: Maybe<Scalars['String']>;
  readonly key: Scalars['String'];
  readonly limitations: ReadonlyArray<Maybe<Github_LicenseRule>>;
  readonly name: Scalars['String'];
  readonly nickname: Maybe<Scalars['String']>;
  readonly permissions: ReadonlyArray<Maybe<Github_LicenseRule>>;
  readonly pseudoLicense: Scalars['Boolean'];
  readonly spdxId: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['Github_URI']>;
};

type Github_LicenseRule = {
  readonly description: Scalars['String'];
  readonly key: Scalars['String'];
  readonly label: Scalars['String'];
};

type Github_LinkRepositoryToProjectInput = {
  readonly projectId: Scalars['ID'];
  readonly repositoryId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_LinkRepositoryToProjectPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly project: Maybe<Github_Project>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_Lockable = {
  readonly activeLockReason: Maybe<Github_LockReason>;
  readonly locked: Scalars['Boolean'];
};

type Github_LockedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly lockReason: Maybe<Github_LockReason>;
  readonly lockable: Github_Lockable;
};

type Github_LockLockableInput = {
  readonly lockableId: Scalars['ID'];
  readonly lockReason: Maybe<Github_LockReason>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_LockLockablePayload = {
  readonly actor: Maybe<Github_Actor>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly lockedRecord: Maybe<Github_Lockable>;
};

enum Github_LockReason {
  OFF_TOPIC = 'OFF_TOPIC',
  TOO_HEATED = 'TOO_HEATED',
  RESOLVED = 'RESOLVED',
  SPAM = 'SPAM'
}

type Github_Mannequin = Github_Node & Github_Actor & Github_UniformResourceLocatable & {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};


type Github_Mannequin_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

type Github_MarkedAsDuplicateEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
};

type Github_MarketplaceCategory = Github_Node & {
  readonly description: Maybe<Scalars['String']>;
  readonly howItWorks: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly primaryListingCount: Scalars['Int'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly secondaryListingCount: Scalars['Int'];
  readonly slug: Scalars['String'];
  readonly url: Scalars['Github_URI'];
};

type Github_MarketplaceListing = Github_Node & {
  readonly app: Maybe<Github_App>;
  readonly companyUrl: Maybe<Scalars['Github_URI']>;
  readonly configurationResourcePath: Scalars['Github_URI'];
  readonly configurationUrl: Scalars['Github_URI'];
  readonly documentationUrl: Maybe<Scalars['Github_URI']>;
  readonly extendedDescription: Maybe<Scalars['String']>;
  readonly extendedDescriptionHTML: Scalars['Github_HTML'];
  readonly fullDescription: Scalars['String'];
  readonly fullDescriptionHTML: Scalars['Github_HTML'];
  readonly hasPublishedFreeTrialPlans: Scalars['Boolean'];
  readonly hasTermsOfService: Scalars['Boolean'];
  readonly howItWorks: Maybe<Scalars['String']>;
  readonly howItWorksHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  readonly installationUrl: Maybe<Scalars['Github_URI']>;
  readonly installedForViewer: Scalars['Boolean'];
  readonly isArchived: Scalars['Boolean'];
  readonly isDraft: Scalars['Boolean'];
  readonly isPaid: Scalars['Boolean'];
  readonly isPublic: Scalars['Boolean'];
  readonly isRejected: Scalars['Boolean'];
  readonly isUnverified: Scalars['Boolean'];
  readonly isUnverifiedPending: Scalars['Boolean'];
  readonly isVerificationPendingFromDraft: Scalars['Boolean'];
  readonly isVerificationPendingFromUnverified: Scalars['Boolean'];
  readonly isVerified: Scalars['Boolean'];
  readonly logoBackgroundColor: Scalars['String'];
  readonly logoUrl: Maybe<Scalars['Github_URI']>;
  readonly name: Scalars['String'];
  readonly normalizedShortDescription: Scalars['String'];
  readonly pricingUrl: Maybe<Scalars['Github_URI']>;
  readonly primaryCategory: Github_MarketplaceCategory;
  readonly privacyPolicyUrl: Scalars['Github_URI'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly screenshotUrls: ReadonlyArray<Maybe<Scalars['String']>>;
  readonly secondaryCategory: Maybe<Github_MarketplaceCategory>;
  readonly shortDescription: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly statusUrl: Maybe<Scalars['Github_URI']>;
  readonly supportEmail: Maybe<Scalars['String']>;
  readonly supportUrl: Scalars['Github_URI'];
  readonly termsOfServiceUrl: Maybe<Scalars['Github_URI']>;
  readonly url: Scalars['Github_URI'];
  readonly viewerCanAddPlans: Scalars['Boolean'];
  readonly viewerCanApprove: Scalars['Boolean'];
  readonly viewerCanDelist: Scalars['Boolean'];
  readonly viewerCanEdit: Scalars['Boolean'];
  readonly viewerCanEditCategories: Scalars['Boolean'];
  readonly viewerCanEditPlans: Scalars['Boolean'];
  readonly viewerCanRedraft: Scalars['Boolean'];
  readonly viewerCanReject: Scalars['Boolean'];
  readonly viewerCanRequestApproval: Scalars['Boolean'];
  readonly viewerHasPurchased: Scalars['Boolean'];
  readonly viewerHasPurchasedForAllOrganizations: Scalars['Boolean'];
  readonly viewerIsListingAdmin: Scalars['Boolean'];
};


type Github_MarketplaceListing_logoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

type Github_MarketplaceListingConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_MarketplaceListingEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_MarketplaceListing>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_MarketplaceListingEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_MarketplaceListing>;
};

type Github_MarkPullRequestReadyForReviewInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MarkPullRequestReadyForReviewPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
};

type Github_MembersCanDeleteReposClearAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_MembersCanDeleteReposDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_MembersCanDeleteReposEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_MemberStatusable = {
  readonly memberStatuses: Github_UserStatusConnection;
};


type Github_MemberStatusable_memberStatusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_UserStatusOrder>;
};

type Github_MentionedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

enum Github_MergeableState {
  MERGEABLE = 'MERGEABLE',
  CONFLICTING = 'CONFLICTING',
  UNKNOWN = 'UNKNOWN'
}

type Github_MergeBranchInput = {
  readonly repositoryId: Scalars['ID'];
  readonly base: Scalars['String'];
  readonly head: Scalars['String'];
  readonly commitMessage: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MergeBranchPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly mergeCommit: Maybe<Github_Commit>;
};

type Github_MergedEvent = Github_Node & Github_UniformResourceLocatable & {
  readonly actor: Maybe<Github_Actor>;
  readonly commit: Maybe<Github_Commit>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly mergeRef: Maybe<Github_Ref>;
  readonly mergeRefName: Scalars['String'];
  readonly pullRequest: Github_PullRequest;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};

type Github_MergePullRequestInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly commitHeadline: Maybe<Scalars['String']>;
  readonly commitBody: Maybe<Scalars['String']>;
  readonly expectedHeadOid: Maybe<Scalars['Github_GitObjectID']>;
  readonly mergeMethod: Maybe<Github_PullRequestMergeMethod>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MergePullRequestPayload = {
  readonly actor: Maybe<Github_Actor>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
};

type Github_Milestone = Github_Node & Github_Closable & Github_UniformResourceLocatable & {
  readonly closed: Scalars['Boolean'];
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly creator: Maybe<Github_Actor>;
  readonly description: Maybe<Scalars['String']>;
  readonly dueOn: Maybe<Scalars['Github_DateTime']>;
  readonly id: Scalars['ID'];
  readonly issuePrioritiesDebug: Scalars['String'];
  readonly issues: Github_IssueConnection;
  readonly number: Scalars['Int'];
  readonly pullRequests: Github_PullRequestConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly state: Github_MilestoneState;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};


type Github_Milestone_issuesArgs = {
  orderBy: Maybe<Github_IssueOrder>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  states: Maybe<ReadonlyArray<Github_IssueState>>;
  filterBy: Maybe<Github_IssueFilters>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Milestone_pullRequestsArgs = {
  states: Maybe<ReadonlyArray<Github_PullRequestState>>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  headRefName: Maybe<Scalars['String']>;
  baseRefName: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_IssueOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_MilestoneConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_MilestoneEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Milestone>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_MilestonedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly milestoneTitle: Scalars['String'];
  readonly subject: Github_MilestoneItem;
};

type Github_MilestoneEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Milestone>;
};

type Github_MilestoneItem = Github_Issue | Github_PullRequest;

type Github_MilestoneOrder = {
  readonly field: Github_MilestoneOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_MilestoneOrderField {
  DUE_DATE = 'DUE_DATE',
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  NUMBER = 'NUMBER'
}

enum Github_MilestoneState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

type Github_Minimizable = {
  readonly isMinimized: Scalars['Boolean'];
  readonly minimizedReason: Maybe<Scalars['String']>;
  readonly viewerCanMinimize: Scalars['Boolean'];
};

type Github_MinimizeCommentInput = {
  readonly subjectId: Scalars['ID'];
  readonly classifier: Github_ReportedContentClassifiers;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MinimizeCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly minimizedComment: Maybe<Github_Minimizable>;
};

type Github_MovedColumnsInProjectEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

type Github_MoveProjectCardInput = {
  readonly cardId: Scalars['ID'];
  readonly columnId: Scalars['ID'];
  readonly afterCardId: Maybe<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MoveProjectCardPayload = {
  readonly cardEdge: Maybe<Github_ProjectCardEdge>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MoveProjectColumnInput = {
  readonly columnId: Scalars['ID'];
  readonly afterColumnId: Maybe<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_MoveProjectColumnPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly columnEdge: Maybe<Github_ProjectColumnEdge>;
};

type Github_Node = {
  readonly id: Scalars['ID'];
};

type Github_OauthApplicationAuditEntryData = {
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OauthApplicationCreateAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly applicationUrl: Maybe<Scalars['Github_URI']>;
  readonly callbackUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly rateLimit: Maybe<Scalars['Int']>;
  readonly state: Maybe<Github_OauthApplicationCreateAuditEntryState>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OauthApplicationCreateAuditEntryState {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING_DELETION = 'PENDING_DELETION'
}

enum Github_OperationType {
  ACCESS = 'ACCESS',
  AUTHENTICATION = 'AUTHENTICATION',
  CREATE = 'CREATE',
  MODIFY = 'MODIFY',
  REMOVE = 'REMOVE',
  RESTORE = 'RESTORE',
  TRANSFER = 'TRANSFER'
}

enum Github_OrderDirection {
  ASC = 'ASC',
  DESC = 'DESC'
}

type Github_OrgAddBillingManagerAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly invitationEmail: Maybe<Scalars['String']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly permission: Maybe<Github_OrgAddMemberAuditEntryPermission>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgAddMemberAuditEntryPermission {
  READ = 'READ',
  ADMIN = 'ADMIN'
}

type Github_Organization = Github_Node & Github_Actor & Github_PackageOwner & Github_ProjectOwner & Github_RepositoryOwner & Github_UniformResourceLocatable & Github_MemberStatusable & Github_ProfileOwner & Github_Sponsorable & {
  readonly anyPinnableItems: Scalars['Boolean'];
  readonly auditLog: Github_OrganizationAuditEntryConnection;
  readonly avatarUrl: Scalars['Github_URI'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHTML: Maybe<Scalars['String']>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly ipAllowListEnabledSetting: Github_IpAllowListEnabledSettingValue;
  readonly ipAllowListEntries: Github_IpAllowListEntryConnection;
  readonly isVerified: Scalars['Boolean'];
  readonly itemShowcase: Github_ProfileItemShowcase;
  readonly location: Maybe<Scalars['String']>;
  readonly login: Scalars['String'];
  readonly memberStatuses: Github_UserStatusConnection;
  readonly membersWithRole: Github_OrganizationMemberConnection;
  readonly name: Maybe<Scalars['String']>;
  readonly newTeamResourcePath: Scalars['Github_URI'];
  readonly newTeamUrl: Scalars['Github_URI'];
  readonly organizationBillingEmail: Maybe<Scalars['String']>;
  readonly packages: Github_PackageConnection;
  readonly pendingMembers: Github_UserConnection;
  readonly pinnableItems: Github_PinnableItemConnection;
  readonly pinnedItems: Github_PinnableItemConnection;
  readonly pinnedItemsRemaining: Scalars['Int'];
  readonly project: Maybe<Github_Project>;
  readonly projects: Github_ProjectConnection;
  readonly projectsResourcePath: Scalars['Github_URI'];
  readonly projectsUrl: Scalars['Github_URI'];
  readonly repositories: Github_RepositoryConnection;
  readonly repository: Maybe<Github_Repository>;
  readonly requiresTwoFactorAuthentication: Maybe<Scalars['Boolean']>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly samlIdentityProvider: Maybe<Github_OrganizationIdentityProvider>;
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  readonly sponsorshipsAsMaintainer: Github_SponsorshipConnection;
  readonly sponsorshipsAsSponsor: Github_SponsorshipConnection;
  readonly team: Maybe<Github_Team>;
  readonly teams: Github_TeamConnection;
  readonly teamsResourcePath: Scalars['Github_URI'];
  readonly teamsUrl: Scalars['Github_URI'];
  readonly twitterUsername: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly viewerCanAdminister: Scalars['Boolean'];
  readonly viewerCanChangePinnedItems: Scalars['Boolean'];
  readonly viewerCanCreateProjects: Scalars['Boolean'];
  readonly viewerCanCreateRepositories: Scalars['Boolean'];
  readonly viewerCanCreateTeams: Scalars['Boolean'];
  readonly viewerIsAMember: Scalars['Boolean'];
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


type Github_Organization_anyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>;
};


type Github_Organization_auditLogArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_AuditLogOrder>;
};


type Github_Organization_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


type Github_Organization_ipAllowListEntriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_IpAllowListEntryOrder>;
};


type Github_Organization_memberStatusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_UserStatusOrder>;
};


type Github_Organization_membersWithRoleArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Organization_packagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  names: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  repositoryId: Maybe<Scalars['ID']>;
  packageType: Maybe<Github_PackageType>;
  orderBy?: Maybe<Github_PackageOrder>;
};


type Github_Organization_pendingMembersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Organization_pinnableItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Organization_pinnedItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Organization_projectArgs = {
  number: Scalars['Int'];
};


type Github_Organization_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Organization_repositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>;
  orderBy: Maybe<Github_RepositoryOrder>;
  affiliations: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  isLocked: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  isFork: Maybe<Scalars['Boolean']>;
};


type Github_Organization_repositoryArgs = {
  name: Scalars['String'];
};


type Github_Organization_sponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


type Github_Organization_sponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


type Github_Organization_teamArgs = {
  slug: Scalars['String'];
};


type Github_Organization_teamsArgs = {
  privacy: Maybe<Github_TeamPrivacy>;
  role: Maybe<Github_TeamRole>;
  query: Maybe<Scalars['String']>;
  userLogins: Maybe<ReadonlyArray<Scalars['String']>>;
  orderBy: Maybe<Github_TeamOrder>;
  ldapMapped: Maybe<Scalars['Boolean']>;
  rootTeamsOnly?: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_OrganizationAuditEntry = Github_MembersCanDeleteReposClearAuditEntry | Github_MembersCanDeleteReposDisableAuditEntry | Github_MembersCanDeleteReposEnableAuditEntry | Github_OauthApplicationCreateAuditEntry | Github_OrgAddBillingManagerAuditEntry | Github_OrgAddMemberAuditEntry | Github_OrgBlockUserAuditEntry | Github_OrgConfigDisableCollaboratorsOnlyAuditEntry | Github_OrgConfigEnableCollaboratorsOnlyAuditEntry | Github_OrgCreateAuditEntry | Github_OrgDisableOauthAppRestrictionsAuditEntry | Github_OrgDisableSamlAuditEntry | Github_OrgDisableTwoFactorRequirementAuditEntry | Github_OrgEnableOauthAppRestrictionsAuditEntry | Github_OrgEnableSamlAuditEntry | Github_OrgEnableTwoFactorRequirementAuditEntry | Github_OrgInviteMemberAuditEntry | Github_OrgInviteToBusinessAuditEntry | Github_OrgOauthAppAccessApprovedAuditEntry | Github_OrgOauthAppAccessDeniedAuditEntry | Github_OrgOauthAppAccessRequestedAuditEntry | Github_OrgRemoveBillingManagerAuditEntry | Github_OrgRemoveMemberAuditEntry | Github_OrgRemoveOutsideCollaboratorAuditEntry | Github_OrgRestoreMemberAuditEntry | Github_OrgUnblockUserAuditEntry | Github_OrgUpdateDefaultRepositoryPermissionAuditEntry | Github_OrgUpdateMemberAuditEntry | Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry | Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | Github_PrivateRepositoryForkingDisableAuditEntry | Github_PrivateRepositoryForkingEnableAuditEntry | Github_RepoAccessAuditEntry | Github_RepoAddMemberAuditEntry | Github_RepoAddTopicAuditEntry | Github_RepoArchivedAuditEntry | Github_RepoChangeMergeSettingAuditEntry | Github_RepoConfigDisableAnonymousGitAccessAuditEntry | Github_RepoConfigDisableCollaboratorsOnlyAuditEntry | Github_RepoConfigDisableContributorsOnlyAuditEntry | Github_RepoConfigDisableSockpuppetDisallowedAuditEntry | Github_RepoConfigEnableAnonymousGitAccessAuditEntry | Github_RepoConfigEnableCollaboratorsOnlyAuditEntry | Github_RepoConfigEnableContributorsOnlyAuditEntry | Github_RepoConfigEnableSockpuppetDisallowedAuditEntry | Github_RepoConfigLockAnonymousGitAccessAuditEntry | Github_RepoConfigUnlockAnonymousGitAccessAuditEntry | Github_RepoCreateAuditEntry | Github_RepoDestroyAuditEntry | Github_RepoRemoveMemberAuditEntry | Github_RepoRemoveTopicAuditEntry | Github_RepositoryVisibilityChangeDisableAuditEntry | Github_RepositoryVisibilityChangeEnableAuditEntry | Github_TeamAddMemberAuditEntry | Github_TeamAddRepositoryAuditEntry | Github_TeamChangeParentTeamAuditEntry | Github_TeamRemoveMemberAuditEntry | Github_TeamRemoveRepositoryAuditEntry;

type Github_OrganizationAuditEntryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationAuditEntryEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_OrganizationAuditEntry>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_OrganizationAuditEntryData = {
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrganizationAuditEntryEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_OrganizationAuditEntry>;
};

type Github_OrganizationConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Organization>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_OrganizationEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Organization>;
};

type Github_OrganizationIdentityProvider = Github_Node & {
  readonly digestMethod: Maybe<Scalars['Github_URI']>;
  readonly externalIdentities: Github_ExternalIdentityConnection;
  readonly id: Scalars['ID'];
  readonly idpCertificate: Maybe<Scalars['Github_X509Certificate']>;
  readonly issuer: Maybe<Scalars['String']>;
  readonly organization: Maybe<Github_Organization>;
  readonly signatureMethod: Maybe<Scalars['Github_URI']>;
  readonly ssoUrl: Maybe<Scalars['Github_URI']>;
};


type Github_OrganizationIdentityProvider_externalIdentitiesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_OrganizationInvitation = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly invitationType: Github_OrganizationInvitationType;
  readonly invitee: Maybe<Github_User>;
  readonly inviter: Github_User;
  readonly organization: Github_Organization;
  readonly role: Github_OrganizationInvitationRole;
};

type Github_OrganizationInvitationConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationInvitationEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_OrganizationInvitation>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_OrganizationInvitationEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_OrganizationInvitation>;
};

enum Github_OrganizationInvitationRole {
  DIRECT_MEMBER = 'DIRECT_MEMBER',
  ADMIN = 'ADMIN',
  BILLING_MANAGER = 'BILLING_MANAGER',
  REINSTATE = 'REINSTATE'
}

enum Github_OrganizationInvitationType {
  USER = 'USER',
  EMAIL = 'EMAIL'
}

type Github_OrganizationMemberConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationMemberEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_OrganizationMemberEdge = {
  readonly cursor: Scalars['String'];
  readonly hasTwoFactorEnabled: Maybe<Scalars['Boolean']>;
  readonly node: Maybe<Github_User>;
  readonly role: Maybe<Github_OrganizationMemberRole>;
};

enum Github_OrganizationMemberRole {
  MEMBER = 'MEMBER',
  ADMIN = 'ADMIN'
}

enum Github_OrganizationMembersCanCreateRepositoriesSettingValue {
  ALL = 'ALL',
  PRIVATE = 'PRIVATE',
  DISABLED = 'DISABLED'
}

type Github_OrganizationOrder = {
  readonly field: Github_OrganizationOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_OrganizationOrderField {
  CREATED_AT = 'CREATED_AT',
  LOGIN = 'LOGIN'
}

type Github_OrganizationsHovercardContext = Github_HovercardContext & {
  readonly message: Scalars['String'];
  readonly octicon: Scalars['String'];
  readonly relevantOrganizations: Github_OrganizationConnection;
  readonly totalOrganizationCount: Scalars['Int'];
};


type Github_OrganizationsHovercardContext_relevantOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_OrganizationTeamsHovercardContext = Github_HovercardContext & {
  readonly message: Scalars['String'];
  readonly octicon: Scalars['String'];
  readonly relevantTeams: Github_TeamConnection;
  readonly teamsResourcePath: Scalars['Github_URI'];
  readonly teamsUrl: Scalars['Github_URI'];
  readonly totalTeamCount: Scalars['Int'];
};


type Github_OrganizationTeamsHovercardContext_relevantTeamsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_OrgBlockUserAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly blockedUser: Maybe<Github_User>;
  readonly blockedUserName: Maybe<Scalars['String']>;
  readonly blockedUserResourcePath: Maybe<Scalars['Github_URI']>;
  readonly blockedUserUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgConfigDisableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgConfigEnableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgCreateAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly billingPlan: Maybe<Github_OrgCreateAuditEntryBillingPlan>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgCreateAuditEntryBillingPlan {
  FREE = 'FREE',
  BUSINESS = 'BUSINESS',
  BUSINESS_PLUS = 'BUSINESS_PLUS',
  UNLIMITED = 'UNLIMITED',
  TIERED_PER_SEAT = 'TIERED_PER_SEAT'
}

type Github_OrgDisableOauthAppRestrictionsAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgDisableSamlAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly digestMethodUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly issuerUrl: Maybe<Scalars['Github_URI']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly signatureMethodUrl: Maybe<Scalars['Github_URI']>;
  readonly singleSignOnUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgDisableTwoFactorRequirementAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgEnableOauthAppRestrictionsAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgEnableSamlAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly digestMethodUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly issuerUrl: Maybe<Scalars['Github_URI']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly signatureMethodUrl: Maybe<Scalars['Github_URI']>;
  readonly singleSignOnUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgEnableTwoFactorRequirementAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgInviteMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationInvitation: Maybe<Github_OrganizationInvitation>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgInviteToBusinessAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgOauthAppAccessApprovedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgOauthAppAccessDeniedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgOauthAppAccessRequestedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgRemoveBillingManagerAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly reason: Maybe<Github_OrgRemoveBillingManagerAuditEntryReason>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgRemoveBillingManagerAuditEntryReason {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SAML_EXTERNAL_IDENTITY_MISSING = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

type Github_OrgRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly membershipTypes: Maybe<ReadonlyArray<Github_OrgRemoveMemberAuditEntryMembershipType>>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly reason: Maybe<Github_OrgRemoveMemberAuditEntryReason>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgRemoveMemberAuditEntryMembershipType {
  DIRECT_MEMBER = 'DIRECT_MEMBER',
  ADMIN = 'ADMIN',
  BILLING_MANAGER = 'BILLING_MANAGER',
  UNAFFILIATED = 'UNAFFILIATED',
  OUTSIDE_COLLABORATOR = 'OUTSIDE_COLLABORATOR'
}

enum Github_OrgRemoveMemberAuditEntryReason {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SAML_EXTERNAL_IDENTITY_MISSING = 'SAML_EXTERNAL_IDENTITY_MISSING',
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  USER_ACCOUNT_DELETED = 'USER_ACCOUNT_DELETED',
  TWO_FACTOR_ACCOUNT_RECOVERY = 'TWO_FACTOR_ACCOUNT_RECOVERY'
}

type Github_OrgRemoveOutsideCollaboratorAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly membershipTypes: Maybe<ReadonlyArray<Github_OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly reason: Maybe<Github_OrgRemoveOutsideCollaboratorAuditEntryReason>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  OUTSIDE_COLLABORATOR = 'OUTSIDE_COLLABORATOR',
  UNAFFILIATED = 'UNAFFILIATED',
  BILLING_MANAGER = 'BILLING_MANAGER'
}

enum Github_OrgRemoveOutsideCollaboratorAuditEntryReason {
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  SAML_EXTERNAL_IDENTITY_MISSING = 'SAML_EXTERNAL_IDENTITY_MISSING'
}

type Github_OrgRestoreMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly restoredCustomEmailRoutingsCount: Maybe<Scalars['Int']>;
  readonly restoredIssueAssignmentsCount: Maybe<Scalars['Int']>;
  readonly restoredMemberships: Maybe<ReadonlyArray<Github_OrgRestoreMemberAuditEntryMembership>>;
  readonly restoredMembershipsCount: Maybe<Scalars['Int']>;
  readonly restoredRepositoriesCount: Maybe<Scalars['Int']>;
  readonly restoredRepositoryStarsCount: Maybe<Scalars['Int']>;
  readonly restoredRepositoryWatchesCount: Maybe<Scalars['Int']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgRestoreMemberAuditEntryMembership = Github_OrgRestoreMemberMembershipOrganizationAuditEntryData | Github_OrgRestoreMemberMembershipRepositoryAuditEntryData | Github_OrgRestoreMemberMembershipTeamAuditEntryData;

type Github_OrgRestoreMemberMembershipOrganizationAuditEntryData = Github_OrganizationAuditEntryData & {
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgRestoreMemberMembershipRepositoryAuditEntryData = Github_RepositoryAuditEntryData & {
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgRestoreMemberMembershipTeamAuditEntryData = Github_TeamAuditEntryData & {
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgUnblockUserAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly blockedUser: Maybe<Github_User>;
  readonly blockedUserName: Maybe<Scalars['String']>;
  readonly blockedUserResourcePath: Maybe<Scalars['Github_URI']>;
  readonly blockedUserUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_OrgUpdateDefaultRepositoryPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly permission: Maybe<Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  readonly permissionWas: Maybe<Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  READ = 'READ',
  WRITE = 'WRITE',
  ADMIN = 'ADMIN',
  NONE = 'NONE'
}

type Github_OrgUpdateMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly permission: Maybe<Github_OrgUpdateMemberAuditEntryPermission>;
  readonly permissionWas: Maybe<Github_OrgUpdateMemberAuditEntryPermission>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_OrgUpdateMemberAuditEntryPermission {
  READ = 'READ',
  ADMIN = 'ADMIN'
}

type Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly canCreateRepositories: Maybe<Scalars['Boolean']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
};

enum Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  ALL = 'ALL',
  PUBLIC = 'PUBLIC',
  NONE = 'NONE',
  PRIVATE = 'PRIVATE',
  INTERNAL = 'INTERNAL',
  PUBLIC_INTERNAL = 'PUBLIC_INTERNAL',
  PRIVATE_INTERNAL = 'PRIVATE_INTERNAL',
  PUBLIC_PRIVATE = 'PUBLIC_PRIVATE'
}

type Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly canInviteOutsideCollaboratorsToRepositories: Maybe<Scalars['Boolean']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_Package = Github_Node & {
  readonly id: Scalars['ID'];
  readonly latestVersion: Maybe<Github_PackageVersion>;
  readonly name: Scalars['String'];
  readonly packageType: Github_PackageType;
  readonly repository: Maybe<Github_Repository>;
  readonly statistics: Maybe<Github_PackageStatistics>;
  readonly version: Maybe<Github_PackageVersion>;
  readonly versions: Github_PackageVersionConnection;
};


type Github_Package_versionArgs = {
  version: Scalars['String'];
};


type Github_Package_versionsArgs = {
  orderBy?: Maybe<Github_PackageVersionOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_PackageConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PackageEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Package>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PackageEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Package>;
};

type Github_PackageFile = Github_Node & {
  readonly id: Scalars['ID'];
  readonly md5: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly packageVersion: Maybe<Github_PackageVersion>;
  readonly sha1: Maybe<Scalars['String']>;
  readonly sha256: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Maybe<Scalars['Github_URI']>;
};

type Github_PackageFileConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PackageFileEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PackageFile>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PackageFileEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PackageFile>;
};

type Github_PackageFileOrder = {
  readonly field: Maybe<Github_PackageFileOrderField>;
  readonly direction: Maybe<Github_OrderDirection>;
};

enum Github_PackageFileOrderField {
  CREATED_AT = 'CREATED_AT'
}

type Github_PackageOrder = {
  readonly field: Maybe<Github_PackageOrderField>;
  readonly direction: Maybe<Github_OrderDirection>;
};

enum Github_PackageOrderField {
  CREATED_AT = 'CREATED_AT'
}

type Github_PackageOwner = {
  readonly id: Scalars['ID'];
  readonly packages: Github_PackageConnection;
};


type Github_PackageOwner_packagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  names: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  repositoryId: Maybe<Scalars['ID']>;
  packageType: Maybe<Github_PackageType>;
  orderBy?: Maybe<Github_PackageOrder>;
};

type Github_PackageStatistics = {
  readonly downloadsTotalCount: Scalars['Int'];
};

type Github_PackageTag = Github_Node & {
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly version: Maybe<Github_PackageVersion>;
};

enum Github_PackageType {
  NPM = 'NPM',
  RUBYGEMS = 'RUBYGEMS',
  MAVEN = 'MAVEN',
  DOCKER = 'DOCKER',
  DEBIAN = 'DEBIAN',
  NUGET = 'NUGET',
  PYPI = 'PYPI'
}

type Github_PackageVersion = Github_Node & {
  readonly files: Github_PackageFileConnection;
  readonly id: Scalars['ID'];
  readonly package: Maybe<Github_Package>;
  readonly platform: Maybe<Scalars['String']>;
  readonly preRelease: Scalars['Boolean'];
  readonly readme: Maybe<Scalars['String']>;
  readonly release: Maybe<Github_Release>;
  readonly statistics: Maybe<Github_PackageVersionStatistics>;
  readonly summary: Maybe<Scalars['String']>;
  readonly version: Scalars['String'];
};


type Github_PackageVersion_filesArgs = {
  orderBy?: Maybe<Github_PackageFileOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_PackageVersionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PackageVersionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PackageVersion>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PackageVersionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PackageVersion>;
};

type Github_PackageVersionOrder = {
  readonly field: Maybe<Github_PackageVersionOrderField>;
  readonly direction: Maybe<Github_OrderDirection>;
};

enum Github_PackageVersionOrderField {
  CREATED_AT = 'CREATED_AT'
}

type Github_PackageVersionStatistics = {
  readonly downloadsTotalCount: Scalars['Int'];
};

type Github_PageInfo = {
  readonly endCursor: Maybe<Scalars['String']>;
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly startCursor: Maybe<Scalars['String']>;
};

type Github_PermissionGranter = Github_Organization | Github_Repository | Github_Team;

type Github_PermissionSource = {
  readonly organization: Github_Organization;
  readonly permission: Github_DefaultRepositoryPermissionField;
  readonly source: Github_PermissionGranter;
};

type Github_PinnableItem = Github_Gist | Github_Repository;

type Github_PinnableItemConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PinnableItemEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PinnableItem>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PinnableItemEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PinnableItem>;
};

enum Github_PinnableItemType {
  REPOSITORY = 'REPOSITORY',
  GIST = 'GIST',
  ISSUE = 'ISSUE',
  PROJECT = 'PROJECT',
  PULL_REQUEST = 'PULL_REQUEST',
  USER = 'USER',
  ORGANIZATION = 'ORGANIZATION',
  TEAM = 'TEAM'
}

type Github_PinnedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly issue: Github_Issue;
};


type Github_PrivateRepositoryForkingDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_PrivateRepositoryForkingEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_ProfileItemShowcase = {
  readonly hasPinnedItems: Scalars['Boolean'];
  readonly items: Github_PinnableItemConnection;
};


type Github_ProfileItemShowcase_itemsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_ProfileOwner = {
  readonly anyPinnableItems: Scalars['Boolean'];
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly itemShowcase: Github_ProfileItemShowcase;
  readonly location: Maybe<Scalars['String']>;
  readonly login: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly pinnableItems: Github_PinnableItemConnection;
  readonly pinnedItems: Github_PinnableItemConnection;
  readonly pinnedItemsRemaining: Scalars['Int'];
  readonly viewerCanChangePinnedItems: Scalars['Boolean'];
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


type Github_ProfileOwner_anyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>;
};


type Github_ProfileOwner_pinnableItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_ProfileOwner_pinnedItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_Project = Github_Node & Github_Closable & Github_Updatable & {
  readonly body: Maybe<Scalars['String']>;
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly closed: Scalars['Boolean'];
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  readonly columns: Github_ProjectColumnConnection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly creator: Maybe<Github_Actor>;
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly number: Scalars['Int'];
  readonly owner: Github_ProjectOwner;
  readonly pendingCards: Github_ProjectCardConnection;
  readonly resourcePath: Scalars['Github_URI'];
  readonly state: Github_ProjectState;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly viewerCanUpdate: Scalars['Boolean'];
};


type Github_Project_columnsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Project_pendingCardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};

type Github_ProjectCard = Github_Node & {
  readonly column: Maybe<Github_ProjectColumn>;
  readonly content: Maybe<Github_ProjectCardItem>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly creator: Maybe<Github_Actor>;
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly isArchived: Scalars['Boolean'];
  readonly note: Maybe<Scalars['String']>;
  readonly project: Github_Project;
  readonly resourcePath: Scalars['Github_URI'];
  readonly state: Maybe<Github_ProjectCardState>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};

enum Github_ProjectCardArchivedState {
  ARCHIVED = 'ARCHIVED',
  NOT_ARCHIVED = 'NOT_ARCHIVED'
}

type Github_ProjectCardConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ProjectCardEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ProjectCard>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ProjectCardEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_ProjectCard>;
};

type Github_ProjectCardItem = Github_Issue | Github_PullRequest;

enum Github_ProjectCardState {
  CONTENT_ONLY = 'CONTENT_ONLY',
  NOTE_ONLY = 'NOTE_ONLY',
  REDACTED = 'REDACTED'
}

type Github_ProjectColumn = Github_Node & {
  readonly cards: Github_ProjectCardConnection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly project: Github_Project;
  readonly purpose: Maybe<Github_ProjectColumnPurpose>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};


type Github_ProjectColumn_cardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};

type Github_ProjectColumnConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ProjectColumnEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ProjectColumn>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ProjectColumnEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_ProjectColumn>;
};

enum Github_ProjectColumnPurpose {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

type Github_ProjectConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ProjectEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Project>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ProjectEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Project>;
};

type Github_ProjectOrder = {
  readonly field: Github_ProjectOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_ProjectOrderField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  NAME = 'NAME'
}

type Github_ProjectOwner = {
  readonly id: Scalars['ID'];
  readonly project: Maybe<Github_Project>;
  readonly projects: Github_ProjectConnection;
  readonly projectsResourcePath: Scalars['Github_URI'];
  readonly projectsUrl: Scalars['Github_URI'];
  readonly viewerCanCreateProjects: Scalars['Boolean'];
};


type Github_ProjectOwner_projectArgs = {
  number: Scalars['Int'];
};


type Github_ProjectOwner_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

enum Github_ProjectState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

enum Github_ProjectTemplate {
  BASIC_KANBAN = 'BASIC_KANBAN',
  AUTOMATED_KANBAN_V2 = 'AUTOMATED_KANBAN_V2',
  AUTOMATED_REVIEWS_KANBAN = 'AUTOMATED_REVIEWS_KANBAN',
  BUG_TRIAGE = 'BUG_TRIAGE'
}

type Github_PublicKey = Github_Node & {
  readonly accessedAt: Maybe<Scalars['Github_DateTime']>;
  readonly createdAt: Maybe<Scalars['Github_DateTime']>;
  readonly fingerprint: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly isReadOnly: Maybe<Scalars['Boolean']>;
  readonly key: Scalars['String'];
  readonly updatedAt: Maybe<Scalars['Github_DateTime']>;
};

type Github_PublicKeyConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PublicKeyEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PublicKey>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PublicKeyEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PublicKey>;
};

type Github_PullRequest = Github_Node & Github_Assignable & Github_Closable & Github_Comment & Github_Updatable & Github_UpdatableComment & Github_Labelable & Github_Lockable & Github_Reactable & Github_RepositoryNode & Github_Subscribable & Github_UniformResourceLocatable & {
  readonly activeLockReason: Maybe<Github_LockReason>;
  readonly additions: Scalars['Int'];
  readonly assignees: Github_UserConnection;
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly baseRef: Maybe<Github_Ref>;
  readonly baseRefName: Scalars['String'];
  readonly baseRefOid: Scalars['Github_GitObjectID'];
  readonly baseRepository: Maybe<Github_Repository>;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly changedFiles: Scalars['Int'];
  readonly checksResourcePath: Scalars['Github_URI'];
  readonly checksUrl: Scalars['Github_URI'];
  readonly closed: Scalars['Boolean'];
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  readonly comments: Github_IssueCommentConnection;
  readonly commits: Github_PullRequestCommitConnection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly deletions: Scalars['Int'];
  readonly editor: Maybe<Github_Actor>;
  readonly files: Maybe<Github_PullRequestChangedFileConnection>;
  readonly headRef: Maybe<Github_Ref>;
  readonly headRefName: Scalars['String'];
  readonly headRefOid: Scalars['Github_GitObjectID'];
  readonly headRepository: Maybe<Github_Repository>;
  readonly headRepositoryOwner: Maybe<Github_RepositoryOwner>;
  readonly hovercard: Github_Hovercard;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly isCrossRepository: Scalars['Boolean'];
  readonly isDraft: Scalars['Boolean'];
  readonly labels: Maybe<Github_LabelConnection>;
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly locked: Scalars['Boolean'];
  readonly maintainerCanModify: Scalars['Boolean'];
  readonly mergeCommit: Maybe<Github_Commit>;
  readonly mergeable: Github_MergeableState;
  readonly merged: Scalars['Boolean'];
  readonly mergedAt: Maybe<Scalars['Github_DateTime']>;
  readonly mergedBy: Maybe<Github_Actor>;
  readonly milestone: Maybe<Github_Milestone>;
  readonly number: Scalars['Int'];
  readonly participants: Github_UserConnection;
  readonly permalink: Scalars['Github_URI'];
  readonly potentialMergeCommit: Maybe<Github_Commit>;
  readonly projectCards: Github_ProjectCardConnection;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly revertResourcePath: Scalars['Github_URI'];
  readonly revertUrl: Scalars['Github_URI'];
  readonly reviewDecision: Maybe<Github_PullRequestReviewDecision>;
  readonly reviewRequests: Maybe<Github_ReviewRequestConnection>;
  readonly reviewThreads: Github_PullRequestReviewThreadConnection;
  readonly reviews: Maybe<Github_PullRequestReviewConnection>;
  readonly state: Github_PullRequestState;
  readonly suggestedReviewers: ReadonlyArray<Maybe<Github_SuggestedReviewer>>;
  /** @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2020-10-01 UTC. */
  readonly timeline: Github_PullRequestTimelineConnection;
  readonly timelineItems: Github_PullRequestTimelineItemsConnection;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanApplySuggestion: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};


type Github_PullRequest_assigneesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_commitsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_filesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_hovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


type Github_PullRequest_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_participantsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_projectCardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};


type Github_PullRequest_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_PullRequest_reviewRequestsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_reviewThreadsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_reviewsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  states: Maybe<ReadonlyArray<Github_PullRequestReviewState>>;
  author: Maybe<Scalars['String']>;
};


type Github_PullRequest_timelineArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_timelineItemsArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  skip: Maybe<Scalars['Int']>;
  itemTypes: Maybe<ReadonlyArray<Github_PullRequestTimelineItemsItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequest_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_PullRequestChangedFile = {
  readonly additions: Scalars['Int'];
  readonly deletions: Scalars['Int'];
  readonly path: Scalars['String'];
};

type Github_PullRequestChangedFileConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestChangedFileEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestChangedFile>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestChangedFileEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestChangedFile>;
};

type Github_PullRequestCommit = Github_Node & Github_UniformResourceLocatable & {
  readonly commit: Github_Commit;
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};

type Github_PullRequestCommitCommentThread = Github_Node & Github_RepositoryNode & {
  readonly comments: Github_CommitCommentConnection;
  readonly commit: Github_Commit;
  readonly id: Scalars['ID'];
  readonly path: Maybe<Scalars['String']>;
  readonly position: Maybe<Scalars['Int']>;
  readonly pullRequest: Github_PullRequest;
  readonly repository: Github_Repository;
};


type Github_PullRequestCommitCommentThread_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_PullRequestCommitConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestCommitEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestCommit>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestCommitEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestCommit>;
};

type Github_PullRequestConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequest>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestContributionsByRepository = {
  readonly contributions: Github_CreatedPullRequestContributionConnection;
  readonly repository: Github_Repository;
};


type Github_PullRequestContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};

type Github_PullRequestEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequest>;
};

enum Github_PullRequestMergeMethod {
  MERGE = 'MERGE',
  SQUASH = 'SQUASH',
  REBASE = 'REBASE'
}

type Github_PullRequestOrder = {
  readonly field: Github_PullRequestOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_PullRequestOrderField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT'
}

type Github_PullRequestReview = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly comments: Github_PullRequestReviewCommentConnection;
  readonly commit: Maybe<Github_Commit>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly onBehalfOf: Github_TeamConnection;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly pullRequest: Github_PullRequest;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly state: Github_PullRequestReviewState;
  readonly submittedAt: Maybe<Scalars['Github_DateTime']>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_PullRequestReview_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequestReview_onBehalfOfArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_PullRequestReview_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_PullRequestReview_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_PullRequestReviewComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly commit: Maybe<Github_Commit>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly diffHunk: Scalars['String'];
  readonly draftedAt: Scalars['Github_DateTime'];
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly isMinimized: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly minimizedReason: Maybe<Scalars['String']>;
  readonly originalCommit: Maybe<Github_Commit>;
  readonly originalPosition: Scalars['Int'];
  readonly outdated: Scalars['Boolean'];
  readonly path: Scalars['String'];
  readonly position: Maybe<Scalars['Int']>;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly pullRequest: Github_PullRequest;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly replyTo: Maybe<Github_PullRequestReviewComment>;
  readonly repository: Github_Repository;
  readonly resourcePath: Scalars['Github_URI'];
  readonly state: Github_PullRequestReviewCommentState;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanMinimize: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_PullRequestReviewComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_PullRequestReviewComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_PullRequestReviewCommentConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewCommentEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewComment>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestReviewCommentEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestReviewComment>;
};

enum Github_PullRequestReviewCommentState {
  PENDING = 'PENDING',
  SUBMITTED = 'SUBMITTED'
}

type Github_PullRequestReviewConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestReview>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestReviewContributionsByRepository = {
  readonly contributions: Github_CreatedPullRequestReviewContributionConnection;
  readonly repository: Github_Repository;
};


type Github_PullRequestReviewContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};

enum Github_PullRequestReviewDecision {
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  APPROVED = 'APPROVED',
  REVIEW_REQUIRED = 'REVIEW_REQUIRED'
}

type Github_PullRequestReviewEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestReview>;
};

enum Github_PullRequestReviewEvent {
  COMMENT = 'COMMENT',
  APPROVE = 'APPROVE',
  REQUEST_CHANGES = 'REQUEST_CHANGES',
  DISMISS = 'DISMISS'
}

enum Github_PullRequestReviewState {
  PENDING = 'PENDING',
  COMMENTED = 'COMMENTED',
  APPROVED = 'APPROVED',
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  DISMISSED = 'DISMISSED'
}

type Github_PullRequestReviewThread = Github_Node & {
  readonly comments: Github_PullRequestReviewCommentConnection;
  readonly diffSide: Github_DiffSide;
  readonly id: Scalars['ID'];
  readonly isResolved: Scalars['Boolean'];
  readonly line: Maybe<Scalars['Int']>;
  readonly originalLine: Maybe<Scalars['Int']>;
  readonly originalStartLine: Maybe<Scalars['Int']>;
  readonly pullRequest: Github_PullRequest;
  readonly repository: Github_Repository;
  readonly resolvedBy: Maybe<Github_User>;
  readonly startDiffSide: Maybe<Github_DiffSide>;
  readonly startLine: Maybe<Scalars['Int']>;
  readonly viewerCanResolve: Scalars['Boolean'];
  readonly viewerCanUnresolve: Scalars['Boolean'];
};


type Github_PullRequestReviewThread_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

type Github_PullRequestReviewThreadConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewThreadEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewThread>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestReviewThreadEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestReviewThread>;
};

type Github_PullRequestRevisionMarker = {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly lastSeenCommit: Github_Commit;
  readonly pullRequest: Github_PullRequest;
};

enum Github_PullRequestState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  MERGED = 'MERGED'
}

type Github_PullRequestTimelineConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItemEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItem>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PullRequestTimelineItem = Github_AssignedEvent | Github_BaseRefForcePushedEvent | Github_ClosedEvent | Github_Commit | Github_CommitCommentThread | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DeployedEvent | Github_DeploymentEnvironmentChangedEvent | Github_HeadRefDeletedEvent | Github_HeadRefForcePushedEvent | Github_HeadRefRestoredEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MergedEvent | Github_MilestonedEvent | Github_PullRequestReview | Github_PullRequestReviewComment | Github_PullRequestReviewThread | Github_ReferencedEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_ReviewDismissedEvent | Github_ReviewRequestRemovedEvent | Github_ReviewRequestedEvent | Github_SubscribedEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

type Github_PullRequestTimelineItemEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestTimelineItem>;
};

type Github_PullRequestTimelineItems = Github_AddedToProjectEvent | Github_AssignedEvent | Github_AutomaticBaseChangeFailedEvent | Github_AutomaticBaseChangeSucceededEvent | Github_BaseRefChangedEvent | Github_BaseRefForcePushedEvent | Github_ClosedEvent | Github_CommentDeletedEvent | Github_ConnectedEvent | Github_ConvertToDraftEvent | Github_ConvertedNoteToIssueEvent | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DeployedEvent | Github_DeploymentEnvironmentChangedEvent | Github_DisconnectedEvent | Github_HeadRefDeletedEvent | Github_HeadRefForcePushedEvent | Github_HeadRefRestoredEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MarkedAsDuplicateEvent | Github_MentionedEvent | Github_MergedEvent | Github_MilestonedEvent | Github_MovedColumnsInProjectEvent | Github_PinnedEvent | Github_PullRequestCommit | Github_PullRequestCommitCommentThread | Github_PullRequestReview | Github_PullRequestReviewThread | Github_PullRequestRevisionMarker | Github_ReadyForReviewEvent | Github_ReferencedEvent | Github_RemovedFromProjectEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_ReviewDismissedEvent | Github_ReviewRequestRemovedEvent | Github_ReviewRequestedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnmarkedAsDuplicateEvent | Github_UnpinnedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

type Github_PullRequestTimelineItemsConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItemsEdge>>>;
  readonly filteredCount: Scalars['Int'];
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItems>>>;
  readonly pageCount: Scalars['Int'];
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_PullRequestTimelineItemsEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PullRequestTimelineItems>;
};

enum Github_PullRequestTimelineItemsItemType {
  PULL_REQUEST_COMMIT = 'PULL_REQUEST_COMMIT',
  PULL_REQUEST_COMMIT_COMMENT_THREAD = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  PULL_REQUEST_REVIEW = 'PULL_REQUEST_REVIEW',
  PULL_REQUEST_REVIEW_THREAD = 'PULL_REQUEST_REVIEW_THREAD',
  PULL_REQUEST_REVISION_MARKER = 'PULL_REQUEST_REVISION_MARKER',
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT = 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT',
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT = 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT',
  BASE_REF_CHANGED_EVENT = 'BASE_REF_CHANGED_EVENT',
  BASE_REF_FORCE_PUSHED_EVENT = 'BASE_REF_FORCE_PUSHED_EVENT',
  DEPLOYED_EVENT = 'DEPLOYED_EVENT',
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  HEAD_REF_DELETED_EVENT = 'HEAD_REF_DELETED_EVENT',
  HEAD_REF_FORCE_PUSHED_EVENT = 'HEAD_REF_FORCE_PUSHED_EVENT',
  HEAD_REF_RESTORED_EVENT = 'HEAD_REF_RESTORED_EVENT',
  MERGED_EVENT = 'MERGED_EVENT',
  REVIEW_DISMISSED_EVENT = 'REVIEW_DISMISSED_EVENT',
  REVIEW_REQUESTED_EVENT = 'REVIEW_REQUESTED_EVENT',
  REVIEW_REQUEST_REMOVED_EVENT = 'REVIEW_REQUEST_REMOVED_EVENT',
  READY_FOR_REVIEW_EVENT = 'READY_FOR_REVIEW_EVENT',
  CONVERT_TO_DRAFT_EVENT = 'CONVERT_TO_DRAFT_EVENT',
  ISSUE_COMMENT = 'ISSUE_COMMENT',
  CROSS_REFERENCED_EVENT = 'CROSS_REFERENCED_EVENT',
  ADDED_TO_PROJECT_EVENT = 'ADDED_TO_PROJECT_EVENT',
  ASSIGNED_EVENT = 'ASSIGNED_EVENT',
  CLOSED_EVENT = 'CLOSED_EVENT',
  COMMENT_DELETED_EVENT = 'COMMENT_DELETED_EVENT',
  CONNECTED_EVENT = 'CONNECTED_EVENT',
  CONVERTED_NOTE_TO_ISSUE_EVENT = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  DEMILESTONED_EVENT = 'DEMILESTONED_EVENT',
  DISCONNECTED_EVENT = 'DISCONNECTED_EVENT',
  LABELED_EVENT = 'LABELED_EVENT',
  LOCKED_EVENT = 'LOCKED_EVENT',
  MARKED_AS_DUPLICATE_EVENT = 'MARKED_AS_DUPLICATE_EVENT',
  MENTIONED_EVENT = 'MENTIONED_EVENT',
  MILESTONED_EVENT = 'MILESTONED_EVENT',
  MOVED_COLUMNS_IN_PROJECT_EVENT = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  PINNED_EVENT = 'PINNED_EVENT',
  REFERENCED_EVENT = 'REFERENCED_EVENT',
  REMOVED_FROM_PROJECT_EVENT = 'REMOVED_FROM_PROJECT_EVENT',
  RENAMED_TITLE_EVENT = 'RENAMED_TITLE_EVENT',
  REOPENED_EVENT = 'REOPENED_EVENT',
  SUBSCRIBED_EVENT = 'SUBSCRIBED_EVENT',
  TRANSFERRED_EVENT = 'TRANSFERRED_EVENT',
  UNASSIGNED_EVENT = 'UNASSIGNED_EVENT',
  UNLABELED_EVENT = 'UNLABELED_EVENT',
  UNLOCKED_EVENT = 'UNLOCKED_EVENT',
  USER_BLOCKED_EVENT = 'USER_BLOCKED_EVENT',
  UNMARKED_AS_DUPLICATE_EVENT = 'UNMARKED_AS_DUPLICATE_EVENT',
  UNPINNED_EVENT = 'UNPINNED_EVENT',
  UNSUBSCRIBED_EVENT = 'UNSUBSCRIBED_EVENT'
}

enum Github_PullRequestUpdateState {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED'
}

type Github_PushAllowance = Github_Node & {
  readonly actor: Maybe<Github_PushAllowanceActor>;
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly id: Scalars['ID'];
};

type Github_PushAllowanceActor = Github_App | Github_Team | Github_User;

type Github_PushAllowanceConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PushAllowanceEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PushAllowance>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_PushAllowanceEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_PushAllowance>;
};

type Github_RateLimit = {
  readonly cost: Scalars['Int'];
  readonly limit: Scalars['Int'];
  readonly nodeCount: Scalars['Int'];
  readonly remaining: Scalars['Int'];
  readonly resetAt: Scalars['Github_DateTime'];
};

type Github_Reactable = {
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly viewerCanReact: Scalars['Boolean'];
};


type Github_Reactable_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};

type Github_ReactingUserConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReactingUserEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ReactingUserEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_User;
  readonly reactedAt: Scalars['Github_DateTime'];
};

type Github_Reaction = Github_Node & {
  readonly content: Github_ReactionContent;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly reactable: Github_Reactable;
  readonly user: Maybe<Github_User>;
};

type Github_ReactionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReactionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Reaction>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
  readonly viewerHasReacted: Scalars['Boolean'];
};

enum Github_ReactionContent {
  THUMBS_UP = 'THUMBS_UP',
  THUMBS_DOWN = 'THUMBS_DOWN',
  LAUGH = 'LAUGH',
  HOORAY = 'HOORAY',
  CONFUSED = 'CONFUSED',
  HEART = 'HEART',
  ROCKET = 'ROCKET',
  EYES = 'EYES'
}

type Github_ReactionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Reaction>;
};

type Github_ReactionGroup = {
  readonly content: Github_ReactionContent;
  readonly createdAt: Maybe<Scalars['Github_DateTime']>;
  readonly subject: Github_Reactable;
  readonly users: Github_ReactingUserConnection;
  readonly viewerHasReacted: Scalars['Boolean'];
};


type Github_ReactionGroup_usersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_ReactionOrder = {
  readonly field: Github_ReactionOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_ReactionOrderField {
  CREATED_AT = 'CREATED_AT'
}

type Github_ReadyForReviewEvent = Github_Node & Github_UniformResourceLocatable & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};

type Github_Ref = Github_Node & {
  readonly associatedPullRequests: Github_PullRequestConnection;
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly prefix: Scalars['String'];
  readonly repository: Github_Repository;
  readonly target: Maybe<Github_GitObject>;
};


type Github_Ref_associatedPullRequestsArgs = {
  states: Maybe<ReadonlyArray<Github_PullRequestState>>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  headRefName: Maybe<Scalars['String']>;
  baseRefName: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_IssueOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_RefConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RefEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Ref>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_RefEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Ref>;
};

type Github_ReferencedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly commit: Maybe<Github_Commit>;
  readonly commitRepository: Github_Repository;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly isCrossRepository: Scalars['Boolean'];
  readonly isDirectReference: Scalars['Boolean'];
  readonly subject: Github_ReferencedSubject;
};

type Github_ReferencedSubject = Github_Issue | Github_PullRequest;

type Github_RefOrder = {
  readonly field: Github_RefOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_RefOrderField {
  TAG_COMMIT_DATE = 'TAG_COMMIT_DATE',
  ALPHABETICAL = 'ALPHABETICAL'
}

type Github_RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly identityProvider: Maybe<Github_EnterpriseIdentityProvider>;
};

type Github_Release = Github_Node & Github_UniformResourceLocatable & {
  readonly author: Maybe<Github_User>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHTML: Maybe<Scalars['Github_HTML']>;
  readonly id: Scalars['ID'];
  readonly isDraft: Scalars['Boolean'];
  readonly isPrerelease: Scalars['Boolean'];
  readonly name: Maybe<Scalars['String']>;
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly releaseAssets: Github_ReleaseAssetConnection;
  readonly resourcePath: Scalars['Github_URI'];
  readonly shortDescriptionHTML: Maybe<Scalars['Github_HTML']>;
  readonly tag: Maybe<Github_Ref>;
  readonly tagName: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
};


type Github_Release_releaseAssetsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};


type Github_Release_shortDescriptionHTMLArgs = {
  limit?: Maybe<Scalars['Int']>;
};

type Github_ReleaseAsset = Github_Node & {
  readonly contentType: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly downloadCount: Scalars['Int'];
  readonly downloadUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly release: Maybe<Github_Release>;
  readonly size: Scalars['Int'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly uploadedBy: Github_User;
  readonly url: Scalars['Github_URI'];
};

type Github_ReleaseAssetConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReleaseAssetEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ReleaseAsset>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ReleaseAssetEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_ReleaseAsset>;
};

type Github_ReleaseConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReleaseEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Release>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ReleaseEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Release>;
};

type Github_ReleaseOrder = {
  readonly field: Github_ReleaseOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_ReleaseOrderField {
  CREATED_AT = 'CREATED_AT',
  NAME = 'NAME'
}

type Github_RemoveAssigneesFromAssignableInput = {
  readonly assignableId: Scalars['ID'];
  readonly assigneeIds: ReadonlyArray<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveAssigneesFromAssignablePayload = {
  readonly assignable: Maybe<Github_Assignable>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemovedFromProjectEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

type Github_RemoveEnterpriseAdminInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveEnterpriseAdminPayload = {
  readonly admin: Maybe<Github_User>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
  readonly viewer: Maybe<Github_User>;
};

type Github_RemoveEnterpriseIdentityProviderInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveEnterpriseIdentityProviderPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly identityProvider: Maybe<Github_EnterpriseIdentityProvider>;
};

type Github_RemoveEnterpriseOrganizationInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly organizationId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveEnterpriseOrganizationPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly organization: Maybe<Github_Organization>;
  readonly viewer: Maybe<Github_User>;
};

type Github_RemoveLabelsFromLabelableInput = {
  readonly labelableId: Scalars['ID'];
  readonly labelIds: ReadonlyArray<Scalars['ID']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveLabelsFromLabelablePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly labelable: Maybe<Github_Labelable>;
};

type Github_RemoveOutsideCollaboratorInput = {
  readonly userId: Scalars['ID'];
  readonly organizationId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveOutsideCollaboratorPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly removedUser: Maybe<Github_User>;
};

type Github_RemoveReactionInput = {
  readonly subjectId: Scalars['ID'];
  readonly content: Github_ReactionContent;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveReactionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly reaction: Maybe<Github_Reaction>;
  readonly subject: Maybe<Github_Reactable>;
};

type Github_RemoveStarInput = {
  readonly starrableId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RemoveStarPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly starrable: Maybe<Github_Starrable>;
};

type Github_RenamedTitleEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly currentTitle: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly previousTitle: Scalars['String'];
  readonly subject: Github_RenamedTitleSubject;
};

type Github_RenamedTitleSubject = Github_Issue | Github_PullRequest;

type Github_ReopenedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly closable: Github_Closable;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
};

type Github_ReopenIssueInput = {
  readonly issueId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ReopenIssuePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly issue: Maybe<Github_Issue>;
};

type Github_ReopenPullRequestInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ReopenPullRequestPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
};

type Github_RepoAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_RepoAccessAuditEntryVisibility>;
};

enum Github_RepoAccessAuditEntryVisibility {
  INTERNAL = 'INTERNAL',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

type Github_RepoAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_RepoAddMemberAuditEntryVisibility>;
};

enum Github_RepoAddMemberAuditEntryVisibility {
  INTERNAL = 'INTERNAL',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

type Github_RepoAddTopicAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & Github_TopicAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly topic: Maybe<Github_Topic>;
  readonly topicName: Maybe<Scalars['String']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoArchivedAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_RepoArchivedAuditEntryVisibility>;
};

enum Github_RepoArchivedAuditEntryVisibility {
  INTERNAL = 'INTERNAL',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

type Github_RepoChangeMergeSettingAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly isEnabled: Maybe<Scalars['Boolean']>;
  readonly mergeType: Maybe<Github_RepoChangeMergeSettingAuditEntryMergeType>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_RepoChangeMergeSettingAuditEntryMergeType {
  MERGE = 'MERGE',
  REBASE = 'REBASE',
  SQUASH = 'SQUASH'
}

type Github_RepoConfigDisableAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigDisableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigDisableContributorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigDisableSockpuppetDisallowedAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigEnableAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigEnableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigEnableContributorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigEnableSockpuppetDisallowedAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigLockAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoConfigUnlockAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepoCreateAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly forkParentName: Maybe<Scalars['String']>;
  readonly forkSourceName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_RepoCreateAuditEntryVisibility>;
};

enum Github_RepoCreateAuditEntryVisibility {
  INTERNAL = 'INTERNAL',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

type Github_RepoDestroyAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_RepoDestroyAuditEntryVisibility>;
};

enum Github_RepoDestroyAuditEntryVisibility {
  INTERNAL = 'INTERNAL',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

type Github_RepoRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  readonly visibility: Maybe<Github_RepoRemoveMemberAuditEntryVisibility>;
};

enum Github_RepoRemoveMemberAuditEntryVisibility {
  INTERNAL = 'INTERNAL',
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

type Github_RepoRemoveTopicAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & Github_TopicAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly topic: Maybe<Github_Topic>;
  readonly topicName: Maybe<Scalars['String']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

enum Github_ReportedContentClassifiers {
  SPAM = 'SPAM',
  ABUSE = 'ABUSE',
  OFF_TOPIC = 'OFF_TOPIC',
  OUTDATED = 'OUTDATED',
  DUPLICATE = 'DUPLICATE',
  RESOLVED = 'RESOLVED'
}

type Github_Repository = Github_Node & Github_ProjectOwner & Github_PackageOwner & Github_Subscribable & Github_Starrable & Github_UniformResourceLocatable & Github_RepositoryInfo & {
  readonly assignableUsers: Github_UserConnection;
  readonly branchProtectionRules: Github_BranchProtectionRuleConnection;
  readonly codeOfConduct: Maybe<Github_CodeOfConduct>;
  readonly collaborators: Maybe<Github_RepositoryCollaboratorConnection>;
  readonly commitComments: Github_CommitCommentConnection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly defaultBranchRef: Maybe<Github_Ref>;
  readonly deleteBranchOnMerge: Scalars['Boolean'];
  readonly deployKeys: Github_DeployKeyConnection;
  readonly deployments: Github_DeploymentConnection;
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHTML: Scalars['Github_HTML'];
  readonly diskUsage: Maybe<Scalars['Int']>;
  readonly forkCount: Scalars['Int'];
  readonly forks: Github_RepositoryConnection;
  readonly fundingLinks: ReadonlyArray<Github_FundingLink>;
  readonly hasIssuesEnabled: Scalars['Boolean'];
  readonly hasProjectsEnabled: Scalars['Boolean'];
  readonly hasWikiEnabled: Scalars['Boolean'];
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly isArchived: Scalars['Boolean'];
  readonly isDisabled: Scalars['Boolean'];
  readonly isEmpty: Scalars['Boolean'];
  readonly isFork: Scalars['Boolean'];
  readonly isLocked: Scalars['Boolean'];
  readonly isMirror: Scalars['Boolean'];
  readonly isPrivate: Scalars['Boolean'];
  readonly isTemplate: Scalars['Boolean'];
  readonly issue: Maybe<Github_Issue>;
  readonly issueOrPullRequest: Maybe<Github_IssueOrPullRequest>;
  readonly issues: Github_IssueConnection;
  readonly label: Maybe<Github_Label>;
  readonly labels: Maybe<Github_LabelConnection>;
  readonly languages: Maybe<Github_LanguageConnection>;
  readonly licenseInfo: Maybe<Github_License>;
  readonly lockReason: Maybe<Github_RepositoryLockReason>;
  readonly mentionableUsers: Github_UserConnection;
  readonly mergeCommitAllowed: Scalars['Boolean'];
  readonly milestone: Maybe<Github_Milestone>;
  readonly milestones: Maybe<Github_MilestoneConnection>;
  readonly mirrorUrl: Maybe<Scalars['Github_URI']>;
  readonly name: Scalars['String'];
  readonly nameWithOwner: Scalars['String'];
  readonly object: Maybe<Github_GitObject>;
  readonly openGraphImageUrl: Scalars['Github_URI'];
  readonly owner: Github_RepositoryOwner;
  readonly packages: Github_PackageConnection;
  readonly parent: Maybe<Github_Repository>;
  readonly primaryLanguage: Maybe<Github_Language>;
  readonly project: Maybe<Github_Project>;
  readonly projects: Github_ProjectConnection;
  readonly projectsResourcePath: Scalars['Github_URI'];
  readonly projectsUrl: Scalars['Github_URI'];
  readonly pullRequest: Maybe<Github_PullRequest>;
  readonly pullRequests: Github_PullRequestConnection;
  readonly pushedAt: Maybe<Scalars['Github_DateTime']>;
  readonly rebaseMergeAllowed: Scalars['Boolean'];
  readonly ref: Maybe<Github_Ref>;
  readonly refs: Maybe<Github_RefConnection>;
  readonly release: Maybe<Github_Release>;
  readonly releases: Github_ReleaseConnection;
  readonly repositoryTopics: Github_RepositoryTopicConnection;
  readonly resourcePath: Scalars['Github_URI'];
  readonly shortDescriptionHTML: Scalars['Github_HTML'];
  readonly squashMergeAllowed: Scalars['Boolean'];
  readonly sshUrl: Scalars['Github_GitSSHRemote'];
  readonly stargazers: Github_StargazerConnection;
  readonly submodules: Github_SubmoduleConnection;
  readonly tempCloneToken: Maybe<Scalars['String']>;
  readonly templateRepository: Maybe<Github_Repository>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly usesCustomOpenGraphImage: Scalars['Boolean'];
  readonly viewerCanAdminister: Scalars['Boolean'];
  readonly viewerCanCreateProjects: Scalars['Boolean'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerCanUpdateTopics: Scalars['Boolean'];
  readonly viewerHasStarred: Scalars['Boolean'];
  readonly viewerPermission: Maybe<Github_RepositoryPermission>;
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
  readonly vulnerabilityAlerts: Maybe<Github_RepositoryVulnerabilityAlertConnection>;
  readonly watchers: Github_UserConnection;
};


type Github_Repository_assignableUsersArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_branchProtectionRulesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_collaboratorsArgs = {
  affiliation: Maybe<Github_CollaboratorAffiliation>;
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_commitCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_deployKeysArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_deploymentsArgs = {
  environments: Maybe<ReadonlyArray<Scalars['String']>>;
  orderBy?: Maybe<Github_DeploymentOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_forksArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>;
  orderBy: Maybe<Github_RepositoryOrder>;
  affiliations: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  isLocked: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_issueArgs = {
  number: Scalars['Int'];
};


type Github_Repository_issueOrPullRequestArgs = {
  number: Scalars['Int'];
};


type Github_Repository_issuesArgs = {
  orderBy: Maybe<Github_IssueOrder>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  states: Maybe<ReadonlyArray<Github_IssueState>>;
  filterBy: Maybe<Github_IssueFilters>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_labelArgs = {
  name: Scalars['String'];
};


type Github_Repository_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
};


type Github_Repository_languagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_LanguageOrder>;
};


type Github_Repository_mentionableUsersArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_milestoneArgs = {
  number: Scalars['Int'];
};


type Github_Repository_milestonesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  states: Maybe<ReadonlyArray<Github_MilestoneState>>;
  orderBy: Maybe<Github_MilestoneOrder>;
  query: Maybe<Scalars['String']>;
};


type Github_Repository_objectArgs = {
  oid: Maybe<Scalars['Github_GitObjectID']>;
  expression: Maybe<Scalars['String']>;
};


type Github_Repository_packagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  names: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  repositoryId: Maybe<Scalars['ID']>;
  packageType: Maybe<Github_PackageType>;
  orderBy?: Maybe<Github_PackageOrder>;
};


type Github_Repository_projectArgs = {
  number: Scalars['Int'];
};


type Github_Repository_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_pullRequestArgs = {
  number: Scalars['Int'];
};


type Github_Repository_pullRequestsArgs = {
  states: Maybe<ReadonlyArray<Github_PullRequestState>>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  headRefName: Maybe<Scalars['String']>;
  baseRefName: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_IssueOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_refArgs = {
  qualifiedName: Scalars['String'];
};


type Github_Repository_refsArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  refPrefix: Scalars['String'];
  direction: Maybe<Github_OrderDirection>;
  orderBy: Maybe<Github_RefOrder>;
};


type Github_Repository_releaseArgs = {
  tagName: Scalars['String'];
};


type Github_Repository_releasesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_ReleaseOrder>;
};


type Github_Repository_repositoryTopicsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_shortDescriptionHTMLArgs = {
  limit?: Maybe<Scalars['Int']>;
};


type Github_Repository_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};


type Github_Repository_submodulesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_vulnerabilityAlertsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Repository_watchersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

enum Github_RepositoryAffiliation {
  OWNER = 'OWNER',
  COLLABORATOR = 'COLLABORATOR',
  ORGANIZATION_MEMBER = 'ORGANIZATION_MEMBER'
}

type Github_RepositoryAuditEntryData = {
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepositoryCollaboratorConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryCollaboratorEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_RepositoryCollaboratorEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_User;
  readonly permission: Github_RepositoryPermission;
  readonly permissionSources: Maybe<ReadonlyArray<Github_PermissionSource>>;
};

type Github_RepositoryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Repository>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
  readonly totalDiskUsage: Scalars['Int'];
};

enum Github_RepositoryContributionType {
  COMMIT = 'COMMIT',
  ISSUE = 'ISSUE',
  PULL_REQUEST = 'PULL_REQUEST',
  REPOSITORY = 'REPOSITORY',
  PULL_REQUEST_REVIEW = 'PULL_REQUEST_REVIEW'
}

type Github_RepositoryEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Repository>;
};

type Github_RepositoryInfo = {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly description: Maybe<Scalars['String']>;
  readonly descriptionHTML: Scalars['Github_HTML'];
  readonly forkCount: Scalars['Int'];
  readonly hasIssuesEnabled: Scalars['Boolean'];
  readonly hasProjectsEnabled: Scalars['Boolean'];
  readonly hasWikiEnabled: Scalars['Boolean'];
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  readonly isArchived: Scalars['Boolean'];
  readonly isFork: Scalars['Boolean'];
  readonly isLocked: Scalars['Boolean'];
  readonly isMirror: Scalars['Boolean'];
  readonly isPrivate: Scalars['Boolean'];
  readonly isTemplate: Scalars['Boolean'];
  readonly licenseInfo: Maybe<Github_License>;
  readonly lockReason: Maybe<Github_RepositoryLockReason>;
  readonly mirrorUrl: Maybe<Scalars['Github_URI']>;
  readonly name: Scalars['String'];
  readonly nameWithOwner: Scalars['String'];
  readonly openGraphImageUrl: Scalars['Github_URI'];
  readonly owner: Github_RepositoryOwner;
  readonly pushedAt: Maybe<Scalars['Github_DateTime']>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly shortDescriptionHTML: Scalars['Github_HTML'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly usesCustomOpenGraphImage: Scalars['Boolean'];
};


type Github_RepositoryInfo_shortDescriptionHTMLArgs = {
  limit?: Maybe<Scalars['Int']>;
};

type Github_RepositoryInvitation = Github_Node & {
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly invitee: Maybe<Github_User>;
  readonly inviter: Github_User;
  readonly permission: Github_RepositoryPermission;
  readonly repository: Maybe<Github_RepositoryInfo>;
};

type Github_RepositoryInvitationConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryInvitationEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_RepositoryInvitation>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_RepositoryInvitationEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_RepositoryInvitation>;
};

type Github_RepositoryInvitationOrder = {
  readonly field: Github_RepositoryInvitationOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_RepositoryInvitationOrderField {
  CREATED_AT = 'CREATED_AT',
  INVITEE_LOGIN = 'INVITEE_LOGIN'
}

enum Github_RepositoryLockReason {
  MOVING = 'MOVING',
  BILLING = 'BILLING',
  RENAME = 'RENAME',
  MIGRATING = 'MIGRATING'
}

type Github_RepositoryNode = {
  readonly repository: Github_Repository;
};

type Github_RepositoryOrder = {
  readonly field: Github_RepositoryOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_RepositoryOrderField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  PUSHED_AT = 'PUSHED_AT',
  NAME = 'NAME',
  STARGAZERS = 'STARGAZERS'
}

type Github_RepositoryOwner = {
  readonly avatarUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly repositories: Github_RepositoryConnection;
  readonly repository: Maybe<Github_Repository>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};


type Github_RepositoryOwner_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


type Github_RepositoryOwner_repositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>;
  orderBy: Maybe<Github_RepositoryOrder>;
  affiliations: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  isLocked: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  isFork: Maybe<Scalars['Boolean']>;
};


type Github_RepositoryOwner_repositoryArgs = {
  name: Scalars['String'];
};

enum Github_RepositoryPermission {
  ADMIN = 'ADMIN',
  MAINTAIN = 'MAINTAIN',
  WRITE = 'WRITE',
  TRIAGE = 'TRIAGE',
  READ = 'READ'
}

enum Github_RepositoryPrivacy {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

type Github_RepositoryTopic = Github_Node & Github_UniformResourceLocatable & {
  readonly id: Scalars['ID'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly topic: Github_Topic;
  readonly url: Scalars['Github_URI'];
};

type Github_RepositoryTopicConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryTopicEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_RepositoryTopic>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_RepositoryTopicEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_RepositoryTopic>;
};

enum Github_RepositoryVisibility {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
  INTERNAL = 'INTERNAL'
}

type Github_RepositoryVisibilityChangeDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepositoryVisibilityChangeEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_RepositoryVulnerabilityAlert = Github_Node & Github_RepositoryNode & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly dismissReason: Maybe<Scalars['String']>;
  readonly dismissedAt: Maybe<Scalars['Github_DateTime']>;
  readonly dismisser: Maybe<Github_User>;
  readonly id: Scalars['ID'];
  readonly repository: Github_Repository;
  readonly securityAdvisory: Maybe<Github_SecurityAdvisory>;
  readonly securityVulnerability: Maybe<Github_SecurityVulnerability>;
  readonly vulnerableManifestFilename: Scalars['String'];
  readonly vulnerableManifestPath: Scalars['String'];
  readonly vulnerableRequirements: Maybe<Scalars['String']>;
};

type Github_RepositoryVulnerabilityAlertConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryVulnerabilityAlertEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_RepositoryVulnerabilityAlert>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_RepositoryVulnerabilityAlertEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_RepositoryVulnerabilityAlert>;
};

type Github_RequestedReviewer = Github_Mannequin | Github_Team | Github_User;

type Github_RequestReviewsInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly userIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly teamIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly union: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_RequestReviewsPayload = {
  readonly actor: Maybe<Github_Actor>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
  readonly requestedReviewersEdge: Maybe<Github_UserEdge>;
};

type Github_ResolveReviewThreadInput = {
  readonly threadId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_ResolveReviewThreadPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly thread: Maybe<Github_PullRequestReviewThread>;
};

type Github_RestrictedContribution = Github_Contribution & {
  readonly isRestricted: Scalars['Boolean'];
  readonly occurredAt: Scalars['Github_DateTime'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
  readonly user: Github_User;
};

type Github_ReviewDismissalAllowance = Github_Node & {
  readonly actor: Maybe<Github_ReviewDismissalAllowanceActor>;
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly id: Scalars['ID'];
};

type Github_ReviewDismissalAllowanceActor = Github_Team | Github_User;

type Github_ReviewDismissalAllowanceConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReviewDismissalAllowanceEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ReviewDismissalAllowance>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ReviewDismissalAllowanceEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_ReviewDismissalAllowance>;
};

type Github_ReviewDismissedEvent = Github_Node & Github_UniformResourceLocatable & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly dismissalMessage: Maybe<Scalars['String']>;
  readonly dismissalMessageHTML: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly previousReviewState: Github_PullRequestReviewState;
  readonly pullRequest: Github_PullRequest;
  readonly pullRequestCommit: Maybe<Github_PullRequestCommit>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly review: Maybe<Github_PullRequestReview>;
  readonly url: Scalars['Github_URI'];
};

type Github_ReviewRequest = Github_Node & {
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly requestedReviewer: Maybe<Github_RequestedReviewer>;
};

type Github_ReviewRequestConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReviewRequestEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ReviewRequest>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_ReviewRequestedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly requestedReviewer: Maybe<Github_RequestedReviewer>;
};

type Github_ReviewRequestEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_ReviewRequest>;
};

type Github_ReviewRequestRemovedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly pullRequest: Github_PullRequest;
  readonly requestedReviewer: Maybe<Github_RequestedReviewer>;
};

type Github_ReviewStatusHovercardContext = Github_HovercardContext & {
  readonly message: Scalars['String'];
  readonly octicon: Scalars['String'];
  readonly reviewDecision: Maybe<Github_PullRequestReviewDecision>;
};

enum Github_SamlDigestAlgorithm {
  SHA1 = 'SHA1',
  SHA256 = 'SHA256',
  SHA384 = 'SHA384',
  SHA512 = 'SHA512'
}

enum Github_SamlSignatureAlgorithm {
  RSA_SHA1 = 'RSA_SHA1',
  RSA_SHA256 = 'RSA_SHA256',
  RSA_SHA384 = 'RSA_SHA384',
  RSA_SHA512 = 'RSA_SHA512'
}

type Github_SavedReply = Github_Node & {
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly title: Scalars['String'];
  readonly user: Maybe<Github_Actor>;
};

type Github_SavedReplyConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SavedReplyEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SavedReply>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_SavedReplyEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_SavedReply>;
};

type Github_SavedReplyOrder = {
  readonly field: Github_SavedReplyOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_SavedReplyOrderField {
  UPDATED_AT = 'UPDATED_AT'
}

type Github_SearchResultItem = Github_App | Github_Issue | Github_MarketplaceListing | Github_Organization | Github_PullRequest | Github_Repository | Github_User;

type Github_SearchResultItemConnection = {
  readonly codeCount: Scalars['Int'];
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SearchResultItemEdge>>>;
  readonly issueCount: Scalars['Int'];
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SearchResultItem>>>;
  readonly pageInfo: Github_PageInfo;
  readonly repositoryCount: Scalars['Int'];
  readonly userCount: Scalars['Int'];
  readonly wikiCount: Scalars['Int'];
};

type Github_SearchResultItemEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_SearchResultItem>;
  readonly textMatches: Maybe<ReadonlyArray<Maybe<Github_TextMatch>>>;
};

enum Github_SearchType {
  ISSUE = 'ISSUE',
  REPOSITORY = 'REPOSITORY',
  USER = 'USER'
}

type Github_SecurityAdvisory = Github_Node & {
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly description: Scalars['String'];
  readonly ghsaId: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly identifiers: ReadonlyArray<Github_SecurityAdvisoryIdentifier>;
  readonly origin: Scalars['String'];
  readonly permalink: Maybe<Scalars['Github_URI']>;
  readonly publishedAt: Scalars['Github_DateTime'];
  readonly references: ReadonlyArray<Github_SecurityAdvisoryReference>;
  readonly severity: Github_SecurityAdvisorySeverity;
  readonly summary: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly vulnerabilities: Github_SecurityVulnerabilityConnection;
  readonly withdrawnAt: Maybe<Scalars['Github_DateTime']>;
};


type Github_SecurityAdvisory_vulnerabilitiesArgs = {
  orderBy?: Maybe<Github_SecurityVulnerabilityOrder>;
  ecosystem: Maybe<Github_SecurityAdvisoryEcosystem>;
  package: Maybe<Scalars['String']>;
  severities: Maybe<ReadonlyArray<Github_SecurityAdvisorySeverity>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_SecurityAdvisoryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SecurityAdvisoryEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SecurityAdvisory>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

enum Github_SecurityAdvisoryEcosystem {
  RUBYGEMS = 'RUBYGEMS',
  NPM = 'NPM',
  PIP = 'PIP',
  MAVEN = 'MAVEN',
  NUGET = 'NUGET',
  COMPOSER = 'COMPOSER'
}

type Github_SecurityAdvisoryEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_SecurityAdvisory>;
};

type Github_SecurityAdvisoryIdentifier = {
  readonly type: Scalars['String'];
  readonly value: Scalars['String'];
};

type Github_SecurityAdvisoryIdentifierFilter = {
  readonly type: Github_SecurityAdvisoryIdentifierType;
  readonly value: Scalars['String'];
};

enum Github_SecurityAdvisoryIdentifierType {
  CVE = 'CVE',
  GHSA = 'GHSA'
}

type Github_SecurityAdvisoryOrder = {
  readonly field: Github_SecurityAdvisoryOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_SecurityAdvisoryOrderField {
  PUBLISHED_AT = 'PUBLISHED_AT',
  UPDATED_AT = 'UPDATED_AT'
}

type Github_SecurityAdvisoryPackage = {
  readonly ecosystem: Github_SecurityAdvisoryEcosystem;
  readonly name: Scalars['String'];
};

type Github_SecurityAdvisoryPackageVersion = {
  readonly identifier: Scalars['String'];
};

type Github_SecurityAdvisoryReference = {
  readonly url: Scalars['Github_URI'];
};

enum Github_SecurityAdvisorySeverity {
  LOW = 'LOW',
  MODERATE = 'MODERATE',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

type Github_SecurityVulnerability = {
  readonly advisory: Github_SecurityAdvisory;
  readonly firstPatchedVersion: Maybe<Github_SecurityAdvisoryPackageVersion>;
  readonly package: Github_SecurityAdvisoryPackage;
  readonly severity: Github_SecurityAdvisorySeverity;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly vulnerableVersionRange: Scalars['String'];
};

type Github_SecurityVulnerabilityConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SecurityVulnerabilityEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SecurityVulnerability>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_SecurityVulnerabilityEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_SecurityVulnerability>;
};

type Github_SecurityVulnerabilityOrder = {
  readonly field: Github_SecurityVulnerabilityOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_SecurityVulnerabilityOrderField {
  UPDATED_AT = 'UPDATED_AT'
}

type Github_SetEnterpriseIdentityProviderInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly ssoUrl: Scalars['Github_URI'];
  readonly issuer: Maybe<Scalars['String']>;
  readonly idpCertificate: Scalars['String'];
  readonly signatureMethod: Github_SamlSignatureAlgorithm;
  readonly digestMethod: Github_SamlDigestAlgorithm;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_SetEnterpriseIdentityProviderPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly identityProvider: Maybe<Github_EnterpriseIdentityProvider>;
};

type Github_SmimeSignature = Github_GitSignature & {
  readonly email: Scalars['String'];
  readonly isValid: Scalars['Boolean'];
  readonly payload: Scalars['String'];
  readonly signature: Scalars['String'];
  readonly signer: Maybe<Github_User>;
  readonly state: Github_GitSignatureState;
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

type Github_Sponsor = Github_Organization | Github_User;

type Github_Sponsorable = {
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  readonly sponsorshipsAsMaintainer: Github_SponsorshipConnection;
  readonly sponsorshipsAsSponsor: Github_SponsorshipConnection;
};


type Github_Sponsorable_sponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


type Github_Sponsorable_sponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};

type Github_Sponsorship = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC. */
  readonly maintainer: Github_User;
  readonly privacyLevel: Github_SponsorshipPrivacy;
  /** @deprecated `Sponsorship.sponsor` will be removed. Use `Sponsorship.sponsorEntity` instead. Removal on 2020-10-01 UTC. */
  readonly sponsor: Maybe<Github_User>;
  readonly sponsorEntity: Maybe<Github_Sponsor>;
  readonly sponsorable: Github_Sponsorable;
  readonly tier: Maybe<Github_SponsorsTier>;
};

type Github_SponsorshipConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SponsorshipEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Sponsorship>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_SponsorshipEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Sponsorship>;
};

type Github_SponsorshipOrder = {
  readonly field: Github_SponsorshipOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_SponsorshipOrderField {
  CREATED_AT = 'CREATED_AT'
}

enum Github_SponsorshipPrivacy {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

type Github_SponsorsListing = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly fullDescription: Scalars['String'];
  readonly fullDescriptionHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly shortDescription: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly tiers: Maybe<Github_SponsorsTierConnection>;
};


type Github_SponsorsListing_tiersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_SponsorsTierOrder>;
};

type Github_SponsorsTier = Github_Node & {
  readonly adminInfo: Maybe<Github_SponsorsTierAdminInfo>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly description: Scalars['String'];
  readonly descriptionHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  readonly monthlyPriceInCents: Scalars['Int'];
  readonly monthlyPriceInDollars: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly sponsorsListing: Github_SponsorsListing;
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_SponsorsTierAdminInfo = {
  readonly sponsorships: Github_SponsorshipConnection;
};


type Github_SponsorsTierAdminInfo_sponsorshipsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};

type Github_SponsorsTierConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SponsorsTierEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SponsorsTier>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_SponsorsTierEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_SponsorsTier>;
};

type Github_SponsorsTierOrder = {
  readonly field: Github_SponsorsTierOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_SponsorsTierOrderField {
  CREATED_AT = 'CREATED_AT',
  MONTHLY_PRICE_IN_CENTS = 'MONTHLY_PRICE_IN_CENTS'
}

type Github_StargazerConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_StargazerEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_StargazerEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_User;
  readonly starredAt: Scalars['Github_DateTime'];
};

type Github_StarOrder = {
  readonly field: Github_StarOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_StarOrderField {
  STARRED_AT = 'STARRED_AT'
}

type Github_Starrable = {
  readonly id: Scalars['ID'];
  readonly stargazers: Github_StargazerConnection;
  readonly viewerHasStarred: Scalars['Boolean'];
};


type Github_Starrable_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};

type Github_StarredRepositoryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_StarredRepositoryEdge>>>;
  readonly isOverLimit: Scalars['Boolean'];
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Repository>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_StarredRepositoryEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_Repository;
  readonly starredAt: Scalars['Github_DateTime'];
};

type Github_Status = Github_Node & {
  readonly commit: Maybe<Github_Commit>;
  readonly context: Maybe<Github_StatusContext>;
  readonly contexts: ReadonlyArray<Github_StatusContext>;
  readonly id: Scalars['ID'];
  readonly state: Github_StatusState;
};


type Github_Status_contextArgs = {
  name: Scalars['String'];
};

type Github_StatusCheckRollup = Github_Node & {
  readonly commit: Maybe<Github_Commit>;
  readonly contexts: Github_StatusCheckRollupContextConnection;
  readonly id: Scalars['ID'];
  readonly state: Github_StatusState;
};


type Github_StatusCheckRollup_contextsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_StatusCheckRollupContext = Github_StatusContext;

type Github_StatusCheckRollupContextConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_StatusCheckRollupContextEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_StatusCheckRollupContext>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_StatusCheckRollupContextEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_StatusCheckRollupContext>;
};

type Github_StatusContext = Github_Node & {
  readonly avatarUrl: Maybe<Scalars['Github_URI']>;
  readonly commit: Maybe<Github_Commit>;
  readonly context: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly creator: Maybe<Github_Actor>;
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly state: Github_StatusState;
  readonly targetUrl: Maybe<Scalars['Github_URI']>;
};


type Github_StatusContext_avatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

enum Github_StatusState {
  EXPECTED = 'EXPECTED',
  ERROR = 'ERROR',
  FAILURE = 'FAILURE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS'
}

type Github_SubmitPullRequestReviewInput = {
  readonly pullRequestId: Maybe<Scalars['ID']>;
  readonly pullRequestReviewId: Maybe<Scalars['ID']>;
  readonly event: Github_PullRequestReviewEvent;
  readonly body: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_SubmitPullRequestReviewPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

type Github_Submodule = {
  readonly branch: Maybe<Scalars['String']>;
  readonly gitUrl: Scalars['Github_URI'];
  readonly name: Scalars['String'];
  readonly path: Scalars['String'];
  readonly subprojectCommitOid: Maybe<Scalars['Github_GitObjectID']>;
};

type Github_SubmoduleConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SubmoduleEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Submodule>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_SubmoduleEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Submodule>;
};

type Github_Subscribable = {
  readonly id: Scalars['ID'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};

type Github_SubscribedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly subscribable: Github_Subscribable;
};

enum Github_SubscriptionState {
  UNSUBSCRIBED = 'UNSUBSCRIBED',
  SUBSCRIBED = 'SUBSCRIBED',
  IGNORED = 'IGNORED'
}

type Github_SuggestedReviewer = {
  readonly isAuthor: Scalars['Boolean'];
  readonly isCommenter: Scalars['Boolean'];
  readonly reviewer: Github_User;
};

type Github_Tag = Github_Node & Github_GitObject & {
  readonly abbreviatedOid: Scalars['String'];
  readonly commitResourcePath: Scalars['Github_URI'];
  readonly commitUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  readonly message: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly repository: Github_Repository;
  readonly tagger: Maybe<Github_GitActor>;
  readonly target: Github_GitObject;
};

type Github_Team = Github_Node & Github_Subscribable & Github_MemberStatusable & {
  readonly ancestors: Github_TeamConnection;
  readonly avatarUrl: Maybe<Scalars['Github_URI']>;
  readonly childTeams: Github_TeamConnection;
  readonly combinedSlug: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly description: Maybe<Scalars['String']>;
  readonly discussion: Maybe<Github_TeamDiscussion>;
  readonly discussions: Github_TeamDiscussionConnection;
  readonly discussionsResourcePath: Scalars['Github_URI'];
  readonly discussionsUrl: Scalars['Github_URI'];
  readonly editTeamResourcePath: Scalars['Github_URI'];
  readonly editTeamUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  readonly invitations: Maybe<Github_OrganizationInvitationConnection>;
  readonly memberStatuses: Github_UserStatusConnection;
  readonly members: Github_TeamMemberConnection;
  readonly membersResourcePath: Scalars['Github_URI'];
  readonly membersUrl: Scalars['Github_URI'];
  readonly name: Scalars['String'];
  readonly newTeamResourcePath: Scalars['Github_URI'];
  readonly newTeamUrl: Scalars['Github_URI'];
  readonly organization: Github_Organization;
  readonly parentTeam: Maybe<Github_Team>;
  readonly privacy: Github_TeamPrivacy;
  readonly repositories: Github_TeamRepositoryConnection;
  readonly repositoriesResourcePath: Scalars['Github_URI'];
  readonly repositoriesUrl: Scalars['Github_URI'];
  readonly resourcePath: Scalars['Github_URI'];
  readonly slug: Scalars['String'];
  readonly teamsResourcePath: Scalars['Github_URI'];
  readonly teamsUrl: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly viewerCanAdminister: Scalars['Boolean'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};


type Github_Team_ancestorsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Team_avatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


type Github_Team_childTeamsArgs = {
  orderBy: Maybe<Github_TeamOrder>;
  userLogins: Maybe<ReadonlyArray<Scalars['String']>>;
  immediateOnly?: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Team_discussionArgs = {
  number: Scalars['Int'];
};


type Github_Team_discussionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  isPinned: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_TeamDiscussionOrder>;
};


type Github_Team_invitationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_Team_memberStatusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_UserStatusOrder>;
};


type Github_Team_membersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
  membership?: Maybe<Github_TeamMembershipType>;
  role: Maybe<Github_TeamMemberRole>;
  orderBy: Maybe<Github_TeamMemberOrder>;
};


type Github_Team_repositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_TeamRepositoryOrder>;
};

type Github_TeamAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_TeamAddRepositoryAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & Github_TeamAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_TeamAuditEntryData = {
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
};

type Github_TeamChangeParentTeamAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly parentTeam: Maybe<Github_Team>;
  readonly parentTeamName: Maybe<Scalars['String']>;
  readonly parentTeamNameWas: Maybe<Scalars['String']>;
  readonly parentTeamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly parentTeamUrl: Maybe<Scalars['Github_URI']>;
  readonly parentTeamWas: Maybe<Github_Team>;
  readonly parentTeamWasResourcePath: Maybe<Scalars['Github_URI']>;
  readonly parentTeamWasUrl: Maybe<Scalars['Github_URI']>;
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_TeamConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Team>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_TeamDiscussion = Github_Node & Github_Comment & Github_Deletable & Github_Reactable & Github_Subscribable & Github_UniformResourceLocatable & Github_Updatable & Github_UpdatableComment & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly bodyVersion: Scalars['String'];
  readonly comments: Github_TeamDiscussionCommentConnection;
  readonly commentsResourcePath: Scalars['Github_URI'];
  readonly commentsUrl: Scalars['Github_URI'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly isPinned: Scalars['Boolean'];
  readonly isPrivate: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly number: Scalars['Int'];
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly resourcePath: Scalars['Github_URI'];
  readonly team: Github_Team;
  readonly title: Scalars['String'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanPin: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanSubscribe: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};


type Github_TeamDiscussion_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_TeamDiscussionCommentOrder>;
  fromComment: Maybe<Scalars['Int']>;
};


type Github_TeamDiscussion_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_TeamDiscussion_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_TeamDiscussionComment = Github_Node & Github_Comment & Github_Deletable & Github_Reactable & Github_UniformResourceLocatable & Github_Updatable & Github_UpdatableComment & {
  readonly author: Maybe<Github_Actor>;
  readonly authorAssociation: Github_CommentAuthorAssociation;
  readonly body: Scalars['String'];
  readonly bodyHTML: Scalars['Github_HTML'];
  readonly bodyText: Scalars['String'];
  readonly bodyVersion: Scalars['String'];
  readonly createdAt: Scalars['Github_DateTime'];
  readonly createdViaEmail: Scalars['Boolean'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly discussion: Github_TeamDiscussion;
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly includesCreatedEdit: Scalars['Boolean'];
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  readonly number: Scalars['Int'];
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  readonly reactions: Github_ReactionConnection;
  readonly resourcePath: Scalars['Github_URI'];
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  readonly viewerCanDelete: Scalars['Boolean'];
  readonly viewerCanReact: Scalars['Boolean'];
  readonly viewerCanUpdate: Scalars['Boolean'];
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  readonly viewerDidAuthor: Scalars['Boolean'];
};


type Github_TeamDiscussionComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


type Github_TeamDiscussionComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

type Github_TeamDiscussionCommentConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussionCommentEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussionComment>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_TeamDiscussionCommentEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_TeamDiscussionComment>;
};

type Github_TeamDiscussionCommentOrder = {
  readonly field: Github_TeamDiscussionCommentOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_TeamDiscussionCommentOrderField {
  NUMBER = 'NUMBER'
}

type Github_TeamDiscussionConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussionEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussion>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_TeamDiscussionEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_TeamDiscussion>;
};

type Github_TeamDiscussionOrder = {
  readonly field: Github_TeamDiscussionOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_TeamDiscussionOrderField {
  CREATED_AT = 'CREATED_AT'
}

type Github_TeamEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_Team>;
};

type Github_TeamMemberConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamMemberEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_TeamMemberEdge = {
  readonly cursor: Scalars['String'];
  readonly memberAccessResourcePath: Scalars['Github_URI'];
  readonly memberAccessUrl: Scalars['Github_URI'];
  readonly node: Github_User;
  readonly role: Github_TeamMemberRole;
};

type Github_TeamMemberOrder = {
  readonly field: Github_TeamMemberOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_TeamMemberOrderField {
  LOGIN = 'LOGIN',
  CREATED_AT = 'CREATED_AT'
}

enum Github_TeamMemberRole {
  MAINTAINER = 'MAINTAINER',
  MEMBER = 'MEMBER'
}

enum Github_TeamMembershipType {
  IMMEDIATE = 'IMMEDIATE',
  CHILD_TEAM = 'CHILD_TEAM',
  ALL = 'ALL'
}

type Github_TeamOrder = {
  readonly field: Github_TeamOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_TeamOrderField {
  NAME = 'NAME'
}

enum Github_TeamPrivacy {
  SECRET = 'SECRET',
  VISIBLE = 'VISIBLE'
}

type Github_TeamRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_TeamRemoveRepositoryAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & Github_TeamAuditEntryData & {
  readonly action: Scalars['String'];
  readonly actor: Maybe<Github_AuditEntryActor>;
  readonly actorIp: Maybe<Scalars['String']>;
  readonly actorLocation: Maybe<Github_ActorLocation>;
  readonly actorLogin: Maybe<Scalars['String']>;
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  readonly operationType: Maybe<Github_OperationType>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationName: Maybe<Scalars['String']>;
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  readonly repository: Maybe<Github_Repository>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  readonly team: Maybe<Github_Team>;
  readonly teamName: Maybe<Scalars['String']>;
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  readonly user: Maybe<Github_User>;
  readonly userLogin: Maybe<Scalars['String']>;
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

type Github_TeamRepositoryConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamRepositoryEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Repository>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_TeamRepositoryEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_Repository;
  readonly permission: Github_RepositoryPermission;
};

type Github_TeamRepositoryOrder = {
  readonly field: Github_TeamRepositoryOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_TeamRepositoryOrderField {
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
  PUSHED_AT = 'PUSHED_AT',
  NAME = 'NAME',
  PERMISSION = 'PERMISSION',
  STARGAZERS = 'STARGAZERS'
}

enum Github_TeamRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER'
}

type Github_TextMatch = {
  readonly fragment: Scalars['String'];
  readonly highlights: ReadonlyArray<Github_TextMatchHighlight>;
  readonly property: Scalars['String'];
};

type Github_TextMatchHighlight = {
  readonly beginIndice: Scalars['Int'];
  readonly endIndice: Scalars['Int'];
  readonly text: Scalars['String'];
};

type Github_Topic = Github_Node & Github_Starrable & {
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly relatedTopics: ReadonlyArray<Github_Topic>;
  readonly stargazers: Github_StargazerConnection;
  readonly viewerHasStarred: Scalars['Boolean'];
};


type Github_Topic_relatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
};


type Github_Topic_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};

type Github_TopicAuditEntryData = {
  readonly topic: Maybe<Github_Topic>;
  readonly topicName: Maybe<Scalars['String']>;
};

enum Github_TopicSuggestionDeclineReason {
  NOT_RELEVANT = 'NOT_RELEVANT',
  TOO_SPECIFIC = 'TOO_SPECIFIC',
  PERSONAL_PREFERENCE = 'PERSONAL_PREFERENCE',
  TOO_GENERAL = 'TOO_GENERAL'
}

type Github_TransferIssueInput = {
  readonly issueId: Scalars['ID'];
  readonly repositoryId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_TransferIssuePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly issue: Maybe<Github_Issue>;
};

type Github_TransferredEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly fromRepository: Maybe<Github_Repository>;
  readonly id: Scalars['ID'];
  readonly issue: Github_Issue;
};

type Github_Tree = Github_Node & Github_GitObject & {
  readonly abbreviatedOid: Scalars['String'];
  readonly commitResourcePath: Scalars['Github_URI'];
  readonly commitUrl: Scalars['Github_URI'];
  readonly entries: Maybe<ReadonlyArray<Github_TreeEntry>>;
  readonly id: Scalars['ID'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly repository: Github_Repository;
};

type Github_TreeEntry = {
  readonly mode: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly object: Maybe<Github_GitObject>;
  readonly oid: Scalars['Github_GitObjectID'];
  readonly repository: Github_Repository;
  readonly submodule: Maybe<Github_Submodule>;
  readonly type: Scalars['String'];
};

type Github_UnarchiveRepositoryInput = {
  readonly repositoryId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnarchiveRepositoryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_UnassignedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly assignable: Github_Assignable;
  readonly assignee: Maybe<Github_Assignee>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC. */
  readonly user: Maybe<Github_User>;
};

type Github_UnfollowUserInput = {
  readonly userId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnfollowUserPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly user: Maybe<Github_User>;
};

type Github_UniformResourceLocatable = {
  readonly resourcePath: Scalars['Github_URI'];
  readonly url: Scalars['Github_URI'];
};

type Github_UnknownSignature = Github_GitSignature & {
  readonly email: Scalars['String'];
  readonly isValid: Scalars['Boolean'];
  readonly payload: Scalars['String'];
  readonly signature: Scalars['String'];
  readonly signer: Maybe<Github_User>;
  readonly state: Github_GitSignatureState;
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

type Github_UnlabeledEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly label: Github_Label;
  readonly labelable: Github_Labelable;
};

type Github_UnlinkRepositoryFromProjectInput = {
  readonly projectId: Scalars['ID'];
  readonly repositoryId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnlinkRepositoryFromProjectPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly project: Maybe<Github_Project>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_UnlockedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly lockable: Github_Lockable;
};

type Github_UnlockLockableInput = {
  readonly lockableId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnlockLockablePayload = {
  readonly actor: Maybe<Github_Actor>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly unlockedRecord: Maybe<Github_Lockable>;
};

type Github_UnmarkedAsDuplicateEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
};

type Github_UnmarkIssueAsDuplicateInput = {
  readonly duplicateId: Scalars['ID'];
  readonly canonicalId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnmarkIssueAsDuplicatePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly duplicate: Maybe<Github_IssueOrPullRequest>;
};

type Github_UnminimizeCommentInput = {
  readonly subjectId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnminimizeCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly unminimizedComment: Maybe<Github_Minimizable>;
};

type Github_UnpinnedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly issue: Github_Issue;
};

type Github_UnresolveReviewThreadInput = {
  readonly threadId: Scalars['ID'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UnresolveReviewThreadPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly thread: Maybe<Github_PullRequestReviewThread>;
};

type Github_UnsubscribedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly subscribable: Github_Subscribable;
};

type Github_Updatable = {
  readonly viewerCanUpdate: Scalars['Boolean'];
};

type Github_UpdatableComment = {
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
};

type Github_UpdateBranchProtectionRuleInput = {
  readonly branchProtectionRuleId: Scalars['ID'];
  readonly pattern: Maybe<Scalars['String']>;
  readonly requiresApprovingReviews: Maybe<Scalars['Boolean']>;
  readonly requiredApprovingReviewCount: Maybe<Scalars['Int']>;
  readonly requiresCommitSignatures: Maybe<Scalars['Boolean']>;
  readonly isAdminEnforced: Maybe<Scalars['Boolean']>;
  readonly requiresStatusChecks: Maybe<Scalars['Boolean']>;
  readonly requiresStrictStatusChecks: Maybe<Scalars['Boolean']>;
  readonly requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>;
  readonly dismissesStaleReviews: Maybe<Scalars['Boolean']>;
  readonly restrictsReviewDismissals: Maybe<Scalars['Boolean']>;
  readonly reviewDismissalActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly restrictsPushes: Maybe<Scalars['Boolean']>;
  readonly pushActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly requiredStatusCheckContexts: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateBranchProtectionRulePayload = {
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly capability: Github_ActionExecutionCapabilitySetting;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseAdministratorRoleInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly login: Scalars['String'];
  readonly role: Github_EnterpriseAdministratorRole;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseAdministratorRolePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseDefaultRepositoryPermissionSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Maybe<Github_EnterpriseMembersCanCreateRepositoriesSettingValue>;
  readonly membersCanCreateRepositoriesPolicyEnabled: Maybe<Scalars['Boolean']>;
  readonly membersCanCreatePublicRepositories: Maybe<Scalars['Boolean']>;
  readonly membersCanCreatePrivateRepositories: Maybe<Scalars['Boolean']>;
  readonly membersCanCreateInternalRepositories: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseMembersCanMakePurchasesSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseOrganizationProjectsSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseOrganizationProjectsSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseProfileInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly websiteUrl: Maybe<Scalars['String']>;
  readonly location: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseProfilePayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
};

type Github_UpdateEnterpriseRepositoryProjectsSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseRepositoryProjectsSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseTeamDiscussionsSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseTeamDiscussionsSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  readonly enterpriseId: Scalars['ID'];
  readonly settingValue: Github_EnterpriseEnabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly enterprise: Maybe<Github_Enterprise>;
  readonly message: Maybe<Scalars['String']>;
};

type Github_UpdateIpAllowListEnabledSettingInput = {
  readonly ownerId: Scalars['ID'];
  readonly settingValue: Github_IpAllowListEnabledSettingValue;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateIpAllowListEnabledSettingPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly owner: Maybe<Github_IpAllowListOwner>;
};

type Github_UpdateIpAllowListEntryInput = {
  readonly ipAllowListEntryId: Scalars['ID'];
  readonly allowListValue: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly isActive: Scalars['Boolean'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateIpAllowListEntryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly ipAllowListEntry: Maybe<Github_IpAllowListEntry>;
};

type Github_UpdateIssueCommentInput = {
  readonly id: Scalars['ID'];
  readonly body: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateIssueCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly issueComment: Maybe<Github_IssueComment>;
};

type Github_UpdateIssueInput = {
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly assigneeIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly milestoneId: Maybe<Scalars['ID']>;
  readonly labelIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly state: Maybe<Github_IssueState>;
  readonly projectIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateIssuePayload = {
  readonly actor: Maybe<Github_Actor>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly issue: Maybe<Github_Issue>;
};

type Github_UpdateProjectCardInput = {
  readonly projectCardId: Scalars['ID'];
  readonly isArchived: Maybe<Scalars['Boolean']>;
  readonly note: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateProjectCardPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly projectCard: Maybe<Github_ProjectCard>;
};

type Github_UpdateProjectColumnInput = {
  readonly projectColumnId: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateProjectColumnPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly projectColumn: Maybe<Github_ProjectColumn>;
};

type Github_UpdateProjectInput = {
  readonly projectId: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly state: Maybe<Github_ProjectState>;
  readonly public: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateProjectPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly project: Maybe<Github_Project>;
};

type Github_UpdatePullRequestInput = {
  readonly pullRequestId: Scalars['ID'];
  readonly baseRefName: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly state: Maybe<Github_PullRequestUpdateState>;
  readonly maintainerCanModify: Maybe<Scalars['Boolean']>;
  readonly assigneeIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly milestoneId: Maybe<Scalars['ID']>;
  readonly labelIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly projectIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdatePullRequestPayload = {
  readonly actor: Maybe<Github_Actor>;
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequest: Maybe<Github_PullRequest>;
};

type Github_UpdatePullRequestReviewCommentInput = {
  readonly pullRequestReviewCommentId: Scalars['ID'];
  readonly body: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdatePullRequestReviewCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReviewComment: Maybe<Github_PullRequestReviewComment>;
};

type Github_UpdatePullRequestReviewInput = {
  readonly pullRequestReviewId: Scalars['ID'];
  readonly body: Scalars['String'];
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdatePullRequestReviewPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

type Github_UpdateRefInput = {
  readonly refId: Scalars['ID'];
  readonly oid: Scalars['Github_GitObjectID'];
  readonly force: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateRefPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly ref: Maybe<Github_Ref>;
};

type Github_UpdateRepositoryInput = {
  readonly repositoryId: Scalars['ID'];
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly template: Maybe<Scalars['Boolean']>;
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  readonly hasWikiEnabled: Maybe<Scalars['Boolean']>;
  readonly hasIssuesEnabled: Maybe<Scalars['Boolean']>;
  readonly hasProjectsEnabled: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateRepositoryPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly repository: Maybe<Github_Repository>;
};

type Github_UpdateSubscriptionInput = {
  readonly subscribableId: Scalars['ID'];
  readonly state: Github_SubscriptionState;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateSubscriptionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly subscribable: Maybe<Github_Subscribable>;
};

type Github_UpdateTeamDiscussionCommentInput = {
  readonly id: Scalars['ID'];
  readonly body: Scalars['String'];
  readonly bodyVersion: Maybe<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateTeamDiscussionCommentPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly teamDiscussionComment: Maybe<Github_TeamDiscussionComment>;
};

type Github_UpdateTeamDiscussionInput = {
  readonly id: Scalars['ID'];
  readonly title: Maybe<Scalars['String']>;
  readonly body: Maybe<Scalars['String']>;
  readonly bodyVersion: Maybe<Scalars['String']>;
  readonly pinned: Maybe<Scalars['Boolean']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateTeamDiscussionPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly teamDiscussion: Maybe<Github_TeamDiscussion>;
};

type Github_UpdateTopicsInput = {
  readonly repositoryId: Scalars['ID'];
  readonly topicNames: ReadonlyArray<Scalars['String']>;
  readonly clientMutationId: Maybe<Scalars['String']>;
};

type Github_UpdateTopicsPayload = {
  readonly clientMutationId: Maybe<Scalars['String']>;
  readonly invalidTopicNames: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly repository: Maybe<Github_Repository>;
};


type Github_User = Github_Node & Github_Actor & Github_PackageOwner & Github_ProjectOwner & Github_RepositoryOwner & Github_UniformResourceLocatable & Github_ProfileOwner & Github_Sponsorable & {
  readonly anyPinnableItems: Scalars['Boolean'];
  readonly avatarUrl: Scalars['Github_URI'];
  readonly bio: Maybe<Scalars['String']>;
  readonly bioHTML: Scalars['Github_HTML'];
  readonly commitComments: Github_CommitCommentConnection;
  readonly company: Maybe<Scalars['String']>;
  readonly companyHTML: Scalars['Github_HTML'];
  readonly contributionsCollection: Github_ContributionsCollection;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly email: Scalars['String'];
  readonly followers: Github_FollowerConnection;
  readonly following: Github_FollowingConnection;
  readonly gist: Maybe<Github_Gist>;
  readonly gistComments: Github_GistCommentConnection;
  readonly gists: Github_GistConnection;
  readonly hovercard: Github_Hovercard;
  readonly id: Scalars['ID'];
  readonly isBountyHunter: Scalars['Boolean'];
  readonly isCampusExpert: Scalars['Boolean'];
  readonly isDeveloperProgramMember: Scalars['Boolean'];
  readonly isEmployee: Scalars['Boolean'];
  readonly isHireable: Scalars['Boolean'];
  readonly isSiteAdmin: Scalars['Boolean'];
  readonly isViewer: Scalars['Boolean'];
  readonly issueComments: Github_IssueCommentConnection;
  readonly issues: Github_IssueConnection;
  readonly itemShowcase: Github_ProfileItemShowcase;
  readonly location: Maybe<Scalars['String']>;
  readonly login: Scalars['String'];
  readonly name: Maybe<Scalars['String']>;
  readonly organization: Maybe<Github_Organization>;
  readonly organizationVerifiedDomainEmails: ReadonlyArray<Scalars['String']>;
  readonly organizations: Github_OrganizationConnection;
  readonly packages: Github_PackageConnection;
  readonly pinnableItems: Github_PinnableItemConnection;
  readonly pinnedItems: Github_PinnableItemConnection;
  readonly pinnedItemsRemaining: Scalars['Int'];
  readonly project: Maybe<Github_Project>;
  readonly projects: Github_ProjectConnection;
  readonly projectsResourcePath: Scalars['Github_URI'];
  readonly projectsUrl: Scalars['Github_URI'];
  readonly publicKeys: Github_PublicKeyConnection;
  readonly pullRequests: Github_PullRequestConnection;
  readonly repositories: Github_RepositoryConnection;
  readonly repositoriesContributedTo: Github_RepositoryConnection;
  readonly repository: Maybe<Github_Repository>;
  readonly resourcePath: Scalars['Github_URI'];
  readonly savedReplies: Maybe<Github_SavedReplyConnection>;
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  readonly sponsorshipsAsMaintainer: Github_SponsorshipConnection;
  readonly sponsorshipsAsSponsor: Github_SponsorshipConnection;
  readonly starredRepositories: Github_StarredRepositoryConnection;
  readonly status: Maybe<Github_UserStatus>;
  readonly topRepositories: Github_RepositoryConnection;
  readonly twitterUsername: Maybe<Scalars['String']>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly url: Scalars['Github_URI'];
  readonly viewerCanChangePinnedItems: Scalars['Boolean'];
  readonly viewerCanCreateProjects: Scalars['Boolean'];
  readonly viewerCanFollow: Scalars['Boolean'];
  readonly viewerIsFollowing: Scalars['Boolean'];
  readonly watching: Github_RepositoryConnection;
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


type Github_User_anyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>;
};


type Github_User_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


type Github_User_commitCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_contributionsCollectionArgs = {
  organizationID: Maybe<Scalars['ID']>;
  from: Maybe<Scalars['Github_DateTime']>;
  to: Maybe<Scalars['Github_DateTime']>;
};


type Github_User_followersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_followingArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_gistArgs = {
  name: Scalars['String'];
};


type Github_User_gistCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_gistsArgs = {
  privacy: Maybe<Github_GistPrivacy>;
  orderBy: Maybe<Github_GistOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_hovercardArgs = {
  primarySubjectId: Maybe<Scalars['ID']>;
};


type Github_User_issueCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_issuesArgs = {
  orderBy: Maybe<Github_IssueOrder>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  states: Maybe<ReadonlyArray<Github_IssueState>>;
  filterBy: Maybe<Github_IssueFilters>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_organizationArgs = {
  login: Scalars['String'];
};


type Github_User_organizationVerifiedDomainEmailsArgs = {
  login: Scalars['String'];
};


type Github_User_organizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_packagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  names: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  repositoryId: Maybe<Scalars['ID']>;
  packageType: Maybe<Github_PackageType>;
  orderBy?: Maybe<Github_PackageOrder>;
};


type Github_User_pinnableItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_pinnedItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_projectArgs = {
  number: Scalars['Int'];
};


type Github_User_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_publicKeysArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_pullRequestsArgs = {
  states: Maybe<ReadonlyArray<Github_PullRequestState>>;
  labels: Maybe<ReadonlyArray<Scalars['String']>>;
  headRefName: Maybe<Scalars['String']>;
  baseRefName: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_IssueOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_repositoriesArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>;
  orderBy: Maybe<Github_RepositoryOrder>;
  affiliations: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  isLocked: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  isFork: Maybe<Scalars['Boolean']>;
};


type Github_User_repositoriesContributedToArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>;
  orderBy: Maybe<Github_RepositoryOrder>;
  isLocked: Maybe<Scalars['Boolean']>;
  includeUserRepositories: Maybe<Scalars['Boolean']>;
  contributionTypes: Maybe<ReadonlyArray<Maybe<Github_RepositoryContributionType>>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


type Github_User_repositoryArgs = {
  name: Scalars['String'];
};


type Github_User_savedRepliesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_SavedReplyOrder>;
};


type Github_User_sponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


type Github_User_sponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


type Github_User_starredRepositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  ownedByViewer: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_StarOrder>;
};


type Github_User_topRepositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Github_RepositoryOrder;
  since: Maybe<Scalars['Github_DateTime']>;
};


type Github_User_watchingArgs = {
  privacy: Maybe<Github_RepositoryPrivacy>;
  orderBy: Maybe<Github_RepositoryOrder>;
  affiliations: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  ownerAffiliations?: Maybe<ReadonlyArray<Maybe<Github_RepositoryAffiliation>>>;
  isLocked: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

enum Github_UserBlockDuration {
  ONE_DAY = 'ONE_DAY',
  THREE_DAYS = 'THREE_DAYS',
  ONE_WEEK = 'ONE_WEEK',
  ONE_MONTH = 'ONE_MONTH',
  PERMANENT = 'PERMANENT'
}

type Github_UserBlockedEvent = Github_Node & {
  readonly actor: Maybe<Github_Actor>;
  readonly blockDuration: Github_UserBlockDuration;
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  readonly subject: Maybe<Github_User>;
};

type Github_UserConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_UserContentEdit = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly deletedAt: Maybe<Scalars['Github_DateTime']>;
  readonly deletedBy: Maybe<Github_Actor>;
  readonly diff: Maybe<Scalars['String']>;
  readonly editedAt: Scalars['Github_DateTime'];
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  readonly updatedAt: Scalars['Github_DateTime'];
};

type Github_UserContentEditConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserContentEditEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_UserContentEdit>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_UserContentEditEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_UserContentEdit>;
};

type Github_UserEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_User>;
};

type Github_UserEmailMetadata = {
  readonly primary: Maybe<Scalars['Boolean']>;
  readonly type: Maybe<Scalars['String']>;
  readonly value: Scalars['String'];
};

type Github_UserStatus = Github_Node & {
  readonly createdAt: Scalars['Github_DateTime'];
  readonly emoji: Maybe<Scalars['String']>;
  readonly emojiHTML: Maybe<Scalars['Github_HTML']>;
  readonly expiresAt: Maybe<Scalars['Github_DateTime']>;
  readonly id: Scalars['ID'];
  readonly indicatesLimitedAvailability: Scalars['Boolean'];
  readonly message: Maybe<Scalars['String']>;
  readonly organization: Maybe<Github_Organization>;
  readonly updatedAt: Scalars['Github_DateTime'];
  readonly user: Github_User;
};

type Github_UserStatusConnection = {
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserStatusEdge>>>;
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_UserStatus>>>;
  readonly pageInfo: Github_PageInfo;
  readonly totalCount: Scalars['Int'];
};

type Github_UserStatusEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Maybe<Github_UserStatus>;
};

type Github_UserStatusOrder = {
  readonly field: Github_UserStatusOrderField;
  readonly direction: Github_OrderDirection;
};

enum Github_UserStatusOrderField {
  UPDATED_AT = 'UPDATED_AT'
}

type Github_ViewerHovercardContext = Github_HovercardContext & {
  readonly message: Scalars['String'];
  readonly octicon: Scalars['String'];
  readonly viewer: Github_User;
};


type GraphQLSource = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
};

type GraphQLSourceConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphQLSourceGroupConnection>;
};


type GraphQLSourceConnection_distinctArgs = {
  field: GraphQLSourceFieldsEnum;
};


type GraphQLSourceConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphQLSourceFieldsEnum;
};

type GraphQLSourceEdge = {
  readonly next: Maybe<GraphQLSource>;
  readonly node: GraphQLSource;
  readonly previous: Maybe<GraphQLSource>;
};

enum GraphQLSourceFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  typeName = 'typeName',
  fieldName = 'fieldName'
}

type GraphQLSourceFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
};

type GraphQLSourceGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphQLSourceEdge>;
  readonly nodes: ReadonlyArray<GraphQLSource>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GraphQLSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GraphQLSourceFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 1,
  NORTHEAST = 5,
  EAST = 2,
  SOUTHEAST = 6,
  SOUTH = 3,
  SOUTHWEST = 7,
  WEST = 4,
  NORTHWEST = 8,
  ENTROPY = 16,
  ATTENTION = 17
}

enum ImageFit {
  COVER = 'cover',
  CONTAIN = 'contain',
  FILL = 'fill',
  INSIDE = 'inside',
  OUTSIDE = 'outside'
}

enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp'
}

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions: Maybe<ImageSharpResolutions>;
  readonly fluid: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes: Maybe<ImageSharpSizes>;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly blurHash: Maybe<BlurhashSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_resolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_sizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_blurHashArgs = {
  componentX?: Scalars['Int'];
  componentY?: Scalars['Int'];
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  cropFocus?: Maybe<ImageCropFocus>;
  rotate?: Maybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed.base64',
  fixed___tracedSVG = 'fixed.tracedSVG',
  fixed___aspectRatio = 'fixed.aspectRatio',
  fixed___width = 'fixed.width',
  fixed___height = 'fixed.height',
  fixed___src = 'fixed.src',
  fixed___srcSet = 'fixed.srcSet',
  fixed___srcWebp = 'fixed.srcWebp',
  fixed___srcSetWebp = 'fixed.srcSetWebp',
  fixed___originalName = 'fixed.originalName',
  resolutions___base64 = 'resolutions.base64',
  resolutions___tracedSVG = 'resolutions.tracedSVG',
  resolutions___aspectRatio = 'resolutions.aspectRatio',
  resolutions___width = 'resolutions.width',
  resolutions___height = 'resolutions.height',
  resolutions___src = 'resolutions.src',
  resolutions___srcSet = 'resolutions.srcSet',
  resolutions___srcWebp = 'resolutions.srcWebp',
  resolutions___srcSetWebp = 'resolutions.srcSetWebp',
  resolutions___originalName = 'resolutions.originalName',
  fluid___base64 = 'fluid.base64',
  fluid___tracedSVG = 'fluid.tracedSVG',
  fluid___aspectRatio = 'fluid.aspectRatio',
  fluid___src = 'fluid.src',
  fluid___srcSet = 'fluid.srcSet',
  fluid___srcWebp = 'fluid.srcWebp',
  fluid___srcSetWebp = 'fluid.srcSetWebp',
  fluid___sizes = 'fluid.sizes',
  fluid___originalImg = 'fluid.originalImg',
  fluid___originalName = 'fluid.originalName',
  fluid___presentationWidth = 'fluid.presentationWidth',
  fluid___presentationHeight = 'fluid.presentationHeight',
  sizes___base64 = 'sizes.base64',
  sizes___tracedSVG = 'sizes.tracedSVG',
  sizes___aspectRatio = 'sizes.aspectRatio',
  sizes___src = 'sizes.src',
  sizes___srcSet = 'sizes.srcSet',
  sizes___srcWebp = 'sizes.srcWebp',
  sizes___srcSetWebp = 'sizes.srcSetWebp',
  sizes___sizes = 'sizes.sizes',
  sizes___originalImg = 'sizes.originalImg',
  sizes___originalName = 'sizes.originalName',
  sizes___presentationWidth = 'sizes.presentationWidth',
  sizes___presentationHeight = 'sizes.presentationHeight',
  original___width = 'original.width',
  original___height = 'original.height',
  original___src = 'original.src',
  resize___src = 'resize.src',
  resize___tracedSVG = 'resize.tracedSVG',
  resize___width = 'resize.width',
  resize___height = 'resize.height',
  resize___aspectRatio = 'resize.aspectRatio',
  resize___originalName = 'resize.originalName',
  blurHash___base64Image = 'blurHash.base64Image',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly sizes: Maybe<ImageSharpSizesFilterInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly blurHash: Maybe<BlurhashSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResolutions = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpResolutionsFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpSizes = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};

type ImageSharpSizesFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

type MarkdownHeading = {
  readonly id: Maybe<Scalars['String']>;
  readonly value: Maybe<Scalars['String']>;
  readonly depth: Maybe<Scalars['Int']>;
};

type MarkdownHeadingFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
  readonly depth: Maybe<IntQueryOperatorInput>;
};

type MarkdownHeadingFilterListInput = {
  readonly elemMatch: Maybe<MarkdownHeadingFilterInput>;
};

enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

type MarkdownRemark = Node & {
  readonly id: Scalars['ID'];
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatter>;
  readonly excerpt: Maybe<Scalars['String']>;
  readonly rawMarkdownBody: Maybe<Scalars['String']>;
  readonly fileAbsolutePath: Maybe<Scalars['String']>;
  readonly fields: Maybe<MarkdownRemarkFields>;
  readonly html: Maybe<Scalars['String']>;
  readonly htmlAst: Maybe<Scalars['JSON']>;
  readonly excerptAst: Maybe<Scalars['JSON']>;
  readonly headings: Maybe<ReadonlyArray<Maybe<MarkdownHeading>>>;
  readonly timeToRead: Maybe<Scalars['Int']>;
  readonly tableOfContents: Maybe<Scalars['String']>;
  readonly wordCount: Maybe<MarkdownWordCount>;
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type MarkdownRemark_excerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


type MarkdownRemark_excerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


type MarkdownRemark_headingsArgs = {
  depth: Maybe<MarkdownHeadingLevels>;
};


type MarkdownRemark_tableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

type MarkdownRemarkConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<MarkdownRemarkGroupConnection>;
};


type MarkdownRemarkConnection_distinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


type MarkdownRemarkConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

type MarkdownRemarkEdge = {
  readonly next: Maybe<MarkdownRemark>;
  readonly node: MarkdownRemark;
  readonly previous: Maybe<MarkdownRemark>;
};

type MarkdownRemarkFields = {
  readonly slug: Maybe<Scalars['String']>;
};

enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___title = 'frontmatter.title',
  frontmatter___date = 'frontmatter.date',
  frontmatter___description = 'frontmatter.description',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___slug = 'fields.slug',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings.id',
  headings___value = 'headings.value',
  headings___depth = 'headings.depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount.paragraphs',
  wordCount___sentences = 'wordCount.sentences',
  wordCount___words = 'wordCount.words',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type MarkdownRemarkFieldsFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  readonly excerpt: Maybe<StringQueryOperatorInput>;
  readonly rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  readonly fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  readonly fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly htmlAst: Maybe<JSONQueryOperatorInput>;
  readonly excerptAst: Maybe<JSONQueryOperatorInput>;
  readonly headings: Maybe<MarkdownHeadingFilterListInput>;
  readonly timeToRead: Maybe<IntQueryOperatorInput>;
  readonly tableOfContents: Maybe<StringQueryOperatorInput>;
  readonly wordCount: Maybe<MarkdownWordCountFilterInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type MarkdownRemarkFrontmatter = {
  readonly title: Maybe<Scalars['String']>;
  readonly date: Maybe<Scalars['Date']>;
  readonly description: Maybe<Scalars['String']>;
};


type MarkdownRemarkFrontmatter_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type MarkdownRemarkFrontmatterFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly date: Maybe<DateQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
};

type MarkdownRemarkGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<MarkdownRemarkEdge>;
  readonly nodes: ReadonlyArray<MarkdownRemark>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type MarkdownRemarkSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<MarkdownRemarkFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type MarkdownWordCount = {
  readonly paragraphs: Maybe<Scalars['Int']>;
  readonly sentences: Maybe<Scalars['Int']>;
  readonly words: Maybe<Scalars['Int']>;
};

type MarkdownWordCountFilterInput = {
  readonly paragraphs: Maybe<IntQueryOperatorInput>;
  readonly sentences: Maybe<IntQueryOperatorInput>;
  readonly words: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority'
}

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly markdownRemark: Maybe<MarkdownRemark>;
  readonly allMarkdownRemark: MarkdownRemarkConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly graphQlSource: Maybe<GraphQLSource>;
  readonly allGraphQlSource: GraphQLSourceConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly github: Github;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  childMarkdownRemark: Maybe<MarkdownRemarkFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_markdownRemarkArgs = {
  id: Maybe<StringQueryOperatorInput>;
  frontmatter: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath: Maybe<StringQueryOperatorInput>;
  fields: Maybe<MarkdownRemarkFieldsFilterInput>;
  html: Maybe<StringQueryOperatorInput>;
  htmlAst: Maybe<JSONQueryOperatorInput>;
  excerptAst: Maybe<JSONQueryOperatorInput>;
  headings: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IntQueryOperatorInput>;
  tableOfContents: Maybe<StringQueryOperatorInput>;
  wordCount: Maybe<MarkdownWordCountFilterInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allMarkdownRemarkArgs = {
  filter: Maybe<MarkdownRemarkFilterInput>;
  sort: Maybe<MarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  resolutions: Maybe<ImageSharpResolutionsFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  sizes: Maybe<ImageSharpSizesFilterInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  blurHash: Maybe<BlurhashSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_graphQlSourceArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  typeName: Maybe<StringQueryOperatorInput>;
  fieldName: Maybe<StringQueryOperatorInput>;
};


type Query_allGraphQlSourceArgs = {
  filter: Maybe<GraphQLSourceFilterInput>;
  sort: Maybe<GraphQLSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  buildTime = 'buildTime'
}

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata.title',
  siteMetadata___author = 'siteMetadata.author',
  siteMetadata___description = 'siteMetadata.description',
  siteMetadata___siteUrl = 'siteMetadata.siteUrl',
  siteMetadata___social___twitter = 'siteMetadata.social.twitter',
  siteMetadata___social___mail = 'siteMetadata.social.mail',
  siteMetadata___repoName = 'siteMetadata.repoName',
  port = 'port',
  host = 'host',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  pluginCreator___id = 'pluginCreator.id',
  pluginCreator___parent___id = 'pluginCreator.parent.id',
  pluginCreator___parent___parent___id = 'pluginCreator.parent.parent.id',
  pluginCreator___parent___parent___children = 'pluginCreator.parent.parent.children',
  pluginCreator___parent___children = 'pluginCreator.parent.children',
  pluginCreator___parent___children___id = 'pluginCreator.parent.children.id',
  pluginCreator___parent___children___children = 'pluginCreator.parent.children.children',
  pluginCreator___parent___internal___content = 'pluginCreator.parent.internal.content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator.parent.internal.contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator.parent.internal.description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator.parent.internal.fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator.parent.internal.ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator.parent.internal.mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator.parent.internal.owner',
  pluginCreator___parent___internal___type = 'pluginCreator.parent.internal.type',
  pluginCreator___children = 'pluginCreator.children',
  pluginCreator___children___id = 'pluginCreator.children.id',
  pluginCreator___children___parent___id = 'pluginCreator.children.parent.id',
  pluginCreator___children___parent___children = 'pluginCreator.children.parent.children',
  pluginCreator___children___children = 'pluginCreator.children.children',
  pluginCreator___children___children___id = 'pluginCreator.children.children.id',
  pluginCreator___children___children___children = 'pluginCreator.children.children.children',
  pluginCreator___children___internal___content = 'pluginCreator.children.internal.content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator.children.internal.contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator.children.internal.description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator.children.internal.fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator.children.internal.ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator.children.internal.mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator.children.internal.owner',
  pluginCreator___children___internal___type = 'pluginCreator.children.internal.type',
  pluginCreator___internal___content = 'pluginCreator.internal.content',
  pluginCreator___internal___contentDigest = 'pluginCreator.internal.contentDigest',
  pluginCreator___internal___description = 'pluginCreator.internal.description',
  pluginCreator___internal___fieldOwners = 'pluginCreator.internal.fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator.internal.ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator.internal.mediaType',
  pluginCreator___internal___owner = 'pluginCreator.internal.owner',
  pluginCreator___internal___type = 'pluginCreator.internal.type',
  pluginCreator___resolve = 'pluginCreator.resolve',
  pluginCreator___name = 'pluginCreator.name',
  pluginCreator___version = 'pluginCreator.version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator.pluginOptions.plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator.pluginOptions.plugins.resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator.pluginOptions.plugins.id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator.pluginOptions.plugins.name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator.pluginOptions.plugins.version',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator.pluginOptions.plugins.browserAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator.pluginOptions.plugins.pluginFilepath',
  pluginCreator___pluginOptions___typeName = 'pluginCreator.pluginOptions.typeName',
  pluginCreator___pluginOptions___fieldName = 'pluginCreator.pluginOptions.fieldName',
  pluginCreator___pluginOptions___headers___Authorization = 'pluginCreator.pluginOptions.headers.Authorization',
  pluginCreator___pluginOptions___url = 'pluginCreator.pluginOptions.url',
  pluginCreator___pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginCreator___pluginOptions___path = 'pluginCreator.pluginOptions.path',
  pluginCreator___pluginOptions___name = 'pluginCreator.pluginOptions.name',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator.pluginOptions.maxWidth',
  pluginCreator___pluginOptions___wrapperStyle = 'pluginCreator.pluginOptions.wrapperStyle',
  pluginCreator___pluginOptions___short_name = 'pluginCreator.pluginOptions.short_name',
  pluginCreator___pluginOptions___start_url = 'pluginCreator.pluginOptions.start_url',
  pluginCreator___pluginOptions___background_color = 'pluginCreator.pluginOptions.background_color',
  pluginCreator___pluginOptions___theme_color = 'pluginCreator.pluginOptions.theme_color',
  pluginCreator___pluginOptions___display = 'pluginCreator.pluginOptions.display',
  pluginCreator___pluginOptions___icon = 'pluginCreator.pluginOptions.icon',
  pluginCreator___pluginOptions___theme_color_in_head = 'pluginCreator.pluginOptions.theme_color_in_head',
  pluginCreator___pluginOptions___cache_busting_mode = 'pluginCreator.pluginOptions.cache_busting_mode',
  pluginCreator___pluginOptions___include_favicon = 'pluginCreator.pluginOptions.include_favicon',
  pluginCreator___pluginOptions___legacy = 'pluginCreator.pluginOptions.legacy',
  pluginCreator___pluginOptions___cacheDigest = 'pluginCreator.pluginOptions.cacheDigest',
  pluginCreator___pluginOptions___pathToConfigModule = 'pluginCreator.pluginOptions.pathToConfigModule',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator.pluginOptions.pathCheck',
  pluginCreator___nodeAPIs = 'pluginCreator.nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator.browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator.ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator.pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator.packageJson.name',
  pluginCreator___packageJson___description = 'pluginCreator.packageJson.description',
  pluginCreator___packageJson___version = 'pluginCreator.packageJson.version',
  pluginCreator___packageJson___main = 'pluginCreator.packageJson.main',
  pluginCreator___packageJson___license = 'pluginCreator.packageJson.license',
  pluginCreator___packageJson___dependencies = 'pluginCreator.packageJson.dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator.packageJson.dependencies.name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator.packageJson.dependencies.version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator.packageJson.devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator.packageJson.devDependencies.name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator.packageJson.devDependencies.version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator.packageJson.peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator.packageJson.peerDependencies.name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator.packageJson.peerDependencies.version',
  pluginCreator___packageJson___keywords = 'pluginCreator.packageJson.keywords',
  pluginCreatorId = 'pluginCreatorId',
  componentPath = 'componentPath',
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent.id',
  parent___parent___id = 'parent.parent.id',
  parent___parent___parent___id = 'parent.parent.parent.id',
  parent___parent___parent___children = 'parent.parent.parent.children',
  parent___parent___children = 'parent.parent.children',
  parent___parent___children___id = 'parent.parent.children.id',
  parent___parent___children___children = 'parent.parent.children.children',
  parent___parent___internal___content = 'parent.parent.internal.content',
  parent___parent___internal___contentDigest = 'parent.parent.internal.contentDigest',
  parent___parent___internal___description = 'parent.parent.internal.description',
  parent___parent___internal___fieldOwners = 'parent.parent.internal.fieldOwners',
  parent___parent___internal___ignoreType = 'parent.parent.internal.ignoreType',
  parent___parent___internal___mediaType = 'parent.parent.internal.mediaType',
  parent___parent___internal___owner = 'parent.parent.internal.owner',
  parent___parent___internal___type = 'parent.parent.internal.type',
  parent___children = 'parent.children',
  parent___children___id = 'parent.children.id',
  parent___children___parent___id = 'parent.children.parent.id',
  parent___children___parent___children = 'parent.children.parent.children',
  parent___children___children = 'parent.children.children',
  parent___children___children___id = 'parent.children.children.id',
  parent___children___children___children = 'parent.children.children.children',
  parent___children___internal___content = 'parent.children.internal.content',
  parent___children___internal___contentDigest = 'parent.children.internal.contentDigest',
  parent___children___internal___description = 'parent.children.internal.description',
  parent___children___internal___fieldOwners = 'parent.children.internal.fieldOwners',
  parent___children___internal___ignoreType = 'parent.children.internal.ignoreType',
  parent___children___internal___mediaType = 'parent.children.internal.mediaType',
  parent___children___internal___owner = 'parent.children.internal.owner',
  parent___children___internal___type = 'parent.children.internal.type',
  parent___internal___content = 'parent.internal.content',
  parent___internal___contentDigest = 'parent.internal.contentDigest',
  parent___internal___description = 'parent.internal.description',
  parent___internal___fieldOwners = 'parent.internal.fieldOwners',
  parent___internal___ignoreType = 'parent.internal.ignoreType',
  parent___internal___mediaType = 'parent.internal.mediaType',
  parent___internal___owner = 'parent.internal.owner',
  parent___internal___type = 'parent.internal.type',
  children = 'children',
  children___id = 'children.id',
  children___parent___id = 'children.parent.id',
  children___parent___parent___id = 'children.parent.parent.id',
  children___parent___parent___children = 'children.parent.parent.children',
  children___parent___children = 'children.parent.children',
  children___parent___children___id = 'children.parent.children.id',
  children___parent___children___children = 'children.parent.children.children',
  children___parent___internal___content = 'children.parent.internal.content',
  children___parent___internal___contentDigest = 'children.parent.internal.contentDigest',
  children___parent___internal___description = 'children.parent.internal.description',
  children___parent___internal___fieldOwners = 'children.parent.internal.fieldOwners',
  children___parent___internal___ignoreType = 'children.parent.internal.ignoreType',
  children___parent___internal___mediaType = 'children.parent.internal.mediaType',
  children___parent___internal___owner = 'children.parent.internal.owner',
  children___parent___internal___type = 'children.parent.internal.type',
  children___children = 'children.children',
  children___children___id = 'children.children.id',
  children___children___parent___id = 'children.children.parent.id',
  children___children___parent___children = 'children.children.parent.children',
  children___children___children = 'children.children.children',
  children___children___children___id = 'children.children.children.id',
  children___children___children___children = 'children.children.children.children',
  children___children___internal___content = 'children.children.internal.content',
  children___children___internal___contentDigest = 'children.children.internal.contentDigest',
  children___children___internal___description = 'children.children.internal.description',
  children___children___internal___fieldOwners = 'children.children.internal.fieldOwners',
  children___children___internal___ignoreType = 'children.children.internal.ignoreType',
  children___children___internal___mediaType = 'children.children.internal.mediaType',
  children___children___internal___owner = 'children.children.internal.owner',
  children___children___internal___type = 'children.children.internal.type',
  children___internal___content = 'children.internal.content',
  children___internal___contentDigest = 'children.internal.contentDigest',
  children___internal___description = 'children.internal.description',
  children___internal___fieldOwners = 'children.internal.fieldOwners',
  children___internal___ignoreType = 'children.internal.ignoreType',
  children___internal___mediaType = 'children.internal.mediaType',
  children___internal___owner = 'children.internal.owner',
  children___internal___type = 'children.internal.type',
  internal___content = 'internal.content',
  internal___contentDigest = 'internal.contentDigest',
  internal___description = 'internal.description',
  internal___fieldOwners = 'internal.fieldOwners',
  internal___ignoreType = 'internal.ignoreType',
  internal___mediaType = 'internal.mediaType',
  internal___owner = 'internal.owner',
  internal___type = 'internal.type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions.plugins',
  pluginOptions___plugins___resolve = 'pluginOptions.plugins.resolve',
  pluginOptions___plugins___id = 'pluginOptions.plugins.id',
  pluginOptions___plugins___name = 'pluginOptions.plugins.name',
  pluginOptions___plugins___version = 'pluginOptions.plugins.version',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions.plugins.pluginOptions.maxWidth',
  pluginOptions___plugins___pluginOptions___wrapperStyle = 'pluginOptions.plugins.pluginOptions.wrapperStyle',
  pluginOptions___plugins___browserAPIs = 'pluginOptions.plugins.browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions.plugins.pluginFilepath',
  pluginOptions___typeName = 'pluginOptions.typeName',
  pluginOptions___fieldName = 'pluginOptions.fieldName',
  pluginOptions___headers___Authorization = 'pluginOptions.headers.Authorization',
  pluginOptions___url = 'pluginOptions.url',
  pluginOptions___emitPluginDocuments___src___generated___gatsby_plugin_documents_graphql = 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql',
  pluginOptions___path = 'pluginOptions.path',
  pluginOptions___name = 'pluginOptions.name',
  pluginOptions___maxWidth = 'pluginOptions.maxWidth',
  pluginOptions___wrapperStyle = 'pluginOptions.wrapperStyle',
  pluginOptions___short_name = 'pluginOptions.short_name',
  pluginOptions___start_url = 'pluginOptions.start_url',
  pluginOptions___background_color = 'pluginOptions.background_color',
  pluginOptions___theme_color = 'pluginOptions.theme_color',
  pluginOptions___display = 'pluginOptions.display',
  pluginOptions___icon = 'pluginOptions.icon',
  pluginOptions___theme_color_in_head = 'pluginOptions.theme_color_in_head',
  pluginOptions___cache_busting_mode = 'pluginOptions.cache_busting_mode',
  pluginOptions___include_favicon = 'pluginOptions.include_favicon',
  pluginOptions___legacy = 'pluginOptions.legacy',
  pluginOptions___cacheDigest = 'pluginOptions.cacheDigest',
  pluginOptions___pathToConfigModule = 'pluginOptions.pathToConfigModule',
  pluginOptions___pathCheck = 'pluginOptions.pathCheck',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson.name',
  packageJson___description = 'packageJson.description',
  packageJson___version = 'packageJson.version',
  packageJson___main = 'packageJson.main',
  packageJson___license = 'packageJson.license',
  packageJson___dependencies = 'packageJson.dependencies',
  packageJson___dependencies___name = 'packageJson.dependencies.name',
  packageJson___dependencies___version = 'packageJson.dependencies.version',
  packageJson___devDependencies = 'packageJson.devDependencies',
  packageJson___devDependencies___name = 'packageJson.devDependencies.name',
  packageJson___devDependencies___version = 'packageJson.devDependencies.version',
  packageJson___peerDependencies = 'packageJson.peerDependencies',
  packageJson___peerDependencies___name = 'packageJson.peerDependencies.name',
  packageJson___peerDependencies___version = 'packageJson.peerDependencies.version',
  packageJson___keywords = 'packageJson.keywords'
}

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPluginOptions = {
  readonly plugins: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsPlugins>>>;
  readonly typeName: Maybe<Scalars['String']>;
  readonly fieldName: Maybe<Scalars['String']>;
  readonly headers: Maybe<SitePluginPluginOptionsHeaders>;
  readonly url: Maybe<Scalars['String']>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly path: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly pathToConfigModule: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly plugins: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  readonly typeName: Maybe<StringQueryOperatorInput>;
  readonly fieldName: Maybe<StringQueryOperatorInput>;
  readonly headers: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly pathToConfigModule: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsHeaders = {
  readonly Authorization: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsHeadersFilterInput = {
  readonly Authorization: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPlugins = {
  readonly resolve: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsPluginsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

type SitePluginPluginOptionsPluginsPluginOptions = {
  readonly maxWidth: Maybe<Scalars['Int']>;
  readonly wrapperStyle: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  readonly maxWidth: Maybe<IntQueryOperatorInput>;
  readonly wrapperStyle: Maybe<StringQueryOperatorInput>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly author: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly social: Maybe<SiteSiteMetadataSocial>;
  readonly repoName: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly author: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly social: Maybe<SiteSiteMetadataSocialFilterInput>;
  readonly repoName: Maybe<StringQueryOperatorInput>;
};

type SiteSiteMetadataSocial = {
  readonly twitter: Maybe<Scalars['String']>;
  readonly mail: Maybe<Scalars['String']>;
};

type SiteSiteMetadataSocialFilterInput = {
  readonly twitter: Maybe<StringQueryOperatorInput>;
  readonly mail: Maybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type BlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['Int'];
}>;


type BlogPostBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly github: { readonly viewer: { readonly repository: Maybe<(
        Pick<Github_Repository, 'name'>
        & { readonly issue: Maybe<Pick<Github_Issue, 'id' | 'number' | 'title' | 'resourcePath' | 'createdAt' | 'bodyHTML' | 'body' | 'customHTML'>> }
      )> } } };

type StaticBlogPostBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


type StaticBlogPostBySlugQuery = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly markdownRemark: Maybe<(
    Pick<MarkdownRemark, 'id' | 'html' | 'timeToRead'>
    & { readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'title' | 'date'>>, readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>> }
  )> };

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type homepreetjdpProductsblogsrcpages404Js3159585216QueryVariables = Exact<{ [key: string]: never; }>;


type homepreetjdpProductsblogsrcpages404Js3159585216Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type homepreetjdpProductsblogsrcpagesindexTsx871773079QueryVariables = Exact<{ [key: string]: never; }>;


type homepreetjdpProductsblogsrcpagesindexTsx871773079Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMarkdownRemark: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'date' | 'title' | 'description'>> }
      ) }> }, readonly github: { readonly viewer: { readonly repository: Maybe<{ readonly issues: { readonly nodes: Maybe<ReadonlyArray<Maybe<Pick<Github_Issue, 'id' | 'number' | 'title' | 'resourcePath' | 'createdAt' | 'bodyHTML'>>>> } }> } } };

type homepreetjdpProductsblogsrcpagesusingTypescriptTsx2907560070QueryVariables = Exact<{ [key: string]: never; }>;


type homepreetjdpProductsblogsrcpagesusingTypescriptTsx2907560070Query = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type BioQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BioQueryQuery = { readonly avatar: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixed_noBase64Fragment>, readonly blurHash: Maybe<Pick<BlurhashSharp, 'base64Image'>> }> }>, readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'author' | 'description'>
      & { readonly social: Maybe<Pick<SiteSiteMetadataSocial, 'twitter'>> }
    )> }> };

type homepreetjdpProductsblogsrccomponentsseoTsx2039842131QueryVariables = Exact<{ [key: string]: never; }>;


type homepreetjdpProductsblogsrccomponentsseoTsx2039842131Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'siteUrl' | 'description'>
      & { readonly social: Maybe<Pick<SiteSiteMetadataSocial, 'twitter'>> }
    )> }>, readonly icon: Maybe<(
    Pick<File, 'absolutePath'>
    & { readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixed_noBase64Fragment> }> }
  )> };

type homepreetjdpProductsblogsrccomponentsToggleTsx4245473236QueryVariables = Exact<{ [key: string]: never; }>;


type homepreetjdpProductsblogsrccomponentsToggleTsx4245473236Query = { readonly switchOnSound: Maybe<Pick<File, 'publicURL'>>, readonly switchOffSound: Maybe<Pick<File, 'publicURL'>> };

}