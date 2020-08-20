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

/** The query root of GitHub's GraphQL interface. */
type Github = {
  /** Look up a code of conduct by its key */
  readonly codeOfConduct: Maybe<Github_CodeOfConduct>;
  /** Look up a code of conduct by its key */
  readonly codesOfConduct: Maybe<ReadonlyArray<Maybe<Github_CodeOfConduct>>>;
  /** Look up an enterprise by URL slug. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** Look up a pending enterprise administrator invitation by invitee, enterprise and role. */
  readonly enterpriseAdministratorInvitation: Maybe<Github_EnterpriseAdministratorInvitation>;
  /** Look up a pending enterprise administrator invitation by invitation token. */
  readonly enterpriseAdministratorInvitationByToken: Maybe<Github_EnterpriseAdministratorInvitation>;
  /** Look up an open source license by its key */
  readonly license: Maybe<Github_License>;
  /** Return a list of known open source licenses */
  readonly licenses: ReadonlyArray<Maybe<Github_License>>;
  /** Get alphabetically sorted list of Marketplace categories */
  readonly marketplaceCategories: ReadonlyArray<Github_MarketplaceCategory>;
  /** Look up a Marketplace category by its slug. */
  readonly marketplaceCategory: Maybe<Github_MarketplaceCategory>;
  /** Look up a single Marketplace listing */
  readonly marketplaceListing: Maybe<Github_MarketplaceListing>;
  /** Look up Marketplace listings */
  readonly marketplaceListings: Github_MarketplaceListingConnection;
  /** Return information about the GitHub instance */
  readonly meta: Github_GitHubMetadata;
  /** Fetches an object given its ID. */
  readonly node: Maybe<Github_Node>;
  /** Lookup nodes by a list of IDs. */
  readonly nodes: ReadonlyArray<Maybe<Github_Node>>;
  /** Lookup a organization by login. */
  readonly organization: Maybe<Github_Organization>;
  /** The client's rate limit information. */
  readonly rateLimit: Maybe<Github_RateLimit>;
  /** Hack to workaround https://github.com/facebook/relay/issues/112 re-exposing the root query object */
  readonly relay: Query;
  /** Lookup a given repository by the owner and repository name. */
  readonly repository: Maybe<Github_Repository>;
  /** Lookup a repository owner (ie. either a User or an Organization) by login. */
  readonly repositoryOwner: Maybe<Github_RepositoryOwner>;
  /** Lookup resource by a URL. */
  readonly resource: Maybe<Github_UniformResourceLocatable>;
  /** Perform a search across resources. */
  readonly search: Github_SearchResultItemConnection;
  /** GitHub Security Advisories */
  readonly securityAdvisories: Github_SecurityAdvisoryConnection;
  /** Fetch a Security Advisory by its GHSA ID */
  readonly securityAdvisory: Maybe<Github_SecurityAdvisory>;
  /** Software Vulnerabilities documented by GitHub Security Advisories */
  readonly securityVulnerabilities: Github_SecurityVulnerabilityConnection;
  /**
   * Look up a single Sponsors Listing
   * @deprecated `Query.sponsorsListing` will be removed. Use `Sponsorable.sponsorsListing` instead. Removal on 2020-04-01 UTC.
   */
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  /** Look up a topic by name. */
  readonly topic: Maybe<Github_Topic>;
  /** Lookup a user by login. */
  readonly user: Maybe<Github_User>;
  /** The currently authenticated user. */
  readonly viewer: Github_User;
};


/** The query root of GitHub's GraphQL interface. */
type Github_codeOfConductArgs = {
  key: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_enterpriseArgs = {
  slug: Scalars['String'];
  invitationToken: Maybe<Scalars['String']>;
};


/** The query root of GitHub's GraphQL interface. */
type Github_enterpriseAdministratorInvitationArgs = {
  userLogin: Scalars['String'];
  enterpriseSlug: Scalars['String'];
  role: Github_EnterpriseAdministratorRole;
};


/** The query root of GitHub's GraphQL interface. */
type Github_enterpriseAdministratorInvitationByTokenArgs = {
  invitationToken: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_licenseArgs = {
  key: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_marketplaceCategoriesArgs = {
  includeCategories: Maybe<ReadonlyArray<Scalars['String']>>;
  excludeEmpty: Maybe<Scalars['Boolean']>;
  excludeSubcategories: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
type Github_marketplaceCategoryArgs = {
  slug: Scalars['String'];
  useTopicAliases: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
type Github_marketplaceListingArgs = {
  slug: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
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


/** The query root of GitHub's GraphQL interface. */
type Github_nodeArgs = {
  id: Scalars['ID'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_nodesArgs = {
  ids: ReadonlyArray<Scalars['ID']>;
};


/** The query root of GitHub's GraphQL interface. */
type Github_organizationArgs = {
  login: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_rateLimitArgs = {
  dryRun?: Maybe<Scalars['Boolean']>;
};


/** The query root of GitHub's GraphQL interface. */
type Github_repositoryArgs = {
  owner: Scalars['String'];
  name: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_repositoryOwnerArgs = {
  login: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_resourceArgs = {
  url: Scalars['Github_URI'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_searchArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Scalars['String'];
  type: Github_SearchType;
};


/** The query root of GitHub's GraphQL interface. */
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


/** The query root of GitHub's GraphQL interface. */
type Github_securityAdvisoryArgs = {
  ghsaId: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
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


/** The query root of GitHub's GraphQL interface. */
type Github_sponsorsListingArgs = {
  slug: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_topicArgs = {
  name: Scalars['String'];
};


/** The query root of GitHub's GraphQL interface. */
type Github_userArgs = {
  login: Scalars['String'];
};

/** Autogenerated input type of AcceptEnterpriseAdministratorInvitation */
type Github_AcceptEnterpriseAdministratorInvitationInput = {
  /** The id of the invitation being accepted */
  readonly invitationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AcceptEnterpriseAdministratorInvitation */
type Github_AcceptEnterpriseAdministratorInvitationPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The invitation that was accepted. */
  readonly invitation: Maybe<Github_EnterpriseAdministratorInvitation>;
  /** A message confirming the result of accepting an administrator invitation. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of AcceptTopicSuggestion */
type Github_AcceptTopicSuggestionInput = {
  /** The Node ID of the repository. */
  readonly repositoryId: Scalars['ID'];
  /** The name of the suggested topic. */
  readonly name: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AcceptTopicSuggestion */
type Github_AcceptTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The accepted topic. */
  readonly topic: Maybe<Github_Topic>;
};

/** The possible capabilities for action executions setting. */
enum Github_ActionExecutionCapabilitySetting {
  /** All action executions are disabled. */
  DISABLED = 'DISABLED',
  /** All action executions are enabled. */
  ALL_ACTIONS = 'ALL_ACTIONS',
  /** Only actions defined within the repo are allowed. */
  LOCAL_ACTIONS_ONLY = 'LOCAL_ACTIONS_ONLY',
  /** Organization administrators action execution capabilities. */
  NO_POLICY = 'NO_POLICY'
}

/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
type Github_Actor = {
  /** A URL pointing to the actor's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** The username of the actor. */
  readonly login: Scalars['String'];
  /** The HTTP path for this actor. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this actor. */
  readonly url: Scalars['Github_URI'];
};


/** Represents an object which can take actions on GitHub. Typically a User or Bot. */
type Github_Actor_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

/** Location information for an actor */
type Github_ActorLocation = {
  /** City */
  readonly city: Maybe<Scalars['String']>;
  /** Country name */
  readonly country: Maybe<Scalars['String']>;
  /** Country code */
  readonly countryCode: Maybe<Scalars['String']>;
  /** Region name */
  readonly region: Maybe<Scalars['String']>;
  /** Region or state code */
  readonly regionCode: Maybe<Scalars['String']>;
};

/** Autogenerated input type of AddAssigneesToAssignable */
type Github_AddAssigneesToAssignableInput = {
  /** The id of the assignable object to add assignees to. */
  readonly assignableId: Scalars['ID'];
  /** The id of users to add as assignees. */
  readonly assigneeIds: ReadonlyArray<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddAssigneesToAssignable */
type Github_AddAssigneesToAssignablePayload = {
  /** The item that was assigned. */
  readonly assignable: Maybe<Github_Assignable>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of AddComment */
type Github_AddCommentInput = {
  /** The Node ID of the subject to modify. */
  readonly subjectId: Scalars['ID'];
  /** The contents of the comment. */
  readonly body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddComment */
type Github_AddCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The edge from the subject's comment connection. */
  readonly commentEdge: Maybe<Github_IssueCommentEdge>;
  /** The subject */
  readonly subject: Maybe<Github_Node>;
  /** The edge from the subject's timeline connection. */
  readonly timelineEdge: Maybe<Github_IssueTimelineItemEdge>;
};

/** Represents a 'added_to_project' event on a given issue or pull request. */
type Github_AddedToProjectEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Autogenerated input type of AddLabelsToLabelable */
type Github_AddLabelsToLabelableInput = {
  /** The id of the labelable object to add labels to. */
  readonly labelableId: Scalars['ID'];
  /** The ids of the labels to add. */
  readonly labelIds: ReadonlyArray<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddLabelsToLabelable */
type Github_AddLabelsToLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The item that was labeled. */
  readonly labelable: Maybe<Github_Labelable>;
};

/** Autogenerated input type of AddProjectCard */
type Github_AddProjectCardInput = {
  /** The Node ID of the ProjectColumn. */
  readonly projectColumnId: Scalars['ID'];
  /** The content of the card. Must be a member of the ProjectCardItem union */
  readonly contentId: Maybe<Scalars['ID']>;
  /** The note on the card. */
  readonly note: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddProjectCard */
type Github_AddProjectCardPayload = {
  /** The edge from the ProjectColumn's card connection. */
  readonly cardEdge: Maybe<Github_ProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The ProjectColumn */
  readonly projectColumn: Maybe<Github_ProjectColumn>;
};

/** Autogenerated input type of AddProjectColumn */
type Github_AddProjectColumnInput = {
  /** The Node ID of the project. */
  readonly projectId: Scalars['ID'];
  /** The name of the column. */
  readonly name: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddProjectColumn */
type Github_AddProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The edge from the project's column connection. */
  readonly columnEdge: Maybe<Github_ProjectColumnEdge>;
  /** The project */
  readonly project: Maybe<Github_Project>;
};

/** Autogenerated input type of AddPullRequestReviewComment */
type Github_AddPullRequestReviewCommentInput = {
  /** The node ID of the pull request reviewing */
  readonly pullRequestId: Maybe<Scalars['ID']>;
  /** The Node ID of the review to modify. */
  readonly pullRequestReviewId: Maybe<Scalars['ID']>;
  /** The SHA of the commit to comment on. */
  readonly commitOID: Maybe<Scalars['Github_GitObjectID']>;
  /** The text of the comment. */
  readonly body: Scalars['String'];
  /** The relative path of the file to comment on. */
  readonly path: Maybe<Scalars['String']>;
  /** The line index in the diff to comment on. */
  readonly position: Maybe<Scalars['Int']>;
  /** The comment id to reply to. */
  readonly inReplyTo: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddPullRequestReviewComment */
type Github_AddPullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The newly created comment. */
  readonly comment: Maybe<Github_PullRequestReviewComment>;
  /** The edge from the review's comment connection. */
  readonly commentEdge: Maybe<Github_PullRequestReviewCommentEdge>;
};

/** Autogenerated input type of AddPullRequestReview */
type Github_AddPullRequestReviewInput = {
  /** The Node ID of the pull request to modify. */
  readonly pullRequestId: Scalars['ID'];
  /** The commit OID the review pertains to. */
  readonly commitOID: Maybe<Scalars['Github_GitObjectID']>;
  /** The contents of the review body comment. */
  readonly body: Maybe<Scalars['String']>;
  /** The event to perform on the pull request review. */
  readonly event: Maybe<Github_PullRequestReviewEvent>;
  /** The review line comments. */
  readonly comments: Maybe<ReadonlyArray<Maybe<Github_DraftPullRequestReviewComment>>>;
  /** The review line comment threads. */
  readonly threads: Maybe<ReadonlyArray<Maybe<Github_DraftPullRequestReviewThread>>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddPullRequestReview */
type Github_AddPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The newly created pull request review. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
  /** The edge from the pull request's review connection. */
  readonly reviewEdge: Maybe<Github_PullRequestReviewEdge>;
};

/** Autogenerated input type of AddPullRequestReviewThread */
type Github_AddPullRequestReviewThreadInput = {
  /** Path to the file being commented on. */
  readonly path: Scalars['String'];
  /** Body of the thread's first comment. */
  readonly body: Scalars['String'];
  /** The node ID of the pull request reviewing */
  readonly pullRequestId: Maybe<Scalars['ID']>;
  /** The Node ID of the review to modify. */
  readonly pullRequestReviewId: Maybe<Scalars['ID']>;
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  readonly line: Scalars['Int'];
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  readonly side: Maybe<Github_DiffSide>;
  /** The first line of the range to which the comment refers. */
  readonly startLine: Maybe<Scalars['Int']>;
  /** The side of the diff on which the start line resides. */
  readonly startSide: Maybe<Github_DiffSide>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddPullRequestReviewThread */
type Github_AddPullRequestReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The newly created thread. */
  readonly thread: Maybe<Github_PullRequestReviewThread>;
};

/** Autogenerated input type of AddReaction */
type Github_AddReactionInput = {
  /** The Node ID of the subject to modify. */
  readonly subjectId: Scalars['ID'];
  /** The name of the emoji to react with. */
  readonly content: Github_ReactionContent;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddReaction */
type Github_AddReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The reaction object. */
  readonly reaction: Maybe<Github_Reaction>;
  /** The reactable subject. */
  readonly subject: Maybe<Github_Reactable>;
};

/** Autogenerated input type of AddStar */
type Github_AddStarInput = {
  /** The Starrable ID to star. */
  readonly starrableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of AddStar */
type Github_AddStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The starrable. */
  readonly starrable: Maybe<Github_Starrable>;
};

/** A GitHub App. */
type Github_App = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The description of the app. */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The hex color code, without the leading '#', for the logo background. */
  readonly logoBackgroundColor: Scalars['String'];
  /** A URL pointing to the app's logo. */
  readonly logoUrl: Scalars['Github_URI'];
  /** The name of the app. */
  readonly name: Scalars['String'];
  /** A slug based on the name of the app for use in URLs. */
  readonly slug: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The URL to the app's homepage. */
  readonly url: Scalars['Github_URI'];
};


/** A GitHub App. */
type Github_App_logoUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of ArchiveRepository */
type Github_ArchiveRepositoryInput = {
  /** The ID of the repository to mark as archived. */
  readonly repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ArchiveRepository */
type Github_ArchiveRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The repository that was marked as archived. */
  readonly repository: Maybe<Github_Repository>;
};

/** An object that can have users assigned to it. */
type Github_Assignable = {
  /** A list of Users assigned to this object. */
  readonly assignees: Github_UserConnection;
};


/** An object that can have users assigned to it. */
type Github_Assignable_assigneesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Represents an 'assigned' event on any assignable object. */
type Github_AssignedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the assignable associated with the event. */
  readonly assignable: Github_Assignable;
  /** Identifies the user or mannequin that was assigned. */
  readonly assignee: Maybe<Github_Assignee>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /**
   * Identifies the user who was assigned.
   * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
   */
  readonly user: Maybe<Github_User>;
};

/** Types that can be assigned to issues. */
type Github_Assignee = Github_Bot | Github_Mannequin | Github_Organization | Github_User;

/** An entry in the audit log. */
type Github_AuditEntry = {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Types that can initiate an audit log event. */
type Github_AuditEntryActor = Github_Bot | Github_Organization | Github_User;

/** Ordering options for Audit Log connections. */
type Github_AuditLogOrder = {
  /** The field to order Audit Logs by. */
  readonly field: Maybe<Github_AuditLogOrderField>;
  /** The ordering direction. */
  readonly direction: Maybe<Github_OrderDirection>;
};

/** Properties by which Audit Log connections can be ordered. */
enum Github_AuditLogOrderField {
  /** Order audit log entries by timestamp */
  CREATED_AT = 'CREATED_AT'
}

/** Represents a 'automatic_base_change_failed' event on a given pull request. */
type Github_AutomaticBaseChangeFailedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** The new base for this PR */
  readonly newBase: Scalars['String'];
  /** The old base for this PR */
  readonly oldBase: Scalars['String'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
};

/** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
type Github_AutomaticBaseChangeSucceededEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** The new base for this PR */
  readonly newBase: Scalars['String'];
  /** The old base for this PR */
  readonly oldBase: Scalars['String'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
};

/** Represents a 'base_ref_changed' event on a given issue or pull request. */
type Github_BaseRefChangedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Represents a 'base_ref_force_pushed' event on a given pull request. */
type Github_BaseRefForcePushedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the after commit SHA for the 'base_ref_force_pushed' event. */
  readonly afterCommit: Maybe<Github_Commit>;
  /** Identifies the before commit SHA for the 'base_ref_force_pushed' event. */
  readonly beforeCommit: Maybe<Github_Commit>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** Identifies the fully qualified ref name for the 'base_ref_force_pushed' event. */
  readonly ref: Maybe<Github_Ref>;
};

/** Represents a Git blame. */
type Github_Blame = {
  /** The list of ranges from a Git blame. */
  readonly ranges: ReadonlyArray<Github_BlameRange>;
};

/** Represents a range of information from a Git blame. */
type Github_BlameRange = {
  /**
   * Identifies the recency of the change, from 1 (new) to 10 (old). This is
   * calculated as a 2-quantile and determines the length of distance between the
   * median age of all the changes in the file and the recency of the current
   * range's change.
   */
  readonly age: Scalars['Int'];
  /** Identifies the line author */
  readonly commit: Github_Commit;
  /** The ending line for the range */
  readonly endingLine: Scalars['Int'];
  /** The starting line for the range */
  readonly startingLine: Scalars['Int'];
};

/** Represents a Git blob. */
type Github_Blob = Github_Node & Github_GitObject & {
  /** An abbreviated version of the Git object ID */
  readonly abbreviatedOid: Scalars['String'];
  /** Byte size of Blob object */
  readonly byteSize: Scalars['Int'];
  /** The HTTP path for this Git object */
  readonly commitResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this Git object */
  readonly commitUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  /** Indicates whether the Blob is binary or text. Returns null if unable to determine the encoding. */
  readonly isBinary: Maybe<Scalars['Boolean']>;
  /** Indicates whether the contents is truncated */
  readonly isTruncated: Scalars['Boolean'];
  /** The Git object ID */
  readonly oid: Scalars['Github_GitObjectID'];
  /** The Repository the Git object belongs to */
  readonly repository: Github_Repository;
  /** UTF8 text data or null if the Blob is binary */
  readonly text: Maybe<Scalars['String']>;
};

/** A special type of user which takes actions on behalf of GitHub Apps. */
type Github_Bot = Github_Node & Github_Actor & Github_UniformResourceLocatable & {
  /** A URL pointing to the GitHub App's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** The username of the actor. */
  readonly login: Scalars['String'];
  /** The HTTP path for this bot */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this bot */
  readonly url: Scalars['Github_URI'];
};


/** A special type of user which takes actions on behalf of GitHub Apps. */
type Github_Bot_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

/** A branch protection rule. */
type Github_BranchProtectionRule = Github_Node & {
  /** A list of conflicts matching branches protection rule and other branch protection rules */
  readonly branchProtectionRuleConflicts: Github_BranchProtectionRuleConflictConnection;
  /** The actor who created this branch protection rule. */
  readonly creator: Maybe<Github_Actor>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  readonly dismissesStaleReviews: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  /** Can admins overwrite branch protection. */
  readonly isAdminEnforced: Scalars['Boolean'];
  /** Repository refs that are protected by this rule */
  readonly matchingRefs: Github_RefConnection;
  /** Identifies the protection rule pattern. */
  readonly pattern: Scalars['String'];
  /** A list push allowances for this branch protection rule. */
  readonly pushAllowances: Github_PushAllowanceConnection;
  /** The repository associated with this branch protection rule. */
  readonly repository: Maybe<Github_Repository>;
  /** Number of approving reviews required to update matching branches. */
  readonly requiredApprovingReviewCount: Maybe<Scalars['Int']>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  readonly requiredStatusCheckContexts: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** Are approving reviews required to update matching branches. */
  readonly requiresApprovingReviews: Scalars['Boolean'];
  /** Are reviews from code owners required to update matching branches. */
  readonly requiresCodeOwnerReviews: Scalars['Boolean'];
  /** Are commits required to be signed. */
  readonly requiresCommitSignatures: Scalars['Boolean'];
  /** Are status checks required to update matching branches. */
  readonly requiresStatusChecks: Scalars['Boolean'];
  /** Are branches required to be up to date before merging. */
  readonly requiresStrictStatusChecks: Scalars['Boolean'];
  /** Is pushing to matching branches restricted. */
  readonly restrictsPushes: Scalars['Boolean'];
  /** Is dismissal of pull request reviews restricted. */
  readonly restrictsReviewDismissals: Scalars['Boolean'];
  /** A list review dismissal allowances for this branch protection rule. */
  readonly reviewDismissalAllowances: Github_ReviewDismissalAllowanceConnection;
};


/** A branch protection rule. */
type Github_BranchProtectionRule_branchProtectionRuleConflictsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A branch protection rule. */
type Github_BranchProtectionRule_matchingRefsArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A branch protection rule. */
type Github_BranchProtectionRule_pushAllowancesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A branch protection rule. */
type Github_BranchProtectionRule_reviewDismissalAllowancesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** A conflict between two branch protection rules. */
type Github_BranchProtectionRuleConflict = {
  /** Identifies the branch protection rule. */
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  /** Identifies the conflicting branch protection rule. */
  readonly conflictingBranchProtectionRule: Maybe<Github_BranchProtectionRule>;
  /** Identifies the branch ref that has conflicting rules */
  readonly ref: Maybe<Github_Ref>;
};

/** The connection type for BranchProtectionRuleConflict. */
type Github_BranchProtectionRuleConflictConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRuleConflictEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRuleConflict>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_BranchProtectionRuleConflictEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_BranchProtectionRuleConflict>;
};

/** The connection type for BranchProtectionRule. */
type Github_BranchProtectionRuleConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRuleEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_BranchProtectionRule>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_BranchProtectionRuleEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_BranchProtectionRule>;
};

/** Autogenerated input type of CancelEnterpriseAdminInvitation */
type Github_CancelEnterpriseAdminInvitationInput = {
  /** The Node ID of the pending enterprise administrator invitation. */
  readonly invitationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CancelEnterpriseAdminInvitation */
type Github_CancelEnterpriseAdminInvitationPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The invitation that was canceled. */
  readonly invitation: Maybe<Github_EnterpriseAdministratorInvitation>;
  /** A message confirming the result of canceling an administrator invitation. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of ChangeUserStatus */
type Github_ChangeUserStatusInput = {
  /** The emoji to represent your status. Can either be a native Unicode emoji or an emoji name with colons, e.g., :grinning:. */
  readonly emoji: Maybe<Scalars['String']>;
  /** A short description of your current status. */
  readonly message: Maybe<Scalars['String']>;
  /**
   * The ID of the organization whose members will be allowed to see the status. If
   * omitted, the status will be publicly visible.
   */
  readonly organizationId: Maybe<Scalars['ID']>;
  /** Whether this status should indicate you are not fully available on GitHub, e.g., you are away. */
  readonly limitedAvailability: Maybe<Scalars['Boolean']>;
  /** If set, the user status will not be shown after this date. */
  readonly expiresAt: Maybe<Scalars['Github_DateTime']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ChangeUserStatus */
type Github_ChangeUserStatusPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** Your updated status. */
  readonly status: Maybe<Github_UserStatus>;
};

/** Autogenerated input type of ClearLabelsFromLabelable */
type Github_ClearLabelsFromLabelableInput = {
  /** The id of the labelable object to clear the labels from. */
  readonly labelableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ClearLabelsFromLabelable */
type Github_ClearLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The item that was unlabeled. */
  readonly labelable: Maybe<Github_Labelable>;
};

/** Autogenerated input type of CloneProject */
type Github_CloneProjectInput = {
  /** The owner ID to create the project under. */
  readonly targetOwnerId: Scalars['ID'];
  /** The source project to clone. */
  readonly sourceId: Scalars['ID'];
  /** Whether or not to clone the source project's workflows. */
  readonly includeWorkflows: Scalars['Boolean'];
  /** The name of the project. */
  readonly name: Scalars['String'];
  /** The description of the project. */
  readonly body: Maybe<Scalars['String']>;
  /** The visibility of the project, defaults to false (private). */
  readonly public: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CloneProject */
type Github_CloneProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The id of the JobStatus for populating cloned fields. */
  readonly jobStatusId: Maybe<Scalars['String']>;
  /** The new cloned project. */
  readonly project: Maybe<Github_Project>;
};

/** Autogenerated input type of CloneTemplateRepository */
type Github_CloneTemplateRepositoryInput = {
  /** The Node ID of the template repository. */
  readonly repositoryId: Scalars['ID'];
  /** The name of the new repository. */
  readonly name: Scalars['String'];
  /** The ID of the owner for the new repository. */
  readonly ownerId: Scalars['ID'];
  /** A short description of the new repository. */
  readonly description: Maybe<Scalars['String']>;
  /** Indicates the repository's visibility level. */
  readonly visibility: Github_RepositoryVisibility;
  /**
   * Whether to copy all branches from the template to the new repository. Defaults
   * to copying only the default branch of the template.
   */
  readonly includeAllBranches: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CloneTemplateRepository */
type Github_CloneTemplateRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new repository. */
  readonly repository: Maybe<Github_Repository>;
};

/** An object that can be closed */
type Github_Closable = {
  /** `true` if the object is closed (definition of closed may depend on type) */
  readonly closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
};

/** Represents a 'closed' event on any `Closable`. */
type Github_ClosedEvent = Github_Node & Github_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Object that was closed. */
  readonly closable: Github_Closable;
  /** Object which triggered the creation of this event. */
  readonly closer: Maybe<Github_Closer>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** The HTTP path for this closed event. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this closed event. */
  readonly url: Scalars['Github_URI'];
};

/** Autogenerated input type of CloseIssue */
type Github_CloseIssueInput = {
  /** ID of the issue to be closed. */
  readonly issueId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CloseIssue */
type Github_CloseIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The issue that was closed. */
  readonly issue: Maybe<Github_Issue>;
};

/** Autogenerated input type of ClosePullRequest */
type Github_ClosePullRequestInput = {
  /** ID of the pull request to be closed. */
  readonly pullRequestId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ClosePullRequest */
type Github_ClosePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The pull request that was closed. */
  readonly pullRequest: Maybe<Github_PullRequest>;
};

/** The object which triggered a `ClosedEvent`. */
type Github_Closer = Github_Commit | Github_PullRequest;

/** The Code of Conduct for a repository */
type Github_CodeOfConduct = Github_Node & {
  /** The body of the Code of Conduct */
  readonly body: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The key for the Code of Conduct */
  readonly key: Scalars['String'];
  /** The formal name of the Code of Conduct */
  readonly name: Scalars['String'];
  /** The HTTP path for this Code of Conduct */
  readonly resourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this Code of Conduct */
  readonly url: Maybe<Scalars['Github_URI']>;
};

/** Collaborators affiliation level with a subject. */
enum Github_CollaboratorAffiliation {
  /** All outside collaborators of an organization-owned subject. */
  OUTSIDE = 'OUTSIDE',
  /** All collaborators with permissions to an organization-owned subject, regardless of organization membership status. */
  DIRECT = 'DIRECT',
  /** All collaborators the authenticated user can see. */
  ALL = 'ALL'
}

/** Represents a comment. */
type Github_Comment = {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** The body as Markdown. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment. */
type Github_Comment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** A comment author association with repository. */
enum Github_CommentAuthorAssociation {
  /** Author is a member of the organization that owns the repository. */
  MEMBER = 'MEMBER',
  /** Author is the owner of the repository. */
  OWNER = 'OWNER',
  /** Author has been invited to collaborate on the repository. */
  COLLABORATOR = 'COLLABORATOR',
  /** Author has previously committed to the repository. */
  CONTRIBUTOR = 'CONTRIBUTOR',
  /** Author has not previously committed to the repository. */
  FIRST_TIME_CONTRIBUTOR = 'FIRST_TIME_CONTRIBUTOR',
  /** Author has not previously committed to GitHub. */
  FIRST_TIMER = 'FIRST_TIMER',
  /** Author has no association with the repository. */
  NONE = 'NONE'
}

/** The possible errors that will prevent a user from updating a comment. */
enum Github_CommentCannotUpdateReason {
  /** Unable to create comment because repository is archived. */
  ARCHIVED = 'ARCHIVED',
  /** You must be the author or have write access to this repository to update this comment. */
  INSUFFICIENT_ACCESS = 'INSUFFICIENT_ACCESS',
  /** Unable to create comment because issue is locked. */
  LOCKED = 'LOCKED',
  /** You must be logged in to update this comment. */
  LOGIN_REQUIRED = 'LOGIN_REQUIRED',
  /** Repository is under maintenance. */
  MAINTENANCE = 'MAINTENANCE',
  /** At least one email address must be verified to update this comment. */
  VERIFIED_EMAIL_REQUIRED = 'VERIFIED_EMAIL_REQUIRED',
  /** You cannot update this comment */
  DENIED = 'DENIED'
}

/** Represents a 'comment_deleted' event on a given issue or pull request. */
type Github_CommentDeletedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Represents a Git commit. */
type Github_Commit = Github_Node & Github_GitObject & Github_Subscribable & Github_UniformResourceLocatable & {
  /** An abbreviated version of the Git object ID */
  readonly abbreviatedOid: Scalars['String'];
  /** The number of additions in this commit. */
  readonly additions: Scalars['Int'];
  /** The pull requests associated with a commit */
  readonly associatedPullRequests: Maybe<Github_PullRequestConnection>;
  /** Authorship details of the commit. */
  readonly author: Maybe<Github_GitActor>;
  /** Check if the committer and the author match. */
  readonly authoredByCommitter: Scalars['Boolean'];
  /** The datetime when this commit was authored. */
  readonly authoredDate: Scalars['Github_DateTime'];
  /** Fetches `git blame` information. */
  readonly blame: Github_Blame;
  /** The number of changed files in this commit. */
  readonly changedFiles: Scalars['Int'];
  /** Comments made on the commit. */
  readonly comments: Github_CommitCommentConnection;
  /** The HTTP path for this Git object */
  readonly commitResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this Git object */
  readonly commitUrl: Scalars['Github_URI'];
  /** The datetime when this commit was committed. */
  readonly committedDate: Scalars['Github_DateTime'];
  /** Check if commited via GitHub web UI. */
  readonly committedViaWeb: Scalars['Boolean'];
  /** Committership details of the commit. */
  readonly committer: Maybe<Github_GitActor>;
  /** The number of deletions in this commit. */
  readonly deletions: Scalars['Int'];
  /** The deployments associated with a commit. */
  readonly deployments: Maybe<Github_DeploymentConnection>;
  /** The linear commit history starting from (and including) this commit, in the same order as `git log`. */
  readonly history: Github_CommitHistoryConnection;
  readonly id: Scalars['ID'];
  /** The Git commit message */
  readonly message: Scalars['String'];
  /** The Git commit message body */
  readonly messageBody: Scalars['String'];
  /** The commit message body rendered to HTML. */
  readonly messageBodyHTML: Scalars['Github_HTML'];
  /** The Git commit message headline */
  readonly messageHeadline: Scalars['String'];
  /** The commit message headline rendered to HTML. */
  readonly messageHeadlineHTML: Scalars['Github_HTML'];
  /** The Git object ID */
  readonly oid: Scalars['Github_GitObjectID'];
  /** The organization this commit was made on behalf of. */
  readonly onBehalfOf: Maybe<Github_Organization>;
  /** The parents of a commit. */
  readonly parents: Github_CommitConnection;
  /** The datetime when this commit was pushed. */
  readonly pushedDate: Maybe<Scalars['Github_DateTime']>;
  /** The Repository this commit belongs to */
  readonly repository: Github_Repository;
  /** The HTTP path for this commit */
  readonly resourcePath: Scalars['Github_URI'];
  /** Commit signing information, if present. */
  readonly signature: Maybe<Github_GitSignature>;
  /** Status information for this commit */
  readonly status: Maybe<Github_Status>;
  /** Check and Status rollup information for this commit. */
  readonly statusCheckRollup: Maybe<Github_StatusCheckRollup>;
  /** Returns a list of all submodules in this repository as of this Commit parsed from the .gitmodules file. */
  readonly submodules: Github_SubmoduleConnection;
  /**
   * Returns a URL to download a tarball archive for a repository.
   * Note: For private repositories, these links are temporary and expire after five minutes.
   */
  readonly tarballUrl: Scalars['Github_URI'];
  /** Commit's root Tree */
  readonly tree: Github_Tree;
  /** The HTTP path for the tree of this commit */
  readonly treeResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for the tree of this commit */
  readonly treeUrl: Scalars['Github_URI'];
  /** The HTTP URL for this commit */
  readonly url: Scalars['Github_URI'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
  /**
   * Returns a URL to download a zipball archive for a repository.
   * Note: For private repositories, these links are temporary and expire after five minutes.
   */
  readonly zipballUrl: Scalars['Github_URI'];
};


/** Represents a Git commit. */
type Github_Commit_associatedPullRequestsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_PullRequestOrder>;
};


/** Represents a Git commit. */
type Github_Commit_blameArgs = {
  path: Scalars['String'];
};


/** Represents a Git commit. */
type Github_Commit_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Represents a Git commit. */
type Github_Commit_deploymentsArgs = {
  environments: Maybe<ReadonlyArray<Scalars['String']>>;
  orderBy?: Maybe<Github_DeploymentOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Represents a Git commit. */
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


/** Represents a Git commit. */
type Github_Commit_parentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Represents a Git commit. */
type Github_Commit_submodulesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Specifies an author for filtering Git commits. */
type Github_CommitAuthor = {
  /**
   * ID of a User to filter by. If non-null, only commits authored by this user
   * will be returned. This field takes precedence over emails.
   */
  readonly id: Maybe<Scalars['ID']>;
  /** Email addresses to filter by. Commits authored by any of the specified email addresses will be returned. */
  readonly emails: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a comment on a given Commit. */
type Github_CommitComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** Identifies the comment body. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** Identifies the commit associated with the comment, if the commit exists. */
  readonly commit: Maybe<Github_Commit>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  readonly isMinimized: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Returns why the comment was minimized. */
  readonly minimizedReason: Maybe<Scalars['String']>;
  /** Identifies the file path associated with the comment. */
  readonly path: Maybe<Scalars['String']>;
  /** Identifies the line position associated with the comment. */
  readonly position: Maybe<Scalars['Int']>;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
  /** The HTTP path permalink for this commit comment. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL permalink for this commit comment. */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  readonly viewerCanMinimize: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment on a given Commit. */
type Github_CommitComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** Represents a comment on a given Commit. */
type Github_CommitComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for CommitComment. */
type Github_CommitCommentConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CommitCommentEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CommitComment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_CommitCommentEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_CommitComment>;
};

/** A thread of comments on a commit. */
type Github_CommitCommentThread = Github_Node & Github_RepositoryNode & {
  /** The comments that exist in this thread. */
  readonly comments: Github_CommitCommentConnection;
  /** The commit the comments were made on. */
  readonly commit: Maybe<Github_Commit>;
  readonly id: Scalars['ID'];
  /** The file the comments were made on. */
  readonly path: Maybe<Scalars['String']>;
  /** The position in the diff for the commit that the comment was made on. */
  readonly position: Maybe<Scalars['Int']>;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
};


/** A thread of comments on a commit. */
type Github_CommitCommentThread_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for Commit. */
type Github_CommitConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CommitEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Commit>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Ordering options for commit contribution connections. */
type Github_CommitContributionOrder = {
  /** The field by which to order commit contributions. */
  readonly field: Github_CommitContributionOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which commit contribution connections can be ordered. */
enum Github_CommitContributionOrderField {
  /** Order commit contributions by when they were made. */
  OCCURRED_AT = 'OCCURRED_AT',
  /** Order commit contributions by how many commits they represent. */
  COMMIT_COUNT = 'COMMIT_COUNT'
}

/** This aggregates commits made by a user within one repository. */
type Github_CommitContributionsByRepository = {
  /** The commit contributions, each representing a day. */
  readonly contributions: Github_CreatedCommitContributionConnection;
  /** The repository in which the commits were made. */
  readonly repository: Github_Repository;
  /** The HTTP path for the user's commits to the repository in this time range. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for the user's commits to the repository in this time range. */
  readonly url: Scalars['Github_URI'];
};


/** This aggregates commits made by a user within one repository. */
type Github_CommitContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_CommitContributionOrder>;
};

/** An edge in a connection. */
type Github_CommitEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Commit>;
};

/** The connection type for Commit. */
type Github_CommitHistoryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CommitEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Commit>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a 'connected' event on a given issue or pull request. */
type Github_ConnectedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Reference originated in a different repository. */
  readonly isCrossRepository: Scalars['Boolean'];
  /** Issue or pull request that made the reference. */
  readonly source: Github_ReferencedSubject;
  /** Issue or pull request which was connected. */
  readonly subject: Github_ReferencedSubject;
};

/** Represents a contribution a user made on GitHub, such as opening an issue. */
type Github_Contribution = {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** A calendar of contributions made on GitHub by a user. */
type Github_ContributionCalendar = {
  /** A list of hex color codes used in this calendar. The darker the color, the more contributions it represents. */
  readonly colors: ReadonlyArray<Scalars['String']>;
  /** Determine if the color set was chosen because it's currently Halloween. */
  readonly isHalloween: Scalars['Boolean'];
  /** A list of the months of contributions in this calendar. */
  readonly months: ReadonlyArray<Github_ContributionCalendarMonth>;
  /** The count of total contributions in the calendar. */
  readonly totalContributions: Scalars['Int'];
  /** A list of the weeks of contributions in this calendar. */
  readonly weeks: ReadonlyArray<Github_ContributionCalendarWeek>;
};

/** Represents a single day of contributions on GitHub by a user. */
type Github_ContributionCalendarDay = {
  /** The hex color code that represents how many contributions were made on this day compared to others in the calendar. */
  readonly color: Scalars['String'];
  /** How many contributions were made by the user on this day. */
  readonly contributionCount: Scalars['Int'];
  /** The day this square represents. */
  readonly date: Scalars['Github_Date'];
  /** A number representing which day of the week this square represents, e.g., 1 is Monday. */
  readonly weekday: Scalars['Int'];
};

/** A month of contributions in a user's contribution graph. */
type Github_ContributionCalendarMonth = {
  /** The date of the first day of this month. */
  readonly firstDay: Scalars['Github_Date'];
  /** The name of the month. */
  readonly name: Scalars['String'];
  /** How many weeks started in this month. */
  readonly totalWeeks: Scalars['Int'];
  /** The year the month occurred in. */
  readonly year: Scalars['Int'];
};

/** A week of contributions in a user's contribution graph. */
type Github_ContributionCalendarWeek = {
  /** The days of contributions in this week. */
  readonly contributionDays: ReadonlyArray<Github_ContributionCalendarDay>;
  /** The date of the earliest square in this week. */
  readonly firstDay: Scalars['Github_Date'];
};

/** Ordering options for contribution connections. */
type Github_ContributionOrder = {
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection = {
  /** Commit contributions made by the user, grouped by repository. */
  readonly commitContributionsByRepository: ReadonlyArray<Github_CommitContributionsByRepository>;
  /** A calendar of this user's contributions on GitHub. */
  readonly contributionCalendar: Github_ContributionCalendar;
  /** The years the user has been making contributions with the most recent year first. */
  readonly contributionYears: ReadonlyArray<Scalars['Int']>;
  /** Determine if this collection's time span ends in the current month. */
  readonly doesEndInCurrentMonth: Scalars['Boolean'];
  /**
   * The date of the first restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  readonly earliestRestrictedContributionDate: Maybe<Scalars['Github_Date']>;
  /** The ending date and time of this collection. */
  readonly endedAt: Scalars['Github_DateTime'];
  /**
   * The first issue the user opened on GitHub. This will be null if that issue was
   * opened outside the collection's time range and ignoreTimeRange is false. If
   * the issue is not visible but the user has opted to show private contributions,
   * a RestrictedContribution will be returned.
   */
  readonly firstIssueContribution: Maybe<Github_CreatedIssueOrRestrictedContribution>;
  /**
   * The first pull request the user opened on GitHub. This will be null if that
   * pull request was opened outside the collection's time range and
   * ignoreTimeRange is not true. If the pull request is not visible but the user
   * has opted to show private contributions, a RestrictedContribution will be returned.
   */
  readonly firstPullRequestContribution: Maybe<Github_CreatedPullRequestOrRestrictedContribution>;
  /**
   * The first repository the user created on GitHub. This will be null if that
   * first repository was created outside the collection's time range and
   * ignoreTimeRange is false. If the repository is not visible, then a
   * RestrictedContribution is returned.
   */
  readonly firstRepositoryContribution: Maybe<Github_CreatedRepositoryOrRestrictedContribution>;
  /** Does the user have any more activity in the timeline that occurred prior to the collection's time range? */
  readonly hasActivityInThePast: Scalars['Boolean'];
  /** Determine if there are any contributions in this collection. */
  readonly hasAnyContributions: Scalars['Boolean'];
  /**
   * Determine if the user made any contributions in this time frame whose details
   * are not visible because they were made in a private repository. Can only be
   * true if the user enabled private contribution counts.
   */
  readonly hasAnyRestrictedContributions: Scalars['Boolean'];
  /** Whether or not the collector's time span is all within the same day. */
  readonly isSingleDay: Scalars['Boolean'];
  /** A list of issues the user opened. */
  readonly issueContributions: Github_CreatedIssueContributionConnection;
  /** Issue contributions made by the user, grouped by repository. */
  readonly issueContributionsByRepository: ReadonlyArray<Github_IssueContributionsByRepository>;
  /**
   * When the user signed up for GitHub. This will be null if that sign up date
   * falls outside the collection's time range and ignoreTimeRange is false.
   */
  readonly joinedGitHubContribution: Maybe<Github_JoinedGitHubContribution>;
  /**
   * The date of the most recent restricted contribution the user made in this time
   * period. Can only be non-null when the user has enabled private contribution counts.
   */
  readonly latestRestrictedContributionDate: Maybe<Scalars['Github_Date']>;
  /**
   * When this collection's time range does not include any activity from the user, use this
   * to get a different collection from an earlier time range that does have activity.
   */
  readonly mostRecentCollectionWithActivity: Maybe<Github_ContributionsCollection>;
  /**
   * Returns a different contributions collection from an earlier time range than this one
   * that does not have any contributions.
   */
  readonly mostRecentCollectionWithoutActivity: Maybe<Github_ContributionsCollection>;
  /**
   * The issue the user opened on GitHub that received the most comments in the specified
   * time frame.
   */
  readonly popularIssueContribution: Maybe<Github_CreatedIssueContribution>;
  /**
   * The pull request the user opened on GitHub that received the most comments in the
   * specified time frame.
   */
  readonly popularPullRequestContribution: Maybe<Github_CreatedPullRequestContribution>;
  /** Pull request contributions made by the user. */
  readonly pullRequestContributions: Github_CreatedPullRequestContributionConnection;
  /** Pull request contributions made by the user, grouped by repository. */
  readonly pullRequestContributionsByRepository: ReadonlyArray<Github_PullRequestContributionsByRepository>;
  /** Pull request review contributions made by the user. */
  readonly pullRequestReviewContributions: Github_CreatedPullRequestReviewContributionConnection;
  /** Pull request review contributions made by the user, grouped by repository. */
  readonly pullRequestReviewContributionsByRepository: ReadonlyArray<Github_PullRequestReviewContributionsByRepository>;
  /** A list of repositories owned by the user that the user created in this time range. */
  readonly repositoryContributions: Github_CreatedRepositoryContributionConnection;
  /**
   * A count of contributions made by the user that the viewer cannot access. Only
   * non-zero when the user has chosen to share their private contribution counts.
   */
  readonly restrictedContributionsCount: Scalars['Int'];
  /** The beginning date and time of this collection. */
  readonly startedAt: Scalars['Github_DateTime'];
  /** How many commits were made by the user in this time span. */
  readonly totalCommitContributions: Scalars['Int'];
  /** How many issues the user opened. */
  readonly totalIssueContributions: Scalars['Int'];
  /** How many pull requests the user opened. */
  readonly totalPullRequestContributions: Scalars['Int'];
  /** How many pull request reviews the user left. */
  readonly totalPullRequestReviewContributions: Scalars['Int'];
  /** How many different repositories the user committed to. */
  readonly totalRepositoriesWithContributedCommits: Scalars['Int'];
  /** How many different repositories the user opened issues in. */
  readonly totalRepositoriesWithContributedIssues: Scalars['Int'];
  /** How many different repositories the user left pull request reviews in. */
  readonly totalRepositoriesWithContributedPullRequestReviews: Scalars['Int'];
  /** How many different repositories the user opened pull requests in. */
  readonly totalRepositoriesWithContributedPullRequests: Scalars['Int'];
  /** How many repositories the user created. */
  readonly totalRepositoryContributions: Scalars['Int'];
  /** The user who made the contributions in this collection. */
  readonly user: Github_User;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_commitContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_issueContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_issueContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_pullRequestContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_pullRequestContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_pullRequestReviewContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_pullRequestReviewContributionsByRepositoryArgs = {
  maxRepositories?: Maybe<Scalars['Int']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_repositoryContributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  excludeFirst?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_totalIssueContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_totalPullRequestContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_totalRepositoriesWithContributedIssuesArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_totalRepositoriesWithContributedPullRequestsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
  excludePopular?: Maybe<Scalars['Boolean']>;
};


/** A contributions collection aggregates contributions such as opened issues and commits created by a user. */
type Github_ContributionsCollection_totalRepositoryContributionsArgs = {
  excludeFirst?: Maybe<Scalars['Boolean']>;
};

/** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
type Github_ConvertedNoteToIssueEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Autogenerated input type of ConvertProjectCardNoteToIssue */
type Github_ConvertProjectCardNoteToIssueInput = {
  /** The ProjectCard ID to convert. */
  readonly projectCardId: Scalars['ID'];
  /** The ID of the repository to create the issue in. */
  readonly repositoryId: Scalars['ID'];
  /** The title of the newly created issue. Defaults to the card's note text. */
  readonly title: Maybe<Scalars['String']>;
  /** The body of the newly created issue. */
  readonly body: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ConvertProjectCardNoteToIssue */
type Github_ConvertProjectCardNoteToIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated ProjectCard. */
  readonly projectCard: Maybe<Github_ProjectCard>;
};

/** Represents a 'convert_to_draft' event on a given pull request. */
type Github_ConvertToDraftEvent = Github_Node & Github_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** The HTTP path for this convert to draft event. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this convert to draft event. */
  readonly url: Scalars['Github_URI'];
};

/** Autogenerated input type of CreateBranchProtectionRule */
type Github_CreateBranchProtectionRuleInput = {
  /** The global relay id of the repository in which a new branch protection rule should be created in. */
  readonly repositoryId: Scalars['ID'];
  /** The glob-like pattern used to determine matching branches. */
  readonly pattern: Scalars['String'];
  /** Are approving reviews required to update matching branches. */
  readonly requiresApprovingReviews: Maybe<Scalars['Boolean']>;
  /** Number of approving reviews required to update matching branches. */
  readonly requiredApprovingReviewCount: Maybe<Scalars['Int']>;
  /** Are commits required to be signed. */
  readonly requiresCommitSignatures: Maybe<Scalars['Boolean']>;
  /** Can admins overwrite branch protection. */
  readonly isAdminEnforced: Maybe<Scalars['Boolean']>;
  /** Are status checks required to update matching branches. */
  readonly requiresStatusChecks: Maybe<Scalars['Boolean']>;
  /** Are branches required to be up to date before merging. */
  readonly requiresStrictStatusChecks: Maybe<Scalars['Boolean']>;
  /** Are reviews from code owners required to update matching branches. */
  readonly requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  readonly dismissesStaleReviews: Maybe<Scalars['Boolean']>;
  /** Is dismissal of pull request reviews restricted. */
  readonly restrictsReviewDismissals: Maybe<Scalars['Boolean']>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  readonly reviewDismissalActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** Is pushing to matching branches restricted. */
  readonly restrictsPushes: Maybe<Scalars['Boolean']>;
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  readonly pushActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  readonly requiredStatusCheckContexts: Maybe<ReadonlyArray<Scalars['String']>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateBranchProtectionRule */
type Github_CreateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Represents the contribution a user made by committing to a repository. */
type Github_CreatedCommitContribution = Github_Contribution & {
  /** How many commits were made on this day to this repository by the user. */
  readonly commitCount: Scalars['Int'];
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The repository the user made a commit in. */
  readonly repository: Github_Repository;
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** The connection type for CreatedCommitContribution. */
type Github_CreatedCommitContributionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedCommitContributionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedCommitContribution>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of commits across days and repositories in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_CreatedCommitContributionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_CreatedCommitContribution>;
};

/** Represents the contribution a user made on GitHub by opening an issue. */
type Github_CreatedIssueContribution = Github_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** The issue that was opened. */
  readonly issue: Github_Issue;
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** The connection type for CreatedIssueContribution. */
type Github_CreatedIssueContributionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedIssueContributionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedIssueContribution>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_CreatedIssueContributionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_CreatedIssueContribution>;
};

/** Represents either a issue the viewer can access or a restricted contribution. */
type Github_CreatedIssueOrRestrictedContribution = Github_CreatedIssueContribution | Github_RestrictedContribution;

/** Represents the contribution a user made on GitHub by opening a pull request. */
type Github_CreatedPullRequestContribution = Github_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The pull request that was opened. */
  readonly pullRequest: Github_PullRequest;
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** The connection type for CreatedPullRequestContribution. */
type Github_CreatedPullRequestContributionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestContributionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestContribution>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_CreatedPullRequestContributionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_CreatedPullRequestContribution>;
};

/** Represents either a pull request the viewer can access or a restricted contribution. */
type Github_CreatedPullRequestOrRestrictedContribution = Github_CreatedPullRequestContribution | Github_RestrictedContribution;

/** Represents the contribution a user made by leaving a review on a pull request. */
type Github_CreatedPullRequestReviewContribution = Github_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The pull request the user reviewed. */
  readonly pullRequest: Github_PullRequest;
  /** The review the user left on the pull request. */
  readonly pullRequestReview: Github_PullRequestReview;
  /** The repository containing the pull request that the user reviewed. */
  readonly repository: Github_Repository;
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** The connection type for CreatedPullRequestReviewContribution. */
type Github_CreatedPullRequestReviewContributionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestReviewContributionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedPullRequestReviewContribution>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_CreatedPullRequestReviewContributionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_CreatedPullRequestReviewContribution>;
};

/** Represents the contribution a user made on GitHub by creating a repository. */
type Github_CreatedRepositoryContribution = Github_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The repository that was created. */
  readonly repository: Github_Repository;
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** The connection type for CreatedRepositoryContribution. */
type Github_CreatedRepositoryContributionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_CreatedRepositoryContributionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_CreatedRepositoryContribution>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_CreatedRepositoryContributionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_CreatedRepositoryContribution>;
};

/** Represents either a repository the viewer can access or a restricted contribution. */
type Github_CreatedRepositoryOrRestrictedContribution = Github_CreatedRepositoryContribution | Github_RestrictedContribution;

/** Autogenerated input type of CreateEnterpriseOrganization */
type Github_CreateEnterpriseOrganizationInput = {
  /** The ID of the enterprise owning the new organization. */
  readonly enterpriseId: Scalars['ID'];
  /** The login of the new organization. */
  readonly login: Scalars['String'];
  /** The profile name of the new organization. */
  readonly profileName: Scalars['String'];
  /** The email used for sending billing receipts. */
  readonly billingEmail: Scalars['String'];
  /** The logins for the administrators of the new organization. */
  readonly adminLogins: ReadonlyArray<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateEnterpriseOrganization */
type Github_CreateEnterpriseOrganizationPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise that owns the created organization. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** The organization that was created. */
  readonly organization: Maybe<Github_Organization>;
};

/** Autogenerated input type of CreateIpAllowListEntry */
type Github_CreateIpAllowListEntryInput = {
  /** The ID of the owner for which to create the new IP allow list entry. */
  readonly ownerId: Scalars['ID'];
  /** An IP address or range of addresses in CIDR notation. */
  readonly allowListValue: Scalars['String'];
  /** An optional name for the IP allow list entry. */
  readonly name: Maybe<Scalars['String']>;
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  readonly isActive: Scalars['Boolean'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateIpAllowListEntry */
type Github_CreateIpAllowListEntryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The IP allow list entry that was created. */
  readonly ipAllowListEntry: Maybe<Github_IpAllowListEntry>;
};

/** Autogenerated input type of CreateIssue */
type Github_CreateIssueInput = {
  /** The Node ID of the repository. */
  readonly repositoryId: Scalars['ID'];
  /** The title for the issue. */
  readonly title: Scalars['String'];
  /** The body for the issue description. */
  readonly body: Maybe<Scalars['String']>;
  /** The Node ID for the user assignee for this issue. */
  readonly assigneeIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** The Node ID of the milestone for this issue. */
  readonly milestoneId: Maybe<Scalars['ID']>;
  /** An array of Node IDs of labels for this issue. */
  readonly labelIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** An array of Node IDs for projects associated with this issue. */
  readonly projectIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateIssue */
type Github_CreateIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new issue. */
  readonly issue: Maybe<Github_Issue>;
};

/** Autogenerated input type of CreateProject */
type Github_CreateProjectInput = {
  /** The owner ID to create the project under. */
  readonly ownerId: Scalars['ID'];
  /** The name of project. */
  readonly name: Scalars['String'];
  /** The description of project. */
  readonly body: Maybe<Scalars['String']>;
  /** The name of the GitHub-provided template. */
  readonly template: Maybe<Github_ProjectTemplate>;
  /** A list of repository IDs to create as linked repositories for the project */
  readonly repositoryIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateProject */
type Github_CreateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new project. */
  readonly project: Maybe<Github_Project>;
};

/** Autogenerated input type of CreatePullRequest */
type Github_CreatePullRequestInput = {
  /** The Node ID of the repository. */
  readonly repositoryId: Scalars['ID'];
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository. You cannot update the base branch on a pull request to point
   * to another repository.
   */
  readonly baseRefName: Scalars['String'];
  /**
   * The name of the branch where your changes are implemented. For cross-repository pull requests
   * in the same network, namespace `head_ref_name` with a user like this: `username:branch`.
   */
  readonly headRefName: Scalars['String'];
  /** The title of the pull request. */
  readonly title: Scalars['String'];
  /** The contents of the pull request. */
  readonly body: Maybe<Scalars['String']>;
  /** Indicates whether maintainers can modify the pull request. */
  readonly maintainerCanModify: Maybe<Scalars['Boolean']>;
  /** Indicates whether this pull request should be a draft. */
  readonly draft: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreatePullRequest */
type Github_CreatePullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new pull request. */
  readonly pullRequest: Maybe<Github_PullRequest>;
};

/** Autogenerated input type of CreateRef */
type Github_CreateRefInput = {
  /** The Node ID of the Repository to create the Ref in. */
  readonly repositoryId: Scalars['ID'];
  /** The fully qualified name of the new Ref (ie: `refs/heads/my_new_branch`). */
  readonly name: Scalars['String'];
  /** The GitObjectID that the new Ref shall target. Must point to a commit. */
  readonly oid: Scalars['Github_GitObjectID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateRef */
type Github_CreateRefPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The newly created ref. */
  readonly ref: Maybe<Github_Ref>;
};

/** Autogenerated input type of CreateRepository */
type Github_CreateRepositoryInput = {
  /** The name of the new repository. */
  readonly name: Scalars['String'];
  /** The ID of the owner for the new repository. */
  readonly ownerId: Maybe<Scalars['ID']>;
  /** A short description of the new repository. */
  readonly description: Maybe<Scalars['String']>;
  /** Indicates the repository's visibility level. */
  readonly visibility: Github_RepositoryVisibility;
  /**
   * Whether this repository should be marked as a template such that anyone who
   * can access it can create new repositories with the same files and directory structure.
   */
  readonly template: Maybe<Scalars['Boolean']>;
  /** The URL for a web page about this repository. */
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  /** Indicates if the repository should have the wiki feature enabled. */
  readonly hasWikiEnabled: Maybe<Scalars['Boolean']>;
  /** Indicates if the repository should have the issues feature enabled. */
  readonly hasIssuesEnabled: Maybe<Scalars['Boolean']>;
  /**
   * When an organization is specified as the owner, this ID identifies the team
   * that should be granted access to the new repository.
   */
  readonly teamId: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateRepository */
type Github_CreateRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new repository. */
  readonly repository: Maybe<Github_Repository>;
};

/** Autogenerated input type of CreateTeamDiscussionComment */
type Github_CreateTeamDiscussionCommentInput = {
  /** The ID of the discussion to which the comment belongs. */
  readonly discussionId: Scalars['ID'];
  /** The content of the comment. */
  readonly body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateTeamDiscussionComment */
type Github_CreateTeamDiscussionCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new comment. */
  readonly teamDiscussionComment: Maybe<Github_TeamDiscussionComment>;
};

/** Autogenerated input type of CreateTeamDiscussion */
type Github_CreateTeamDiscussionInput = {
  /** The ID of the team to which the discussion belongs. */
  readonly teamId: Scalars['ID'];
  /** The title of the discussion. */
  readonly title: Scalars['String'];
  /** The content of the discussion. */
  readonly body: Scalars['String'];
  /**
   * If true, restricts the visiblity of this discussion to team members and
   * organization admins. If false or not specified, allows any organization member
   * to view this discussion.
   */
  readonly private: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of CreateTeamDiscussion */
type Github_CreateTeamDiscussionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new discussion. */
  readonly teamDiscussion: Maybe<Github_TeamDiscussion>;
};

/** Represents a mention made by one issue or pull request to another. */
type Github_CrossReferencedEvent = Github_Node & Github_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Reference originated in a different repository. */
  readonly isCrossRepository: Scalars['Boolean'];
  /** Identifies when the reference was made. */
  readonly referencedAt: Scalars['Github_DateTime'];
  /** The HTTP path for this pull request. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Issue or pull request that made the reference. */
  readonly source: Github_ReferencedSubject;
  /** Issue or pull request to which the reference was made. */
  readonly target: Github_ReferencedSubject;
  /** The HTTP URL for this pull request. */
  readonly url: Scalars['Github_URI'];
  /** Checks if the target will be closed when the source is merged. */
  readonly willCloseTarget: Scalars['Boolean'];
};



/** Autogenerated input type of DeclineTopicSuggestion */
type Github_DeclineTopicSuggestionInput = {
  /** The Node ID of the repository. */
  readonly repositoryId: Scalars['ID'];
  /** The name of the suggested topic. */
  readonly name: Scalars['String'];
  /** The reason why the suggested topic is declined. */
  readonly reason: Github_TopicSuggestionDeclineReason;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeclineTopicSuggestion */
type Github_DeclineTopicSuggestionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The declined topic. */
  readonly topic: Maybe<Github_Topic>;
};

/** The possible default permissions for repositories. */
enum Github_DefaultRepositoryPermissionField {
  /** No access */
  NONE = 'NONE',
  /** Can read repos by default */
  READ = 'READ',
  /** Can read and write repos by default */
  WRITE = 'WRITE',
  /** Can read, write, and administrate repos by default */
  ADMIN = 'ADMIN'
}

/** Entities that can be deleted. */
type Github_Deletable = {
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
};

/** Autogenerated input type of DeleteBranchProtectionRule */
type Github_DeleteBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be deleted. */
  readonly branchProtectionRuleId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteBranchProtectionRule */
type Github_DeleteBranchProtectionRulePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteDeployment */
type Github_DeleteDeploymentInput = {
  /** The Node ID of the deployment to be deleted. */
  readonly id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteDeployment */
type Github_DeleteDeploymentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteIpAllowListEntry */
type Github_DeleteIpAllowListEntryInput = {
  /** The ID of the IP allow list entry to delete. */
  readonly ipAllowListEntryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteIpAllowListEntry */
type Github_DeleteIpAllowListEntryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The IP allow list entry that was deleted. */
  readonly ipAllowListEntry: Maybe<Github_IpAllowListEntry>;
};

/** Autogenerated input type of DeleteIssueComment */
type Github_DeleteIssueCommentInput = {
  /** The ID of the comment to delete. */
  readonly id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteIssueComment */
type Github_DeleteIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteIssue */
type Github_DeleteIssueInput = {
  /** The ID of the issue to delete. */
  readonly issueId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteIssue */
type Github_DeleteIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The repository the issue belonged to */
  readonly repository: Maybe<Github_Repository>;
};

/** Autogenerated input type of DeleteProjectCard */
type Github_DeleteProjectCardInput = {
  /** The id of the card to delete. */
  readonly cardId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteProjectCard */
type Github_DeleteProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The column the deleted card was in. */
  readonly column: Maybe<Github_ProjectColumn>;
  /** The deleted card ID. */
  readonly deletedCardId: Maybe<Scalars['ID']>;
};

/** Autogenerated input type of DeleteProjectColumn */
type Github_DeleteProjectColumnInput = {
  /** The id of the column to delete. */
  readonly columnId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteProjectColumn */
type Github_DeleteProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The deleted column ID. */
  readonly deletedColumnId: Maybe<Scalars['ID']>;
  /** The project the deleted column was in. */
  readonly project: Maybe<Github_Project>;
};

/** Autogenerated input type of DeleteProject */
type Github_DeleteProjectInput = {
  /** The Project ID to update. */
  readonly projectId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteProject */
type Github_DeleteProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The repository or organization the project was removed from. */
  readonly owner: Maybe<Github_ProjectOwner>;
};

/** Autogenerated input type of DeletePullRequestReviewComment */
type Github_DeletePullRequestReviewCommentInput = {
  /** The ID of the comment to delete. */
  readonly id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeletePullRequestReviewComment */
type Github_DeletePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The pull request review the deleted comment belonged to. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

/** Autogenerated input type of DeletePullRequestReview */
type Github_DeletePullRequestReviewInput = {
  /** The Node ID of the pull request review to delete. */
  readonly pullRequestReviewId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeletePullRequestReview */
type Github_DeletePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The deleted pull request review. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

/** Autogenerated input type of DeleteRef */
type Github_DeleteRefInput = {
  /** The Node ID of the Ref to be deleted. */
  readonly refId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteRef */
type Github_DeleteRefPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteTeamDiscussionComment */
type Github_DeleteTeamDiscussionCommentInput = {
  /** The ID of the comment to delete. */
  readonly id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteTeamDiscussionComment */
type Github_DeleteTeamDiscussionCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteTeamDiscussion */
type Github_DeleteTeamDiscussionInput = {
  /** The discussion ID to delete. */
  readonly id: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DeleteTeamDiscussion */
type Github_DeleteTeamDiscussionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Represents a 'demilestoned' event on a given issue or pull request. */
type Github_DemilestonedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the milestone title associated with the 'demilestoned' event. */
  readonly milestoneTitle: Scalars['String'];
  /** Object referenced by event. */
  readonly subject: Github_MilestoneItem;
};

/** Represents a 'deployed' event on a given pull request. */
type Github_DeployedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The deployment associated with the 'deployed' event. */
  readonly deployment: Github_Deployment;
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** The ref associated with the 'deployed' event. */
  readonly ref: Maybe<Github_Ref>;
};

/** A repository deploy key. */
type Github_DeployKey = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** The deploy key. */
  readonly key: Scalars['String'];
  /** Whether or not the deploy key is read only. */
  readonly readOnly: Scalars['Boolean'];
  /** The deploy key title. */
  readonly title: Scalars['String'];
  /** Whether or not the deploy key has been verified. */
  readonly verified: Scalars['Boolean'];
};

/** The connection type for DeployKey. */
type Github_DeployKeyConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_DeployKeyEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_DeployKey>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_DeployKeyEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_DeployKey>;
};

/** Represents triggered deployment instance. */
type Github_Deployment = Github_Node & {
  /** Identifies the commit sha of the deployment. */
  readonly commit: Maybe<Github_Commit>;
  /** Identifies the oid of the deployment commit, even if the commit has been deleted. */
  readonly commitOid: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the actor who triggered the deployment. */
  readonly creator: Github_Actor;
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The deployment description. */
  readonly description: Maybe<Scalars['String']>;
  /** The latest environment to which this deployment was made. */
  readonly environment: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The latest environment to which this deployment was made. */
  readonly latestEnvironment: Maybe<Scalars['String']>;
  /** The latest status of this deployment. */
  readonly latestStatus: Maybe<Github_DeploymentStatus>;
  /** The original environment to which this deployment was made. */
  readonly originalEnvironment: Maybe<Scalars['String']>;
  /** Extra information that a deployment system might need. */
  readonly payload: Maybe<Scalars['String']>;
  /** Identifies the Ref of the deployment, if the deployment was created by ref. */
  readonly ref: Maybe<Github_Ref>;
  /** Identifies the repository associated with the deployment. */
  readonly repository: Github_Repository;
  /** The current state of the deployment. */
  readonly state: Maybe<Github_DeploymentState>;
  /** A list of statuses associated with the deployment. */
  readonly statuses: Maybe<Github_DeploymentStatusConnection>;
  /** The deployment task. */
  readonly task: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};


/** Represents triggered deployment instance. */
type Github_Deployment_statusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for Deployment. */
type Github_DeploymentConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_DeploymentEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Deployment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_DeploymentEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Deployment>;
};

/** Represents a 'deployment_environment_changed' event on a given pull request. */
type Github_DeploymentEnvironmentChangedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The deployment status that updated the deployment environment. */
  readonly deploymentStatus: Github_DeploymentStatus;
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
};

/** Ordering options for deployment connections */
type Github_DeploymentOrder = {
  /** The field to order deployments by. */
  readonly field: Github_DeploymentOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which deployment connections can be ordered. */
enum Github_DeploymentOrderField {
  /** Order collection by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** The possible states in which a deployment can be. */
enum Github_DeploymentState {
  /** The pending deployment was not updated after 30 minutes. */
  ABANDONED = 'ABANDONED',
  /** The deployment is currently active. */
  ACTIVE = 'ACTIVE',
  /** An inactive transient deployment. */
  DESTROYED = 'DESTROYED',
  /** The deployment experienced an error. */
  ERROR = 'ERROR',
  /** The deployment has failed. */
  FAILURE = 'FAILURE',
  /** The deployment is inactive. */
  INACTIVE = 'INACTIVE',
  /** The deployment is pending. */
  PENDING = 'PENDING',
  /** The deployment has queued */
  QUEUED = 'QUEUED',
  /** The deployment is in progress. */
  IN_PROGRESS = 'IN_PROGRESS'
}

/** Describes the status of a given deployment attempt. */
type Github_DeploymentStatus = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the actor who triggered the deployment. */
  readonly creator: Github_Actor;
  /** Identifies the deployment associated with status. */
  readonly deployment: Github_Deployment;
  /** Identifies the description of the deployment. */
  readonly description: Maybe<Scalars['String']>;
  /** Identifies the environment URL of the deployment. */
  readonly environmentUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** Identifies the log URL of the deployment. */
  readonly logUrl: Maybe<Scalars['Github_URI']>;
  /** Identifies the current state of the deployment. */
  readonly state: Github_DeploymentStatusState;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** The connection type for DeploymentStatus. */
type Github_DeploymentStatusConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_DeploymentStatusEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_DeploymentStatus>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_DeploymentStatusEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_DeploymentStatus>;
};

/** The possible states for a deployment status. */
enum Github_DeploymentStatusState {
  /** The deployment is pending. */
  PENDING = 'PENDING',
  /** The deployment was successful. */
  SUCCESS = 'SUCCESS',
  /** The deployment has failed. */
  FAILURE = 'FAILURE',
  /** The deployment is inactive. */
  INACTIVE = 'INACTIVE',
  /** The deployment experienced an error. */
  ERROR = 'ERROR',
  /** The deployment is queued */
  QUEUED = 'QUEUED',
  /** The deployment is in progress. */
  IN_PROGRESS = 'IN_PROGRESS'
}

/** The possible sides of a diff. */
enum Github_DiffSide {
  /** The left side of the diff. */
  LEFT = 'LEFT',
  /** The right side of the diff. */
  RIGHT = 'RIGHT'
}

/** Represents a 'disconnected' event on a given issue or pull request. */
type Github_DisconnectedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Reference originated in a different repository. */
  readonly isCrossRepository: Scalars['Boolean'];
  /** Issue or pull request from which the issue was disconnected. */
  readonly source: Github_ReferencedSubject;
  /** Issue or pull request which was disconnected. */
  readonly subject: Github_ReferencedSubject;
};

/** Autogenerated input type of DismissPullRequestReview */
type Github_DismissPullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  readonly pullRequestReviewId: Scalars['ID'];
  /** The contents of the pull request review dismissal message. */
  readonly message: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of DismissPullRequestReview */
type Github_DismissPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The dismissed pull request review. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

/** Specifies a review comment to be left with a Pull Request Review. */
type Github_DraftPullRequestReviewComment = {
  /** Path to the file being commented on. */
  readonly path: Scalars['String'];
  /** Position in the file to leave a comment on. */
  readonly position: Scalars['Int'];
  /** Body of the comment to leave. */
  readonly body: Scalars['String'];
};

/** Specifies a review comment thread to be left with a Pull Request Review. */
type Github_DraftPullRequestReviewThread = {
  /** Path to the file being commented on. */
  readonly path: Scalars['String'];
  /** The line of the blob to which the thread refers. The end of the line range for multi-line comments. */
  readonly line: Scalars['Int'];
  /** The side of the diff on which the line resides. For multi-line comments, this is the side for the end of the line range. */
  readonly side: Maybe<Github_DiffSide>;
  /** The first line of the range to which the comment refers. */
  readonly startLine: Maybe<Scalars['Int']>;
  /** The side of the diff on which the start line resides. */
  readonly startSide: Maybe<Github_DiffSide>;
  /** Body of the comment to leave. */
  readonly body: Scalars['String'];
};

/** An account to manage multiple organizations with consolidated policy and billing. */
type Github_Enterprise = Github_Node & {
  /** A URL pointing to the enterprise's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** Enterprise billing information visible to enterprise billing managers. */
  readonly billingInfo: Maybe<Github_EnterpriseBillingInfo>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The description of the enterprise. */
  readonly description: Maybe<Scalars['String']>;
  /** The description of the enterprise as HTML. */
  readonly descriptionHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  /** The location of the enterprise. */
  readonly location: Maybe<Scalars['String']>;
  /** A list of users who are members of this enterprise. */
  readonly members: Github_EnterpriseMemberConnection;
  /** The name of the enterprise. */
  readonly name: Scalars['String'];
  /** A list of organizations that belong to this enterprise. */
  readonly organizations: Github_OrganizationConnection;
  /** Enterprise information only visible to enterprise owners. */
  readonly ownerInfo: Maybe<Github_EnterpriseOwnerInfo>;
  /** The HTTP path for this enterprise. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The URL-friendly identifier for the enterprise. */
  readonly slug: Scalars['String'];
  /** The HTTP URL for this enterprise. */
  readonly url: Scalars['Github_URI'];
  /** A list of user accounts on this enterprise. */
  readonly userAccounts: Github_EnterpriseUserAccountConnection;
  /** Is the current viewer an admin of this enterprise? */
  readonly viewerIsAdmin: Scalars['Boolean'];
  /** The URL of the enterprise website. */
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
type Github_Enterprise_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
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


/** An account to manage multiple organizations with consolidated policy and billing. */
type Github_Enterprise_organizationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_OrganizationOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An account to manage multiple organizations with consolidated policy and billing. */
type Github_Enterprise_userAccountsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for User. */
type Github_EnterpriseAdministratorConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseAdministratorEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A User who is an administrator of an enterprise. */
type Github_EnterpriseAdministratorEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_User>;
  /** The role of the administrator. */
  readonly role: Github_EnterpriseAdministratorRole;
};

/** An invitation for a user to become an owner or billing manager of an enterprise. */
type Github_EnterpriseAdministratorInvitation = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The email of the person who was invited to the enterprise. */
  readonly email: Maybe<Scalars['String']>;
  /** The enterprise the invitation is for. */
  readonly enterprise: Github_Enterprise;
  readonly id: Scalars['ID'];
  /** The user who was invited to the enterprise. */
  readonly invitee: Maybe<Github_User>;
  /** The user who created the invitation. */
  readonly inviter: Maybe<Github_User>;
  /** The invitee's pending role in the enterprise (owner or billing_manager). */
  readonly role: Github_EnterpriseAdministratorRole;
};

/** The connection type for EnterpriseAdministratorInvitation. */
type Github_EnterpriseAdministratorInvitationConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseAdministratorInvitationEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseAdministratorInvitation>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseAdministratorInvitationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseAdministratorInvitation>;
};

/** Ordering options for enterprise administrator invitation connections */
type Github_EnterpriseAdministratorInvitationOrder = {
  /** The field to order enterprise administrator invitations by. */
  readonly field: Github_EnterpriseAdministratorInvitationOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which enterprise administrator invitation connections can be ordered. */
enum Github_EnterpriseAdministratorInvitationOrderField {
  /** Order enterprise administrator member invitations by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** The possible administrator roles in an enterprise account. */
enum Github_EnterpriseAdministratorRole {
  /** Represents an owner of the enterprise account. */
  OWNER = 'OWNER',
  /** Represents a billing manager of the enterprise account. */
  BILLING_MANAGER = 'BILLING_MANAGER'
}

/** Metadata for an audit entry containing enterprise account information. */
type Github_EnterpriseAuditEntryData = {
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
};

/** Enterprise billing information visible to enterprise billing managers and owners. */
type Github_EnterpriseBillingInfo = {
  /** The number of licenseable users/emails across the enterprise. */
  readonly allLicensableUsersCount: Scalars['Int'];
  /** The number of data packs used by all organizations owned by the enterprise. */
  readonly assetPacks: Scalars['Int'];
  /**
   * The number of available seats across all owned organizations based on the unique number of billable users.
   * @deprecated `availableSeats` will be replaced with `totalAvailableLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalAvailableLicenses instead. Removal on 2020-01-01 UTC.
   */
  readonly availableSeats: Scalars['Int'];
  /** The bandwidth quota in GB for all organizations owned by the enterprise. */
  readonly bandwidthQuota: Scalars['Float'];
  /** The bandwidth usage in GB for all organizations owned by the enterprise. */
  readonly bandwidthUsage: Scalars['Float'];
  /** The bandwidth usage as a percentage of the bandwidth quota. */
  readonly bandwidthUsagePercentage: Scalars['Int'];
  /**
   * The total seats across all organizations owned by the enterprise.
   * @deprecated `seats` will be replaced with `totalLicenses` to provide more clarity on the value being returned Use EnterpriseBillingInfo.totalLicenses instead. Removal on 2020-01-01 UTC.
   */
  readonly seats: Scalars['Int'];
  /** The storage quota in GB for all organizations owned by the enterprise. */
  readonly storageQuota: Scalars['Float'];
  /** The storage usage in GB for all organizations owned by the enterprise. */
  readonly storageUsage: Scalars['Float'];
  /** The storage usage as a percentage of the storage quota. */
  readonly storageUsagePercentage: Scalars['Int'];
  /** The number of available licenses across all owned organizations based on the unique number of billable users. */
  readonly totalAvailableLicenses: Scalars['Int'];
  /** The total number of licenses allocated. */
  readonly totalLicenses: Scalars['Int'];
};

/** The possible values for the enterprise default repository permission setting. */
enum Github_EnterpriseDefaultRepositoryPermissionSettingValue {
  /** Organizations in the enterprise choose default repository permissions for their members. */
  NO_POLICY = 'NO_POLICY',
  /** Organization members will be able to clone, pull, push, and add new collaborators to all organization repositories. */
  ADMIN = 'ADMIN',
  /** Organization members will be able to clone, pull, and push all organization repositories. */
  WRITE = 'WRITE',
  /** Organization members will be able to clone and pull all organization repositories. */
  READ = 'READ',
  /** Organization members will only be able to clone and pull public repositories. */
  NONE = 'NONE'
}

/** The possible values for an enabled/disabled enterprise setting. */
enum Github_EnterpriseEnabledDisabledSettingValue {
  /** The setting is enabled for organizations in the enterprise. */
  ENABLED = 'ENABLED',
  /** The setting is disabled for organizations in the enterprise. */
  DISABLED = 'DISABLED',
  /** There is no policy set for organizations in the enterprise. */
  NO_POLICY = 'NO_POLICY'
}

/** The possible values for an enabled/no policy enterprise setting. */
enum Github_EnterpriseEnabledSettingValue {
  /** The setting is enabled for organizations in the enterprise. */
  ENABLED = 'ENABLED',
  /** There is no policy set for organizations in the enterprise. */
  NO_POLICY = 'NO_POLICY'
}

/** An identity provider configured to provision identities for an enterprise. */
type Github_EnterpriseIdentityProvider = Github_Node & {
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  readonly digestMethod: Maybe<Github_SamlDigestAlgorithm>;
  /** The enterprise this identity provider belongs to. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** ExternalIdentities provisioned by this identity provider. */
  readonly externalIdentities: Github_ExternalIdentityConnection;
  readonly id: Scalars['ID'];
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  readonly idpCertificate: Maybe<Scalars['Github_X509Certificate']>;
  /** The Issuer Entity ID for the SAML identity provider. */
  readonly issuer: Maybe<Scalars['String']>;
  /** Recovery codes that can be used by admins to access the enterprise if the identity provider is unavailable. */
  readonly recoveryCodes: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  readonly signatureMethod: Maybe<Github_SamlSignatureAlgorithm>;
  /** The URL endpoint for the identity provider's SAML SSO. */
  readonly ssoUrl: Maybe<Scalars['Github_URI']>;
};


/** An identity provider configured to provision identities for an enterprise. */
type Github_EnterpriseIdentityProvider_externalIdentitiesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** An object that is a member of an enterprise. */
type Github_EnterpriseMember = Github_EnterpriseUserAccount | Github_User;

/** The connection type for EnterpriseMember. */
type Github_EnterpriseMemberConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseMemberEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseMember>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A User who is a member of an enterprise through one or more organizations. */
type Github_EnterpriseMemberEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /**
   * Whether the user does not have a license for the enterprise.
   * @deprecated All members consume a license Removal on 2021-01-01 UTC.
   */
  readonly isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseMember>;
};

/** Ordering options for enterprise member connections. */
type Github_EnterpriseMemberOrder = {
  /** The field to order enterprise members by. */
  readonly field: Github_EnterpriseMemberOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which enterprise member connections can be ordered. */
enum Github_EnterpriseMemberOrderField {
  /** Order enterprise members by login */
  LOGIN = 'LOGIN',
  /** Order enterprise members by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** The possible values for the enterprise members can create repositories setting. */
enum Github_EnterpriseMembersCanCreateRepositoriesSettingValue {
  /** Organization administrators choose whether to allow members to create repositories. */
  NO_POLICY = 'NO_POLICY',
  /** Members will be able to create public and private repositories. */
  ALL = 'ALL',
  /** Members will be able to create only public repositories. */
  PUBLIC = 'PUBLIC',
  /** Members will be able to create only private repositories. */
  PRIVATE = 'PRIVATE',
  /** Members will not be able to create public or private repositories. */
  DISABLED = 'DISABLED'
}

/** The possible values for the members can make purchases setting. */
enum Github_EnterpriseMembersCanMakePurchasesSettingValue {
  /** The setting is enabled for organizations in the enterprise. */
  ENABLED = 'ENABLED',
  /** The setting is disabled for organizations in the enterprise. */
  DISABLED = 'DISABLED'
}

/** The connection type for Organization. */
type Github_EnterpriseOrganizationMembershipConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseOrganizationMembershipEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Organization>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An enterprise organization that a user is a member of. */
type Github_EnterpriseOrganizationMembershipEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Organization>;
  /** The role of the user in the enterprise membership. */
  readonly role: Github_EnterpriseUserAccountMembershipRole;
};

/** The connection type for User. */
type Github_EnterpriseOutsideCollaboratorConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseOutsideCollaboratorEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A User who is an outside collaborator of an enterprise through one or more organizations. */
type Github_EnterpriseOutsideCollaboratorEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /**
   * Whether the outside collaborator does not have a license for the enterprise.
   * @deprecated All outside collaborators consume a license Removal on 2021-01-01 UTC.
   */
  readonly isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_User>;
  /** The enterprise organization repositories this user is a member of. */
  readonly repositories: Github_EnterpriseRepositoryInfoConnection;
};


/** A User who is an outside collaborator of an enterprise through one or more organizations. */
type Github_EnterpriseOutsideCollaboratorEdge_repositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_RepositoryOrder>;
};

/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo = {
  /** A list of enterprise organizations configured with the provided action execution capabilities setting value. */
  readonly actionExecutionCapabilitySettingOrganizations: Github_OrganizationConnection;
  /** A list of all of the administrators for this enterprise. */
  readonly admins: Github_EnterpriseAdministratorConnection;
  /** A list of users in the enterprise who currently have two-factor authentication disabled. */
  readonly affiliatedUsersWithTwoFactorDisabled: Github_UserConnection;
  /** Whether or not affiliated users with two-factor authentication disabled exist in the enterprise. */
  readonly affiliatedUsersWithTwoFactorDisabledExist: Scalars['Boolean'];
  /** The setting value for whether private repository forking is enabled for repositories in organizations in this enterprise. */
  readonly allowPrivateRepositoryForkingSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided private repository forking setting value. */
  readonly allowPrivateRepositoryForkingSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for base repository permissions for organizations in this enterprise. */
  readonly defaultRepositoryPermissionSetting: Github_EnterpriseDefaultRepositoryPermissionSettingValue;
  /** A list of enterprise organizations configured with the provided default repository permission. */
  readonly defaultRepositoryPermissionSettingOrganizations: Github_OrganizationConnection;
  /** Enterprise Server installations owned by the enterprise. */
  readonly enterpriseServerInstallations: Github_EnterpriseServerInstallationConnection;
  /** The setting value for whether the enterprise has an IP allow list enabled. */
  readonly ipAllowListEnabledSetting: Github_IpAllowListEnabledSettingValue;
  /** The IP addresses that are allowed to access resources owned by the enterprise. */
  readonly ipAllowListEntries: Github_IpAllowListEntryConnection;
  /** Whether or not the default repository permission is currently being updated. */
  readonly isUpdatingDefaultRepositoryPermission: Scalars['Boolean'];
  /** Whether the two-factor authentication requirement is currently being enforced. */
  readonly isUpdatingTwoFactorRequirement: Scalars['Boolean'];
  /**
   * The setting value for whether organization members with admin permissions on a
   * repository can change repository visibility.
   */
  readonly membersCanChangeRepositoryVisibilitySetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided can change repository visibility setting value. */
  readonly membersCanChangeRepositoryVisibilitySettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether members of organizations in the enterprise can create internal repositories. */
  readonly membersCanCreateInternalRepositoriesSetting: Maybe<Scalars['Boolean']>;
  /** The setting value for whether members of organizations in the enterprise can create private repositories. */
  readonly membersCanCreatePrivateRepositoriesSetting: Maybe<Scalars['Boolean']>;
  /** The setting value for whether members of organizations in the enterprise can create public repositories. */
  readonly membersCanCreatePublicRepositoriesSetting: Maybe<Scalars['Boolean']>;
  /** The setting value for whether members of organizations in the enterprise can create repositories. */
  readonly membersCanCreateRepositoriesSetting: Maybe<Github_EnterpriseMembersCanCreateRepositoriesSettingValue>;
  /** A list of enterprise organizations configured with the provided repository creation setting value. */
  readonly membersCanCreateRepositoriesSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether members with admin permissions for repositories can delete issues. */
  readonly membersCanDeleteIssuesSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can delete issues setting value. */
  readonly membersCanDeleteIssuesSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether members with admin permissions for repositories can delete or transfer repositories. */
  readonly membersCanDeleteRepositoriesSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can delete repositories setting value. */
  readonly membersCanDeleteRepositoriesSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether members of organizations in the enterprise can invite outside collaborators. */
  readonly membersCanInviteCollaboratorsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can invite collaborators setting value. */
  readonly membersCanInviteCollaboratorsSettingOrganizations: Github_OrganizationConnection;
  /** Indicates whether members of this enterprise's organizations can purchase additional services for those organizations. */
  readonly membersCanMakePurchasesSetting: Github_EnterpriseMembersCanMakePurchasesSettingValue;
  /** The setting value for whether members with admin permissions for repositories can update protected branches. */
  readonly membersCanUpdateProtectedBranchesSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can update protected branches setting value. */
  readonly membersCanUpdateProtectedBranchesSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether members can view dependency insights. */
  readonly membersCanViewDependencyInsightsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided members can view dependency insights setting value. */
  readonly membersCanViewDependencyInsightsSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether organization projects are enabled for organizations in this enterprise. */
  readonly organizationProjectsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided organization projects setting value. */
  readonly organizationProjectsSettingOrganizations: Github_OrganizationConnection;
  /** A list of outside collaborators across the repositories in the enterprise. */
  readonly outsideCollaborators: Github_EnterpriseOutsideCollaboratorConnection;
  /** A list of pending administrator invitations for the enterprise. */
  readonly pendingAdminInvitations: Github_EnterpriseAdministratorInvitationConnection;
  /** A list of pending collaborator invitations across the repositories in the enterprise. */
  readonly pendingCollaboratorInvitations: Github_RepositoryInvitationConnection;
  /**
   * A list of pending collaborators across the repositories in the enterprise.
   * @deprecated Repository invitations can now be associated with an email, not only an invitee. Use the `pendingCollaboratorInvitations` field instead. Removal on 2020-10-01 UTC.
   */
  readonly pendingCollaborators: Github_EnterprisePendingCollaboratorConnection;
  /** A list of pending member invitations for organizations in the enterprise. */
  readonly pendingMemberInvitations: Github_EnterprisePendingMemberInvitationConnection;
  /** The setting value for whether repository projects are enabled in this enterprise. */
  readonly repositoryProjectsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided repository projects setting value. */
  readonly repositoryProjectsSettingOrganizations: Github_OrganizationConnection;
  /** The SAML Identity Provider for the enterprise. */
  readonly samlIdentityProvider: Maybe<Github_EnterpriseIdentityProvider>;
  /** A list of enterprise organizations configured with the SAML single sign-on setting value. */
  readonly samlIdentityProviderSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether team discussions are enabled for organizations in this enterprise. */
  readonly teamDiscussionsSetting: Github_EnterpriseEnabledDisabledSettingValue;
  /** A list of enterprise organizations configured with the provided team discussions setting value. */
  readonly teamDiscussionsSettingOrganizations: Github_OrganizationConnection;
  /** The setting value for whether the enterprise requires two-factor authentication for its organizations and users. */
  readonly twoFactorRequiredSetting: Github_EnterpriseEnabledSettingValue;
  /** A list of enterprise organizations configured with the two-factor authentication setting value. */
  readonly twoFactorRequiredSettingOrganizations: Github_OrganizationConnection;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_actionExecutionCapabilitySettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_adminsArgs = {
  query: Maybe<Scalars['String']>;
  role: Maybe<Github_EnterpriseAdministratorRole>;
  orderBy?: Maybe<Github_EnterpriseMemberOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_affiliatedUsersWithTwoFactorDisabledArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_allowPrivateRepositoryForkingSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_defaultRepositoryPermissionSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Github_DefaultRepositoryPermissionField;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_enterpriseServerInstallationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  connectedOnly?: Maybe<Scalars['Boolean']>;
  orderBy?: Maybe<Github_EnterpriseServerInstallationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_ipAllowListEntriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_IpAllowListEntryOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanChangeRepositoryVisibilitySettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanCreateRepositoriesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Github_OrganizationMembersCanCreateRepositoriesSettingValue;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanDeleteIssuesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanDeleteRepositoriesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanInviteCollaboratorsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanUpdateProtectedBranchesSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_membersCanViewDependencyInsightsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_organizationProjectsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
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


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_pendingAdminInvitationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_EnterpriseAdministratorInvitationOrder>;
  role: Maybe<Github_EnterpriseAdministratorRole>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_pendingCollaboratorInvitationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_RepositoryInvitationOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_pendingCollaboratorsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_RepositoryInvitationOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_pendingMemberInvitationsArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_repositoryProjectsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_samlIdentityProviderSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Github_IdentityProviderConfigurationState;
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_teamDiscussionsSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};


/** Enterprise information only visible to enterprise owners. */
type Github_EnterpriseOwnerInfo_twoFactorRequiredSettingOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  value: Scalars['Boolean'];
  orderBy?: Maybe<Github_OrganizationOrder>;
};

/** The connection type for User. */
type Github_EnterprisePendingCollaboratorConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterprisePendingCollaboratorEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
type Github_EnterprisePendingCollaboratorEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /**
   * Whether the invited collaborator does not have a license for the enterprise.
   * @deprecated All pending collaborators consume a license Removal on 2021-01-01 UTC.
   */
  readonly isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_User>;
  /** The enterprise organization repositories this user is a member of. */
  readonly repositories: Github_EnterpriseRepositoryInfoConnection;
};


/** A user with an invitation to be a collaborator on a repository owned by an organization in an enterprise. */
type Github_EnterprisePendingCollaboratorEdge_repositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_RepositoryOrder>;
};

/** The connection type for OrganizationInvitation. */
type Github_EnterprisePendingMemberInvitationConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterprisePendingMemberInvitationEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_OrganizationInvitation>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
  /** Identifies the total count of unique users in the connection. */
  readonly totalUniqueUserCount: Scalars['Int'];
};

/** An invitation to be a member in an enterprise organization. */
type Github_EnterprisePendingMemberInvitationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /**
   * Whether the invitation has a license for the enterprise.
   * @deprecated All pending members consume a license Removal on 2020-07-01 UTC.
   */
  readonly isUnlicensed: Scalars['Boolean'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_OrganizationInvitation>;
};

/** A subset of repository information queryable from an enterprise. */
type Github_EnterpriseRepositoryInfo = Github_Node & {
  readonly id: Scalars['ID'];
  /** Identifies if the repository is private. */
  readonly isPrivate: Scalars['Boolean'];
  /** The repository's name. */
  readonly name: Scalars['String'];
  /** The repository's name with owner. */
  readonly nameWithOwner: Scalars['String'];
};

/** The connection type for EnterpriseRepositoryInfo. */
type Github_EnterpriseRepositoryInfoConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseRepositoryInfoEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseRepositoryInfo>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseRepositoryInfoEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseRepositoryInfo>;
};

/** An Enterprise Server installation. */
type Github_EnterpriseServerInstallation = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The customer name to which the Enterprise Server installation belongs. */
  readonly customerName: Scalars['String'];
  /** The host name of the Enterprise Server installation. */
  readonly hostName: Scalars['String'];
  readonly id: Scalars['ID'];
  /** Whether or not the installation is connected to an Enterprise Server installation via GitHub Connect. */
  readonly isConnected: Scalars['Boolean'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** User accounts on this Enterprise Server installation. */
  readonly userAccounts: Github_EnterpriseServerUserAccountConnection;
  /** User accounts uploads for the Enterprise Server installation. */
  readonly userAccountsUploads: Github_EnterpriseServerUserAccountsUploadConnection;
};


/** An Enterprise Server installation. */
type Github_EnterpriseServerInstallation_userAccountsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Enterprise Server installation. */
type Github_EnterpriseServerInstallation_userAccountsUploadsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountsUploadOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for EnterpriseServerInstallation. */
type Github_EnterpriseServerInstallationConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerInstallationEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerInstallation>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseServerInstallationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseServerInstallation>;
};

/** Ordering options for Enterprise Server installation connections. */
type Github_EnterpriseServerInstallationOrder = {
  /** The field to order Enterprise Server installations by. */
  readonly field: Github_EnterpriseServerInstallationOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which Enterprise Server installation connections can be ordered. */
enum Github_EnterpriseServerInstallationOrderField {
  /** Order Enterprise Server installations by host name */
  HOST_NAME = 'HOST_NAME',
  /** Order Enterprise Server installations by customer name */
  CUSTOMER_NAME = 'CUSTOMER_NAME',
  /** Order Enterprise Server installations by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** A user account on an Enterprise Server installation. */
type Github_EnterpriseServerUserAccount = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** User emails belonging to this user account. */
  readonly emails: Github_EnterpriseServerUserAccountEmailConnection;
  /** The Enterprise Server installation on which this user account exists. */
  readonly enterpriseServerInstallation: Github_EnterpriseServerInstallation;
  readonly id: Scalars['ID'];
  /** Whether the user account is a site administrator on the Enterprise Server installation. */
  readonly isSiteAdmin: Scalars['Boolean'];
  /** The login of the user account on the Enterprise Server installation. */
  readonly login: Scalars['String'];
  /** The profile name of the user account on the Enterprise Server installation. */
  readonly profileName: Maybe<Scalars['String']>;
  /** The date and time when the user account was created on the Enterprise Server installation. */
  readonly remoteCreatedAt: Scalars['Github_DateTime'];
  /** The ID of the user account on the Enterprise Server installation. */
  readonly remoteUserId: Scalars['Int'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};


/** A user account on an Enterprise Server installation. */
type Github_EnterpriseServerUserAccount_emailsArgs = {
  orderBy?: Maybe<Github_EnterpriseServerUserAccountEmailOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for EnterpriseServerUserAccount. */
type Github_EnterpriseServerUserAccountConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccount>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseServerUserAccountEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseServerUserAccount>;
};

/** An email belonging to a user account on an Enterprise Server installation. */
type Github_EnterpriseServerUserAccountEmail = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The email address. */
  readonly email: Scalars['String'];
  readonly id: Scalars['ID'];
  /** Indicates whether this is the primary email of the associated user account. */
  readonly isPrimary: Scalars['Boolean'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The user account to which the email belongs. */
  readonly userAccount: Github_EnterpriseServerUserAccount;
};

/** The connection type for EnterpriseServerUserAccountEmail. */
type Github_EnterpriseServerUserAccountEmailConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountEmailEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountEmail>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseServerUserAccountEmailEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseServerUserAccountEmail>;
};

/** Ordering options for Enterprise Server user account email connections. */
type Github_EnterpriseServerUserAccountEmailOrder = {
  /** The field to order emails by. */
  readonly field: Github_EnterpriseServerUserAccountEmailOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which Enterprise Server user account email connections can be ordered. */
enum Github_EnterpriseServerUserAccountEmailOrderField {
  /** Order emails by email */
  EMAIL = 'EMAIL'
}

/** Ordering options for Enterprise Server user account connections. */
type Github_EnterpriseServerUserAccountOrder = {
  /** The field to order user accounts by. */
  readonly field: Github_EnterpriseServerUserAccountOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which Enterprise Server user account connections can be ordered. */
enum Github_EnterpriseServerUserAccountOrderField {
  /** Order user accounts by login */
  LOGIN = 'LOGIN',
  /** Order user accounts by creation time on the Enterprise Server installation */
  REMOTE_CREATED_AT = 'REMOTE_CREATED_AT'
}

/** A user accounts upload from an Enterprise Server installation. */
type Github_EnterpriseServerUserAccountsUpload = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The enterprise to which this upload belongs. */
  readonly enterprise: Github_Enterprise;
  /** The Enterprise Server installation for which this upload was generated. */
  readonly enterpriseServerInstallation: Github_EnterpriseServerInstallation;
  readonly id: Scalars['ID'];
  /** The name of the file uploaded. */
  readonly name: Scalars['String'];
  /** The synchronization state of the upload */
  readonly syncState: Github_EnterpriseServerUserAccountsUploadSyncState;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** The connection type for EnterpriseServerUserAccountsUpload. */
type Github_EnterpriseServerUserAccountsUploadConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountsUploadEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseServerUserAccountsUpload>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseServerUserAccountsUploadEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseServerUserAccountsUpload>;
};

/** Ordering options for Enterprise Server user accounts upload connections. */
type Github_EnterpriseServerUserAccountsUploadOrder = {
  /** The field to order user accounts uploads by. */
  readonly field: Github_EnterpriseServerUserAccountsUploadOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which Enterprise Server user accounts upload connections can be ordered. */
enum Github_EnterpriseServerUserAccountsUploadOrderField {
  /** Order user accounts uploads by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** Synchronization state of the Enterprise Server user accounts upload */
enum Github_EnterpriseServerUserAccountsUploadSyncState {
  /** The synchronization of the upload is pending. */
  PENDING = 'PENDING',
  /** The synchronization of the upload succeeded. */
  SUCCESS = 'SUCCESS',
  /** The synchronization of the upload failed. */
  FAILURE = 'FAILURE'
}

/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
type Github_EnterpriseUserAccount = Github_Node & Github_Actor & {
  /** A URL pointing to the enterprise user account's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The enterprise in which this user account exists. */
  readonly enterprise: Github_Enterprise;
  readonly id: Scalars['ID'];
  /** An identifier for the enterprise user account, a login or email address */
  readonly login: Scalars['String'];
  /** The name of the enterprise user account */
  readonly name: Maybe<Scalars['String']>;
  /** A list of enterprise organizations this user is a member of. */
  readonly organizations: Github_EnterpriseOrganizationMembershipConnection;
  /** The HTTP path for this user. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this user. */
  readonly url: Scalars['Github_URI'];
  /** The user within the enterprise. */
  readonly user: Maybe<Github_User>;
};


/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
type Github_EnterpriseUserAccount_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


/** An account for a user who is an admin of an enterprise or a member of an enterprise through one or more organizations. */
type Github_EnterpriseUserAccount_organizationsArgs = {
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_OrganizationOrder>;
  role: Maybe<Github_EnterpriseUserAccountMembershipRole>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for EnterpriseUserAccount. */
type Github_EnterpriseUserAccountConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_EnterpriseUserAccountEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_EnterpriseUserAccount>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_EnterpriseUserAccountEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_EnterpriseUserAccount>;
};

/** The possible roles for enterprise membership. */
enum Github_EnterpriseUserAccountMembershipRole {
  /** The user is a member of the enterprise membership. */
  MEMBER = 'MEMBER',
  /** The user is an owner of the enterprise membership. */
  OWNER = 'OWNER'
}

/** The possible GitHub Enterprise deployments where this user can exist. */
enum Github_EnterpriseUserDeployment {
  /** The user is part of a GitHub Enterprise Cloud deployment. */
  CLOUD = 'CLOUD',
  /** The user is part of a GitHub Enterprise Server deployment. */
  SERVER = 'SERVER'
}

/** An external identity provisioned by SAML SSO or SCIM. */
type Github_ExternalIdentity = Github_Node & {
  /** The GUID for this identity */
  readonly guid: Scalars['String'];
  readonly id: Scalars['ID'];
  /** Organization invitation for this SCIM-provisioned external identity */
  readonly organizationInvitation: Maybe<Github_OrganizationInvitation>;
  /** SAML Identity attributes */
  readonly samlIdentity: Maybe<Github_ExternalIdentitySamlAttributes>;
  /** SCIM Identity attributes */
  readonly scimIdentity: Maybe<Github_ExternalIdentityScimAttributes>;
  /** User linked to this external identity. Will be NULL if this identity has not been claimed by an organization member. */
  readonly user: Maybe<Github_User>;
};

/** The connection type for ExternalIdentity. */
type Github_ExternalIdentityConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ExternalIdentityEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ExternalIdentity>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ExternalIdentityEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_ExternalIdentity>;
};

/** SAML attributes for the External Identity */
type Github_ExternalIdentitySamlAttributes = {
  /** The emails associated with the SAML identity */
  readonly emails: Maybe<ReadonlyArray<Github_UserEmailMetadata>>;
  /** Family name of the SAML identity */
  readonly familyName: Maybe<Scalars['String']>;
  /** Given name of the SAML identity */
  readonly givenName: Maybe<Scalars['String']>;
  /** The groups linked to this identity in IDP */
  readonly groups: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The NameID of the SAML identity */
  readonly nameId: Maybe<Scalars['String']>;
  /** The userName of the SAML identity */
  readonly username: Maybe<Scalars['String']>;
};

/** SCIM attributes for the External Identity */
type Github_ExternalIdentityScimAttributes = {
  /** The emails associated with the SCIM identity */
  readonly emails: Maybe<ReadonlyArray<Github_UserEmailMetadata>>;
  /** Family name of the SCIM identity */
  readonly familyName: Maybe<Scalars['String']>;
  /** Given name of the SCIM identity */
  readonly givenName: Maybe<Scalars['String']>;
  /** The groups linked to this identity in IDP */
  readonly groups: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The userName of the SCIM identity */
  readonly username: Maybe<Scalars['String']>;
};

/** The connection type for User. */
type Github_FollowerConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** The connection type for User. */
type Github_FollowingConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Autogenerated input type of FollowUser */
type Github_FollowUserInput = {
  /** ID of the user to follow. */
  readonly userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of FollowUser */
type Github_FollowUserPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The user that was followed. */
  readonly user: Maybe<Github_User>;
};

/** A funding platform link for a repository. */
type Github_FundingLink = {
  /** The funding platform this link is for. */
  readonly platform: Github_FundingPlatform;
  /** The configured URL for this funding link. */
  readonly url: Scalars['Github_URI'];
};

/** The possible funding platforms for repository funding links. */
enum Github_FundingPlatform {
  /** GitHub funding platform. */
  GITHUB = 'GITHUB',
  /** Patreon funding platform. */
  PATREON = 'PATREON',
  /** Open Collective funding platform. */
  OPEN_COLLECTIVE = 'OPEN_COLLECTIVE',
  /** Ko-fi funding platform. */
  KO_FI = 'KO_FI',
  /** Tidelift funding platform. */
  TIDELIFT = 'TIDELIFT',
  /** Community Bridge funding platform. */
  COMMUNITY_BRIDGE = 'COMMUNITY_BRIDGE',
  /** Liberapay funding platform. */
  LIBERAPAY = 'LIBERAPAY',
  /** IssueHunt funding platform. */
  ISSUEHUNT = 'ISSUEHUNT',
  /** Otechie funding platform. */
  OTECHIE = 'OTECHIE',
  /** Custom funding platform. */
  CUSTOM = 'CUSTOM'
}

/** A generic hovercard context with a message and icon */
type Github_GenericHovercardContext = Github_HovercardContext & {
  /** A string describing this context */
  readonly message: Scalars['String'];
  /** An octicon to accompany this context */
  readonly octicon: Scalars['String'];
};

/** A Gist. */
type Github_Gist = Github_Node & Github_Starrable & Github_UniformResourceLocatable & {
  /** A list of comments associated with the gist */
  readonly comments: Github_GistCommentConnection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The gist description. */
  readonly description: Maybe<Scalars['String']>;
  /** The files in this gist. */
  readonly files: Maybe<ReadonlyArray<Maybe<Github_GistFile>>>;
  /** A list of forks associated with the gist */
  readonly forks: Github_GistConnection;
  readonly id: Scalars['ID'];
  /** Identifies if the gist is a fork. */
  readonly isFork: Scalars['Boolean'];
  /** Whether the gist is public or not. */
  readonly isPublic: Scalars['Boolean'];
  /** The gist name. */
  readonly name: Scalars['String'];
  /** The gist owner. */
  readonly owner: Maybe<Github_RepositoryOwner>;
  /** Identifies when the gist was last pushed to. */
  readonly pushedAt: Maybe<Scalars['Github_DateTime']>;
  /** The HTML path to this resource. */
  readonly resourcePath: Scalars['Github_URI'];
  /** A list of users who have starred this starrable. */
  readonly stargazers: Github_StargazerConnection;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this Gist. */
  readonly url: Scalars['Github_URI'];
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  readonly viewerHasStarred: Scalars['Boolean'];
};


/** A Gist. */
type Github_Gist_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A Gist. */
type Github_Gist_filesArgs = {
  limit?: Maybe<Scalars['Int']>;
  oid: Maybe<Scalars['Github_GitObjectID']>;
};


/** A Gist. */
type Github_Gist_forksArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_GistOrder>;
};


/** A Gist. */
type Github_Gist_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};

/** Represents a comment on an Gist. */
type Github_GistComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the gist. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** Identifies the comment body. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  /** The associated gist. */
  readonly gist: Github_Gist;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  readonly isMinimized: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Returns why the comment was minimized. */
  readonly minimizedReason: Maybe<Scalars['String']>;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  readonly viewerCanMinimize: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment on an Gist. */
type Github_GistComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for GistComment. */
type Github_GistCommentConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_GistCommentEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_GistComment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_GistCommentEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_GistComment>;
};

/** The connection type for Gist. */
type Github_GistConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_GistEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Gist>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_GistEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Gist>;
};

/** A file in a gist. */
type Github_GistFile = {
  /** The file name encoded to remove characters that are invalid in URL paths. */
  readonly encodedName: Maybe<Scalars['String']>;
  /** The gist file encoding. */
  readonly encoding: Maybe<Scalars['String']>;
  /** The file extension from the file name. */
  readonly extension: Maybe<Scalars['String']>;
  /** Indicates if this file is an image. */
  readonly isImage: Scalars['Boolean'];
  /** Whether the file's contents were truncated. */
  readonly isTruncated: Scalars['Boolean'];
  /** The programming language this file is written in. */
  readonly language: Maybe<Github_Language>;
  /** The gist file name. */
  readonly name: Maybe<Scalars['String']>;
  /** The gist file size in bytes. */
  readonly size: Maybe<Scalars['Int']>;
  /** UTF8 text data or null if the file is binary */
  readonly text: Maybe<Scalars['String']>;
};


/** A file in a gist. */
type Github_GistFile_textArgs = {
  truncate: Maybe<Scalars['Int']>;
};

/** Ordering options for gist connections */
type Github_GistOrder = {
  /** The field to order repositories by. */
  readonly field: Github_GistOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which gist connections can be ordered. */
enum Github_GistOrderField {
  /** Order gists by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order gists by update time */
  UPDATED_AT = 'UPDATED_AT',
  /** Order gists by push time */
  PUSHED_AT = 'PUSHED_AT'
}

/** The privacy of a Gist */
enum Github_GistPrivacy {
  /** Public */
  PUBLIC = 'PUBLIC',
  /** Secret */
  SECRET = 'SECRET',
  /** Gists that are public and secret */
  ALL = 'ALL'
}

/** Represents an actor in a Git commit (ie. an author or committer). */
type Github_GitActor = {
  /** A URL pointing to the author's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** The timestamp of the Git action (authoring or committing). */
  readonly date: Maybe<Scalars['Github_GitTimestamp']>;
  /** The email in the Git commit. */
  readonly email: Maybe<Scalars['String']>;
  /** The name in the Git commit. */
  readonly name: Maybe<Scalars['String']>;
  /** The GitHub user corresponding to the email field. Null if no such user exists. */
  readonly user: Maybe<Github_User>;
};


/** Represents an actor in a Git commit (ie. an author or committer). */
type Github_GitActor_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

/** Represents information about the GitHub instance. */
type Github_GitHubMetadata = {
  /** Returns a String that's a SHA of `github-services` */
  readonly gitHubServicesSha: Scalars['Github_GitObjectID'];
  /** IP addresses that users connect to for git operations */
  readonly gitIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
  /** IP addresses that service hooks are sent from */
  readonly hookIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
  /** IP addresses that the importer connects from */
  readonly importerIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
  /** Whether or not users are verified */
  readonly isPasswordAuthenticationVerifiable: Scalars['Boolean'];
  /** IP addresses for GitHub Pages' A records */
  readonly pagesIpAddresses: Maybe<ReadonlyArray<Scalars['String']>>;
};

/** Represents a Git object. */
type Github_GitObject = {
  /** An abbreviated version of the Git object ID */
  readonly abbreviatedOid: Scalars['String'];
  /** The HTTP path for this Git object */
  readonly commitResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this Git object */
  readonly commitUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  /** The Git object ID */
  readonly oid: Scalars['Github_GitObjectID'];
  /** The Repository the Git object belongs to */
  readonly repository: Github_Repository;
};


/** Information about a signature (GPG or S/MIME) on a Commit or Tag. */
type Github_GitSignature = {
  /** Email used to sign this object. */
  readonly email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  readonly isValid: Scalars['Boolean'];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  readonly payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  readonly signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  readonly signer: Maybe<Github_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  readonly state: Github_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

/** The state of a Git signature. */
enum Github_GitSignatureState {
  /** Valid signature and verified by GitHub */
  VALID = 'VALID',
  /** Invalid signature */
  INVALID = 'INVALID',
  /** Malformed signature */
  MALFORMED_SIG = 'MALFORMED_SIG',
  /** Key used for signing not known to GitHub */
  UNKNOWN_KEY = 'UNKNOWN_KEY',
  /** Invalid email used for signing */
  BAD_EMAIL = 'BAD_EMAIL',
  /** Email used for signing unverified on GitHub */
  UNVERIFIED_EMAIL = 'UNVERIFIED_EMAIL',
  /** Email used for signing not known to GitHub */
  NO_USER = 'NO_USER',
  /** Unknown signature type */
  UNKNOWN_SIG_TYPE = 'UNKNOWN_SIG_TYPE',
  /** Unsigned */
  UNSIGNED = 'UNSIGNED',
  /** Internal error - the GPG verification service is unavailable at the moment */
  GPGVERIFY_UNAVAILABLE = 'GPGVERIFY_UNAVAILABLE',
  /** Internal error - the GPG verification service misbehaved */
  GPGVERIFY_ERROR = 'GPGVERIFY_ERROR',
  /** The usage flags for the key that signed this don't allow signing */
  NOT_SIGNING_KEY = 'NOT_SIGNING_KEY',
  /** Signing key expired */
  EXPIRED_KEY = 'EXPIRED_KEY',
  /** Valid signature, pending certificate revocation checking */
  OCSP_PENDING = 'OCSP_PENDING',
  /** Valid siganture, though certificate revocation check failed */
  OCSP_ERROR = 'OCSP_ERROR',
  /** The signing certificate or its chain could not be verified */
  BAD_CERT = 'BAD_CERT',
  /** One or more certificates in chain has been revoked */
  OCSP_REVOKED = 'OCSP_REVOKED'
}



/** Represents a GPG signature on a Commit or Tag. */
type Github_GpgSignature = Github_GitSignature & {
  /** Email used to sign this object. */
  readonly email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  readonly isValid: Scalars['Boolean'];
  /** Hex-encoded ID of the key that signed this object. */
  readonly keyId: Maybe<Scalars['String']>;
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  readonly payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  readonly signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  readonly signer: Maybe<Github_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  readonly state: Github_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

/** Represents a 'head_ref_deleted' event on a given pull request. */
type Github_HeadRefDeletedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the Ref associated with the `head_ref_deleted` event. */
  readonly headRef: Maybe<Github_Ref>;
  /** Identifies the name of the Ref associated with the `head_ref_deleted` event. */
  readonly headRefName: Scalars['String'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
};

/** Represents a 'head_ref_force_pushed' event on a given pull request. */
type Github_HeadRefForcePushedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the after commit SHA for the 'head_ref_force_pushed' event. */
  readonly afterCommit: Maybe<Github_Commit>;
  /** Identifies the before commit SHA for the 'head_ref_force_pushed' event. */
  readonly beforeCommit: Maybe<Github_Commit>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** Identifies the fully qualified ref name for the 'head_ref_force_pushed' event. */
  readonly ref: Maybe<Github_Ref>;
};

/** Represents a 'head_ref_restored' event on a given pull request. */
type Github_HeadRefRestoredEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
};

/** Detail needed to display a hovercard for a user */
type Github_Hovercard = {
  /** Each of the contexts for this hovercard */
  readonly contexts: ReadonlyArray<Github_HovercardContext>;
};

/** An individual line of a hovercard */
type Github_HovercardContext = {
  /** A string describing this context */
  readonly message: Scalars['String'];
  /** An octicon to accompany this context */
  readonly octicon: Scalars['String'];
};


/** The possible states in which authentication can be configured with an identity provider. */
enum Github_IdentityProviderConfigurationState {
  /** Authentication with an identity provider is configured and enforced. */
  ENFORCED = 'ENFORCED',
  /** Authentication with an identity provider is configured but not enforced. */
  CONFIGURED = 'CONFIGURED',
  /** Authentication with an identity provider is not configured. */
  UNCONFIGURED = 'UNCONFIGURED'
}

/** Autogenerated input type of InviteEnterpriseAdmin */
type Github_InviteEnterpriseAdminInput = {
  /** The ID of the enterprise to which you want to invite an administrator. */
  readonly enterpriseId: Scalars['ID'];
  /** The login of a user to invite as an administrator. */
  readonly invitee: Maybe<Scalars['String']>;
  /** The email of the person to invite as an administrator. */
  readonly email: Maybe<Scalars['String']>;
  /** The role of the administrator. */
  readonly role: Maybe<Github_EnterpriseAdministratorRole>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of InviteEnterpriseAdmin */
type Github_InviteEnterpriseAdminPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The created enterprise administrator invitation. */
  readonly invitation: Maybe<Github_EnterpriseAdministratorInvitation>;
};

/** The possible values for the IP allow list enabled setting. */
enum Github_IpAllowListEnabledSettingValue {
  /** The setting is enabled for the owner. */
  ENABLED = 'ENABLED',
  /** The setting is disabled for the owner. */
  DISABLED = 'DISABLED'
}

/** An IP address or range of addresses that is allowed to access an owner's resources. */
type Github_IpAllowListEntry = Github_Node & {
  /** A single IP address or range of IP addresses in CIDR notation. */
  readonly allowListValue: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Whether the entry is currently active. */
  readonly isActive: Scalars['Boolean'];
  /** The name of the IP allow list entry. */
  readonly name: Maybe<Scalars['String']>;
  /** The owner of the IP allow list entry. */
  readonly owner: Github_IpAllowListOwner;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** The connection type for IpAllowListEntry. */
type Github_IpAllowListEntryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IpAllowListEntryEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IpAllowListEntry>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_IpAllowListEntryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_IpAllowListEntry>;
};

/** Ordering options for IP allow list entry connections. */
type Github_IpAllowListEntryOrder = {
  /** The field to order IP allow list entries by. */
  readonly field: Github_IpAllowListEntryOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which IP allow list entry connections can be ordered. */
enum Github_IpAllowListEntryOrderField {
  /** Order IP allow list entries by creation time. */
  CREATED_AT = 'CREATED_AT',
  /** Order IP allow list entries by the allow list value. */
  ALLOW_LIST_VALUE = 'ALLOW_LIST_VALUE'
}

/** Types that can own an IP allow list. */
type Github_IpAllowListOwner = Github_Enterprise | Github_Organization;

/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue = Github_Node & Github_Assignable & Github_Closable & Github_Comment & Github_Updatable & Github_UpdatableComment & Github_Labelable & Github_Lockable & Github_Reactable & Github_RepositoryNode & Github_Subscribable & Github_UniformResourceLocatable & {
  /** Reason that the conversation was locked. */
  readonly activeLockReason: Maybe<Github_LockReason>;
  /** A list of Users assigned to this object. */
  readonly assignees: Github_UserConnection;
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** Identifies the body of the issue. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** Identifies the body of the issue rendered to text. */
  readonly bodyText: Scalars['String'];
  /** `true` if the object is closed (definition of closed may depend on type) */
  readonly closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of comments associated with the Issue. */
  readonly comments: Github_IssueCommentConnection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  /** The hovercard information for this issue */
  readonly hovercard: Github_Hovercard;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** A list of labels associated with the object. */
  readonly labels: Maybe<Github_LabelConnection>;
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** `true` if the object is locked */
  readonly locked: Scalars['Boolean'];
  /** Identifies the milestone associated with the issue. */
  readonly milestone: Maybe<Github_Milestone>;
  /** Identifies the issue number. */
  readonly number: Scalars['Int'];
  /** A list of Users that are participating in the Issue conversation. */
  readonly participants: Github_UserConnection;
  /** List of project cards associated with this issue. */
  readonly projectCards: Github_ProjectCardConnection;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
  /** The HTTP path for this issue */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the state of the issue. */
  readonly state: Github_IssueState;
  /**
   * A list of events, comments, commits, etc. associated with the issue.
   * @deprecated `timeline` will be removed Use Issue.timelineItems instead. Removal on 2020-10-01 UTC.
   */
  readonly timeline: Github_IssueTimelineConnection;
  /** A list of events, comments, commits, etc. associated with the issue. */
  readonly timelineItems: Github_IssueTimelineItemsConnection;
  /** Identifies the issue title. */
  readonly title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this issue */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
  readonly customHTML: Maybe<Scalars['String']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_assigneesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_hovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_participantsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_projectCardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_timelineArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_timelineItemsArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  skip: Maybe<Scalars['Int']>;
  itemTypes: Maybe<ReadonlyArray<Github_IssueTimelineItemsItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project. */
type Github_Issue_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Represents a comment on an Issue. */
type Github_IssueComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** The body as Markdown. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  readonly isMinimized: Scalars['Boolean'];
  /** Identifies the issue associated with the comment. */
  readonly issue: Github_Issue;
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Returns why the comment was minimized. */
  readonly minimizedReason: Maybe<Scalars['String']>;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /**
   * Returns the pull request associated with the comment, if this comment was made on a
   * pull request.
   */
  readonly pullRequest: Maybe<Github_PullRequest>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
  /** The HTTP path for this issue comment */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this issue comment */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  readonly viewerCanMinimize: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** Represents a comment on an Issue. */
type Github_IssueComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** Represents a comment on an Issue. */
type Github_IssueComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for IssueComment. */
type Github_IssueCommentConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueCommentEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IssueComment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_IssueCommentEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_IssueComment>;
};

/** The connection type for Issue. */
type Github_IssueConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Issue>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** This aggregates issues opened by a user within one repository. */
type Github_IssueContributionsByRepository = {
  /** The issue contributions. */
  readonly contributions: Github_CreatedIssueContributionConnection;
  /** The repository in which the issues were opened. */
  readonly repository: Github_Repository;
};


/** This aggregates issues opened by a user within one repository. */
type Github_IssueContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};

/** An edge in a connection. */
type Github_IssueEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Issue>;
};

/** Ways in which to filter lists of issues. */
type Github_IssueFilters = {
  /**
   * List issues assigned to given name. Pass in `null` for issues with no assigned
   * user, and `*` for issues assigned to any user.
   */
  readonly assignee: Maybe<Scalars['String']>;
  /** List issues created by given name. */
  readonly createdBy: Maybe<Scalars['String']>;
  /** List issues where the list of label names exist on the issue. */
  readonly labels: Maybe<ReadonlyArray<Scalars['String']>>;
  /** List issues where the given name is mentioned in the issue. */
  readonly mentioned: Maybe<Scalars['String']>;
  /**
   * List issues by given milestone argument. If an string representation of an
   * integer is passed, it should refer to a milestone by its number field. Pass in
   * `null` for issues with no milestone, and `*` for issues that are assigned to any milestone.
   */
  readonly milestone: Maybe<Scalars['String']>;
  /** List issues that have been updated at or after the given date. */
  readonly since: Maybe<Scalars['Github_DateTime']>;
  /** List issues filtered by the list of states given. */
  readonly states: Maybe<ReadonlyArray<Github_IssueState>>;
  /** List issues subscribed to by viewer. */
  readonly viewerSubscribed: Maybe<Scalars['Boolean']>;
};

/** Ways in which lists of issues can be ordered upon return. */
type Github_IssueOrder = {
  /** The field in which to order issues by. */
  readonly field: Github_IssueOrderField;
  /** The direction in which to order issues by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which issue connections can be ordered. */
enum Github_IssueOrderField {
  /** Order issues by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order issues by update time */
  UPDATED_AT = 'UPDATED_AT',
  /** Order issues by comment count */
  COMMENTS = 'COMMENTS'
}

/** Used for return value of Repository.issueOrPullRequest. */
type Github_IssueOrPullRequest = Github_Issue | Github_PullRequest;

/** The possible states of an issue. */
enum Github_IssueState {
  /** An issue that is still open */
  OPEN = 'OPEN',
  /** An issue that has been closed */
  CLOSED = 'CLOSED'
}

/** The connection type for IssueTimelineItem. */
type Github_IssueTimelineConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItemEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItem>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An item in an issue timeline */
type Github_IssueTimelineItem = Github_AssignedEvent | Github_ClosedEvent | Github_Commit | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MilestonedEvent | Github_ReferencedEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

/** An edge in a connection. */
type Github_IssueTimelineItemEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_IssueTimelineItem>;
};

/** An item in an issue timeline */
type Github_IssueTimelineItems = Github_AddedToProjectEvent | Github_AssignedEvent | Github_ClosedEvent | Github_CommentDeletedEvent | Github_ConnectedEvent | Github_ConvertedNoteToIssueEvent | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DisconnectedEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MarkedAsDuplicateEvent | Github_MentionedEvent | Github_MilestonedEvent | Github_MovedColumnsInProjectEvent | Github_PinnedEvent | Github_ReferencedEvent | Github_RemovedFromProjectEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnmarkedAsDuplicateEvent | Github_UnpinnedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

/** The connection type for IssueTimelineItems. */
type Github_IssueTimelineItemsConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  readonly filteredCount: Scalars['Int'];
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_IssueTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  readonly pageCount: Scalars['Int'];
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
  /** Identifies the date and time when the timeline was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** An edge in a connection. */
type Github_IssueTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_IssueTimelineItems>;
};

/** The possible item types found in a timeline. */
enum Github_IssueTimelineItemsItemType {
  /** Represents a comment on an Issue. */
  ISSUE_COMMENT = 'ISSUE_COMMENT',
  /** Represents a mention made by one issue or pull request to another. */
  CROSS_REFERENCED_EVENT = 'CROSS_REFERENCED_EVENT',
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  ADDED_TO_PROJECT_EVENT = 'ADDED_TO_PROJECT_EVENT',
  /** Represents an 'assigned' event on any assignable object. */
  ASSIGNED_EVENT = 'ASSIGNED_EVENT',
  /** Represents a 'closed' event on any `Closable`. */
  CLOSED_EVENT = 'CLOSED_EVENT',
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  COMMENT_DELETED_EVENT = 'COMMENT_DELETED_EVENT',
  /** Represents a 'connected' event on a given issue or pull request. */
  CONNECTED_EVENT = 'CONNECTED_EVENT',
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  CONVERTED_NOTE_TO_ISSUE_EVENT = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DEMILESTONED_EVENT = 'DEMILESTONED_EVENT',
  /** Represents a 'disconnected' event on a given issue or pull request. */
  DISCONNECTED_EVENT = 'DISCONNECTED_EVENT',
  /** Represents a 'labeled' event on a given issue or pull request. */
  LABELED_EVENT = 'LABELED_EVENT',
  /** Represents a 'locked' event on a given issue or pull request. */
  LOCKED_EVENT = 'LOCKED_EVENT',
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  MARKED_AS_DUPLICATE_EVENT = 'MARKED_AS_DUPLICATE_EVENT',
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MENTIONED_EVENT = 'MENTIONED_EVENT',
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MILESTONED_EVENT = 'MILESTONED_EVENT',
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MOVED_COLUMNS_IN_PROJECT_EVENT = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  /** Represents a 'pinned' event on a given issue or pull request. */
  PINNED_EVENT = 'PINNED_EVENT',
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  REFERENCED_EVENT = 'REFERENCED_EVENT',
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  REMOVED_FROM_PROJECT_EVENT = 'REMOVED_FROM_PROJECT_EVENT',
  /** Represents a 'renamed' event on a given issue or pull request */
  RENAMED_TITLE_EVENT = 'RENAMED_TITLE_EVENT',
  /** Represents a 'reopened' event on any `Closable`. */
  REOPENED_EVENT = 'REOPENED_EVENT',
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SUBSCRIBED_EVENT = 'SUBSCRIBED_EVENT',
  /** Represents a 'transferred' event on a given issue or pull request. */
  TRANSFERRED_EVENT = 'TRANSFERRED_EVENT',
  /** Represents an 'unassigned' event on any assignable object. */
  UNASSIGNED_EVENT = 'UNASSIGNED_EVENT',
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UNLABELED_EVENT = 'UNLABELED_EVENT',
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UNLOCKED_EVENT = 'UNLOCKED_EVENT',
  /** Represents a 'user_blocked' event on a given user. */
  USER_BLOCKED_EVENT = 'USER_BLOCKED_EVENT',
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  UNMARKED_AS_DUPLICATE_EVENT = 'UNMARKED_AS_DUPLICATE_EVENT',
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UNPINNED_EVENT = 'UNPINNED_EVENT',
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UNSUBSCRIBED_EVENT = 'UNSUBSCRIBED_EVENT'
}

/** Represents a user signing up for a GitHub account. */
type Github_JoinedGitHubContribution = Github_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** A label for categorizing Issues or Milestones with a given Repository. */
type Github_Label = Github_Node & {
  /** Identifies the label color. */
  readonly color: Scalars['String'];
  /** Identifies the date and time when the label was created. */
  readonly createdAt: Maybe<Scalars['Github_DateTime']>;
  /** A brief description of this label. */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Indicates whether or not this is a default label. */
  readonly isDefault: Scalars['Boolean'];
  /** A list of issues associated with this label. */
  readonly issues: Github_IssueConnection;
  /** Identifies the label name. */
  readonly name: Scalars['String'];
  /** A list of pull requests associated with this label. */
  readonly pullRequests: Github_PullRequestConnection;
  /** The repository associated with this label. */
  readonly repository: Github_Repository;
  /** The HTTP path for this label. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the label was last updated. */
  readonly updatedAt: Maybe<Scalars['Github_DateTime']>;
  /** The HTTP URL for this label. */
  readonly url: Scalars['Github_URI'];
};


/** A label for categorizing Issues or Milestones with a given Repository. */
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


/** A label for categorizing Issues or Milestones with a given Repository. */
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

/** An object that can have labels assigned to it. */
type Github_Labelable = {
  /** A list of labels associated with the object. */
  readonly labels: Maybe<Github_LabelConnection>;
};


/** An object that can have labels assigned to it. */
type Github_Labelable_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for Label. */
type Github_LabelConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_LabelEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Label>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a 'labeled' event on a given issue or pull request. */
type Github_LabeledEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the label associated with the 'labeled' event. */
  readonly label: Github_Label;
  /** Identifies the `Labelable` associated with the event. */
  readonly labelable: Github_Labelable;
};

/** An edge in a connection. */
type Github_LabelEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Label>;
};

/** Ways in which lists of labels can be ordered upon return. */
type Github_LabelOrder = {
  /** The field in which to order labels by. */
  readonly field: Github_LabelOrderField;
  /** The direction in which to order labels by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which label connections can be ordered. */
enum Github_LabelOrderField {
  /** Order labels by name  */
  NAME = 'NAME',
  /** Order labels by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** Represents a given language found in repositories. */
type Github_Language = Github_Node & {
  /** The color defined for the current language. */
  readonly color: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The name of the current language. */
  readonly name: Scalars['String'];
};

/** A list of languages associated with the parent. */
type Github_LanguageConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_LanguageEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Language>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
  /** The total size in bytes of files written in that language. */
  readonly totalSize: Scalars['Int'];
};

/** Represents the language of a repository. */
type Github_LanguageEdge = {
  readonly cursor: Scalars['String'];
  readonly node: Github_Language;
  /** The number of bytes of code written in the language. */
  readonly size: Scalars['Int'];
};

/** Ordering options for language connections. */
type Github_LanguageOrder = {
  /** The field to order languages by. */
  readonly field: Github_LanguageOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which language connections can be ordered. */
enum Github_LanguageOrderField {
  /** Order languages by the size of all files containing the language */
  SIZE = 'SIZE'
}

/** A repository's open source license */
type Github_License = Github_Node & {
  /** The full text of the license */
  readonly body: Scalars['String'];
  /** The conditions set by the license */
  readonly conditions: ReadonlyArray<Maybe<Github_LicenseRule>>;
  /** A human-readable description of the license */
  readonly description: Maybe<Scalars['String']>;
  /** Whether the license should be featured */
  readonly featured: Scalars['Boolean'];
  /** Whether the license should be displayed in license pickers */
  readonly hidden: Scalars['Boolean'];
  readonly id: Scalars['ID'];
  /** Instructions on how to implement the license */
  readonly implementation: Maybe<Scalars['String']>;
  /** The lowercased SPDX ID of the license */
  readonly key: Scalars['String'];
  /** The limitations set by the license */
  readonly limitations: ReadonlyArray<Maybe<Github_LicenseRule>>;
  /** The license full name specified by <https://spdx.org/licenses> */
  readonly name: Scalars['String'];
  /** Customary short name if applicable (e.g, GPLv3) */
  readonly nickname: Maybe<Scalars['String']>;
  /** The permissions set by the license */
  readonly permissions: ReadonlyArray<Maybe<Github_LicenseRule>>;
  /** Whether the license is a pseudo-license placeholder (e.g., other, no-license) */
  readonly pseudoLicense: Scalars['Boolean'];
  /** Short identifier specified by <https://spdx.org/licenses> */
  readonly spdxId: Maybe<Scalars['String']>;
  /** URL to the license on <https://choosealicense.com> */
  readonly url: Maybe<Scalars['Github_URI']>;
};

/** Describes a License's conditions, permissions, and limitations */
type Github_LicenseRule = {
  /** A description of the rule */
  readonly description: Scalars['String'];
  /** The machine-readable rule key */
  readonly key: Scalars['String'];
  /** The human-readable rule label */
  readonly label: Scalars['String'];
};

/** Autogenerated input type of LinkRepositoryToProject */
type Github_LinkRepositoryToProjectInput = {
  /** The ID of the Project to link to a Repository */
  readonly projectId: Scalars['ID'];
  /** The ID of the Repository to link to a Project. */
  readonly repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of LinkRepositoryToProject */
type Github_LinkRepositoryToProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The linked Project. */
  readonly project: Maybe<Github_Project>;
  /** The linked Repository. */
  readonly repository: Maybe<Github_Repository>;
};

/** An object that can be locked. */
type Github_Lockable = {
  /** Reason that the conversation was locked. */
  readonly activeLockReason: Maybe<Github_LockReason>;
  /** `true` if the object is locked */
  readonly locked: Scalars['Boolean'];
};

/** Represents a 'locked' event on a given issue or pull request. */
type Github_LockedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Reason that the conversation was locked (optional). */
  readonly lockReason: Maybe<Github_LockReason>;
  /** Object that was locked. */
  readonly lockable: Github_Lockable;
};

/** Autogenerated input type of LockLockable */
type Github_LockLockableInput = {
  /** ID of the issue or pull request to be locked. */
  readonly lockableId: Scalars['ID'];
  /** A reason for why the issue or pull request will be locked. */
  readonly lockReason: Maybe<Github_LockReason>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of LockLockable */
type Github_LockLockablePayload = {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The item that was locked. */
  readonly lockedRecord: Maybe<Github_Lockable>;
};

/** The possible reasons that an issue or pull request was locked. */
enum Github_LockReason {
  /** The issue or pull request was locked because the conversation was off-topic. */
  OFF_TOPIC = 'OFF_TOPIC',
  /** The issue or pull request was locked because the conversation was too heated. */
  TOO_HEATED = 'TOO_HEATED',
  /** The issue or pull request was locked because the conversation was resolved. */
  RESOLVED = 'RESOLVED',
  /** The issue or pull request was locked because the conversation was spam. */
  SPAM = 'SPAM'
}

/** A placeholder user for attribution of imported data on GitHub. */
type Github_Mannequin = Github_Node & Github_Actor & Github_UniformResourceLocatable & {
  /** A URL pointing to the GitHub App's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The mannequin's email on the source instance. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The username of the actor. */
  readonly login: Scalars['String'];
  /** The HTML path to this resource. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The URL to this resource. */
  readonly url: Scalars['Github_URI'];
};


/** A placeholder user for attribution of imported data on GitHub. */
type Github_Mannequin_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};

/** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
type Github_MarkedAsDuplicateEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
};

/** A public description of a Marketplace category. */
type Github_MarketplaceCategory = Github_Node & {
  /** The category's description. */
  readonly description: Maybe<Scalars['String']>;
  /** The technical description of how apps listed in this category work with GitHub. */
  readonly howItWorks: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The category's name. */
  readonly name: Scalars['String'];
  /** How many Marketplace listings have this as their primary category. */
  readonly primaryListingCount: Scalars['Int'];
  /** The HTTP path for this Marketplace category. */
  readonly resourcePath: Scalars['Github_URI'];
  /** How many Marketplace listings have this as their secondary category. */
  readonly secondaryListingCount: Scalars['Int'];
  /** The short name of the category used in its URL. */
  readonly slug: Scalars['String'];
  /** The HTTP URL for this Marketplace category. */
  readonly url: Scalars['Github_URI'];
};

/** A listing in the GitHub integration marketplace. */
type Github_MarketplaceListing = Github_Node & {
  /** The GitHub App this listing represents. */
  readonly app: Maybe<Github_App>;
  /** URL to the listing owner's company site. */
  readonly companyUrl: Maybe<Scalars['Github_URI']>;
  /** The HTTP path for configuring access to the listing's integration or OAuth app */
  readonly configurationResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for configuring access to the listing's integration or OAuth app */
  readonly configurationUrl: Scalars['Github_URI'];
  /** URL to the listing's documentation. */
  readonly documentationUrl: Maybe<Scalars['Github_URI']>;
  /** The listing's detailed description. */
  readonly extendedDescription: Maybe<Scalars['String']>;
  /** The listing's detailed description rendered to HTML. */
  readonly extendedDescriptionHTML: Scalars['Github_HTML'];
  /** The listing's introductory description. */
  readonly fullDescription: Scalars['String'];
  /** The listing's introductory description rendered to HTML. */
  readonly fullDescriptionHTML: Scalars['Github_HTML'];
  /** Does this listing have any plans with a free trial? */
  readonly hasPublishedFreeTrialPlans: Scalars['Boolean'];
  /** Does this listing have a terms of service link? */
  readonly hasTermsOfService: Scalars['Boolean'];
  /** A technical description of how this app works with GitHub. */
  readonly howItWorks: Maybe<Scalars['String']>;
  /** The listing's technical description rendered to HTML. */
  readonly howItWorksHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  /** URL to install the product to the viewer's account or organization. */
  readonly installationUrl: Maybe<Scalars['Github_URI']>;
  /** Whether this listing's app has been installed for the current viewer */
  readonly installedForViewer: Scalars['Boolean'];
  /** Whether this listing has been removed from the Marketplace. */
  readonly isArchived: Scalars['Boolean'];
  /**
   * Whether this listing is still an editable draft that has not been submitted
   * for review and is not publicly visible in the Marketplace.
   */
  readonly isDraft: Scalars['Boolean'];
  /** Whether the product this listing represents is available as part of a paid plan. */
  readonly isPaid: Scalars['Boolean'];
  /** Whether this listing has been approved for display in the Marketplace. */
  readonly isPublic: Scalars['Boolean'];
  /** Whether this listing has been rejected by GitHub for display in the Marketplace. */
  readonly isRejected: Scalars['Boolean'];
  /** Whether this listing has been approved for unverified display in the Marketplace. */
  readonly isUnverified: Scalars['Boolean'];
  /** Whether this draft listing has been submitted for review for approval to be unverified in the Marketplace. */
  readonly isUnverifiedPending: Scalars['Boolean'];
  /** Whether this draft listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  readonly isVerificationPendingFromDraft: Scalars['Boolean'];
  /** Whether this unverified listing has been submitted for review from GitHub for approval to be verified in the Marketplace. */
  readonly isVerificationPendingFromUnverified: Scalars['Boolean'];
  /** Whether this listing has been approved for verified display in the Marketplace. */
  readonly isVerified: Scalars['Boolean'];
  /** The hex color code, without the leading '#', for the logo background. */
  readonly logoBackgroundColor: Scalars['String'];
  /** URL for the listing's logo image. */
  readonly logoUrl: Maybe<Scalars['Github_URI']>;
  /** The listing's full name. */
  readonly name: Scalars['String'];
  /** The listing's very short description without a trailing period or ampersands. */
  readonly normalizedShortDescription: Scalars['String'];
  /** URL to the listing's detailed pricing. */
  readonly pricingUrl: Maybe<Scalars['Github_URI']>;
  /** The category that best describes the listing. */
  readonly primaryCategory: Github_MarketplaceCategory;
  /** URL to the listing's privacy policy, may return an empty string for listings that do not require a privacy policy URL. */
  readonly privacyPolicyUrl: Scalars['Github_URI'];
  /** The HTTP path for the Marketplace listing. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The URLs for the listing's screenshots. */
  readonly screenshotUrls: ReadonlyArray<Maybe<Scalars['String']>>;
  /** An alternate category that describes the listing. */
  readonly secondaryCategory: Maybe<Github_MarketplaceCategory>;
  /** The listing's very short description. */
  readonly shortDescription: Scalars['String'];
  /** The short name of the listing used in its URL. */
  readonly slug: Scalars['String'];
  /** URL to the listing's status page. */
  readonly statusUrl: Maybe<Scalars['Github_URI']>;
  /** An email address for support for this listing's app. */
  readonly supportEmail: Maybe<Scalars['String']>;
  /**
   * Either a URL or an email address for support for this listing's app, may
   * return an empty string for listings that do not require a support URL.
   */
  readonly supportUrl: Scalars['Github_URI'];
  /** URL to the listing's terms of service. */
  readonly termsOfServiceUrl: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the Marketplace listing. */
  readonly url: Scalars['Github_URI'];
  /** Can the current viewer add plans for this Marketplace listing. */
  readonly viewerCanAddPlans: Scalars['Boolean'];
  /** Can the current viewer approve this Marketplace listing. */
  readonly viewerCanApprove: Scalars['Boolean'];
  /** Can the current viewer delist this Marketplace listing. */
  readonly viewerCanDelist: Scalars['Boolean'];
  /** Can the current viewer edit this Marketplace listing. */
  readonly viewerCanEdit: Scalars['Boolean'];
  /**
   * Can the current viewer edit the primary and secondary category of this
   * Marketplace listing.
   */
  readonly viewerCanEditCategories: Scalars['Boolean'];
  /** Can the current viewer edit the plans for this Marketplace listing. */
  readonly viewerCanEditPlans: Scalars['Boolean'];
  /**
   * Can the current viewer return this Marketplace listing to draft state
   * so it becomes editable again.
   */
  readonly viewerCanRedraft: Scalars['Boolean'];
  /**
   * Can the current viewer reject this Marketplace listing by returning it to
   * an editable draft state or rejecting it entirely.
   */
  readonly viewerCanReject: Scalars['Boolean'];
  /**
   * Can the current viewer request this listing be reviewed for display in
   * the Marketplace as verified.
   */
  readonly viewerCanRequestApproval: Scalars['Boolean'];
  /** Indicates whether the current user has an active subscription to this Marketplace listing. */
  readonly viewerHasPurchased: Scalars['Boolean'];
  /**
   * Indicates if the current user has purchased a subscription to this Marketplace listing
   * for all of the organizations the user owns.
   */
  readonly viewerHasPurchasedForAllOrganizations: Scalars['Boolean'];
  /** Does the current viewer role allow them to administer this Marketplace listing. */
  readonly viewerIsListingAdmin: Scalars['Boolean'];
};


/** A listing in the GitHub integration marketplace. */
type Github_MarketplaceListing_logoUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** Look up Marketplace Listings */
type Github_MarketplaceListingConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_MarketplaceListingEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_MarketplaceListing>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_MarketplaceListingEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_MarketplaceListing>;
};

/** Autogenerated input type of MarkPullRequestReadyForReview */
type Github_MarkPullRequestReadyForReviewInput = {
  /** ID of the pull request to be marked as ready for review. */
  readonly pullRequestId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MarkPullRequestReadyForReview */
type Github_MarkPullRequestReadyForReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The pull request that is ready for review. */
  readonly pullRequest: Maybe<Github_PullRequest>;
};

/** Audit log entry for a members_can_delete_repos.clear event. */
type Github_MembersCanDeleteReposClearAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a members_can_delete_repos.disable event. */
type Github_MembersCanDeleteReposDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a members_can_delete_repos.enable event. */
type Github_MembersCanDeleteReposEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Entities that have members who can set status messages. */
type Github_MemberStatusable = {
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  readonly memberStatuses: Github_UserStatusConnection;
};


/** Entities that have members who can set status messages. */
type Github_MemberStatusable_memberStatusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_UserStatusOrder>;
};

/** Represents a 'mentioned' event on a given issue or pull request. */
type Github_MentionedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Whether or not a PullRequest can be merged. */
enum Github_MergeableState {
  /** The pull request can be merged. */
  MERGEABLE = 'MERGEABLE',
  /** The pull request cannot be merged due to merge conflicts. */
  CONFLICTING = 'CONFLICTING',
  /** The mergeability of the pull request is still being calculated. */
  UNKNOWN = 'UNKNOWN'
}

/** Autogenerated input type of MergeBranch */
type Github_MergeBranchInput = {
  /** The Node ID of the Repository containing the base branch that will be modified. */
  readonly repositoryId: Scalars['ID'];
  /** The name of the base branch that the provided head will be merged into. */
  readonly base: Scalars['String'];
  /** The head to merge into the base branch. This can be a branch name or a commit GitObjectID. */
  readonly head: Scalars['String'];
  /** Message to use for the merge commit. If omitted, a default will be used. */
  readonly commitMessage: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MergeBranch */
type Github_MergeBranchPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The resulting merge Commit. */
  readonly mergeCommit: Maybe<Github_Commit>;
};

/** Represents a 'merged' event on a given pull request. */
type Github_MergedEvent = Github_Node & Github_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the commit associated with the `merge` event. */
  readonly commit: Maybe<Github_Commit>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the Ref associated with the `merge` event. */
  readonly mergeRef: Maybe<Github_Ref>;
  /** Identifies the name of the Ref associated with the `merge` event. */
  readonly mergeRefName: Scalars['String'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** The HTTP path for this merged event. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this merged event. */
  readonly url: Scalars['Github_URI'];
};

/** Autogenerated input type of MergePullRequest */
type Github_MergePullRequestInput = {
  /** ID of the pull request to be merged. */
  readonly pullRequestId: Scalars['ID'];
  /** Commit headline to use for the merge commit; if omitted, a default message will be used. */
  readonly commitHeadline: Maybe<Scalars['String']>;
  /** Commit body to use for the merge commit; if omitted, a default message will be used */
  readonly commitBody: Maybe<Scalars['String']>;
  /** OID that the pull request head ref must match to allow merge; if omitted, no check is performed. */
  readonly expectedHeadOid: Maybe<Scalars['Github_GitObjectID']>;
  /** The merge method to use. If omitted, defaults to 'MERGE' */
  readonly mergeMethod: Maybe<Github_PullRequestMergeMethod>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MergePullRequest */
type Github_MergePullRequestPayload = {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The pull request that was merged. */
  readonly pullRequest: Maybe<Github_PullRequest>;
};

/** Represents a Milestone object on a given repository. */
type Github_Milestone = Github_Node & Github_Closable & Github_UniformResourceLocatable & {
  /** `true` if the object is closed (definition of closed may depend on type) */
  readonly closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the actor who created the milestone. */
  readonly creator: Maybe<Github_Actor>;
  /** Identifies the description of the milestone. */
  readonly description: Maybe<Scalars['String']>;
  /** Identifies the due date of the milestone. */
  readonly dueOn: Maybe<Scalars['Github_DateTime']>;
  readonly id: Scalars['ID'];
  /** Just for debugging on review-lab */
  readonly issuePrioritiesDebug: Scalars['String'];
  /** A list of issues associated with the milestone. */
  readonly issues: Github_IssueConnection;
  /** Identifies the number of the milestone. */
  readonly number: Scalars['Int'];
  /** A list of pull requests associated with the milestone. */
  readonly pullRequests: Github_PullRequestConnection;
  /** The repository associated with this milestone. */
  readonly repository: Github_Repository;
  /** The HTTP path for this milestone */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the state of the milestone. */
  readonly state: Github_MilestoneState;
  /** Identifies the title of the milestone. */
  readonly title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this milestone */
  readonly url: Scalars['Github_URI'];
};


/** Represents a Milestone object on a given repository. */
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


/** Represents a Milestone object on a given repository. */
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

/** The connection type for Milestone. */
type Github_MilestoneConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_MilestoneEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Milestone>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a 'milestoned' event on a given issue or pull request. */
type Github_MilestonedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the milestone title associated with the 'milestoned' event. */
  readonly milestoneTitle: Scalars['String'];
  /** Object referenced by event. */
  readonly subject: Github_MilestoneItem;
};

/** An edge in a connection. */
type Github_MilestoneEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Milestone>;
};

/** Types that can be inside a Milestone. */
type Github_MilestoneItem = Github_Issue | Github_PullRequest;

/** Ordering options for milestone connections. */
type Github_MilestoneOrder = {
  /** The field to order milestones by. */
  readonly field: Github_MilestoneOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which milestone connections can be ordered. */
enum Github_MilestoneOrderField {
  /** Order milestones by when they are due. */
  DUE_DATE = 'DUE_DATE',
  /** Order milestones by when they were created. */
  CREATED_AT = 'CREATED_AT',
  /** Order milestones by when they were last updated. */
  UPDATED_AT = 'UPDATED_AT',
  /** Order milestones by their number. */
  NUMBER = 'NUMBER'
}

/** The possible states of a milestone. */
enum Github_MilestoneState {
  /** A milestone that is still open. */
  OPEN = 'OPEN',
  /** A milestone that has been closed. */
  CLOSED = 'CLOSED'
}

/** Entities that can be minimized. */
type Github_Minimizable = {
  /** Returns whether or not a comment has been minimized. */
  readonly isMinimized: Scalars['Boolean'];
  /** Returns why the comment was minimized. */
  readonly minimizedReason: Maybe<Scalars['String']>;
  /** Check if the current viewer can minimize this object. */
  readonly viewerCanMinimize: Scalars['Boolean'];
};

/** Autogenerated input type of MinimizeComment */
type Github_MinimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  readonly subjectId: Scalars['ID'];
  /** The classification of comment */
  readonly classifier: Github_ReportedContentClassifiers;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MinimizeComment */
type Github_MinimizeCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The comment that was minimized. */
  readonly minimizedComment: Maybe<Github_Minimizable>;
};

/** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
type Github_MovedColumnsInProjectEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Autogenerated input type of MoveProjectCard */
type Github_MoveProjectCardInput = {
  /** The id of the card to move. */
  readonly cardId: Scalars['ID'];
  /** The id of the column to move it into. */
  readonly columnId: Scalars['ID'];
  /** Place the new card after the card with this id. Pass null to place it at the top. */
  readonly afterCardId: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MoveProjectCard */
type Github_MoveProjectCardPayload = {
  /** The new edge of the moved card. */
  readonly cardEdge: Maybe<Github_ProjectCardEdge>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of MoveProjectColumn */
type Github_MoveProjectColumnInput = {
  /** The id of the column to move. */
  readonly columnId: Scalars['ID'];
  /** Place the new column after the column with this id. Pass null to place it at the front. */
  readonly afterColumnId: Maybe<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of MoveProjectColumn */
type Github_MoveProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The new edge of the moved column. */
  readonly columnEdge: Maybe<Github_ProjectColumnEdge>;
};

/** An object with an ID. */
type Github_Node = {
  /** ID of the object. */
  readonly id: Scalars['ID'];
};

/** Metadata for an audit entry with action oauth_application.* */
type Github_OauthApplicationAuditEntryData = {
  /** The name of the OAuth Application. */
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the OAuth Application */
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a oauth_application.create event. */
type Github_OauthApplicationCreateAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The application URL of the OAuth Application. */
  readonly applicationUrl: Maybe<Scalars['Github_URI']>;
  /** The callback URL of the OAuth Application. */
  readonly callbackUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The name of the OAuth Application. */
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the OAuth Application */
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The rate limit of the OAuth Application. */
  readonly rateLimit: Maybe<Scalars['Int']>;
  /** The state of the OAuth Application. */
  readonly state: Maybe<Github_OauthApplicationCreateAuditEntryState>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The state of an OAuth Application when it was created. */
enum Github_OauthApplicationCreateAuditEntryState {
  /** The OAuth Application was active and allowed to have OAuth Accesses. */
  ACTIVE = 'ACTIVE',
  /** The OAuth Application was suspended from generating OAuth Accesses due to abuse or security concerns. */
  SUSPENDED = 'SUSPENDED',
  /** The OAuth Application was in the process of being deleted. */
  PENDING_DELETION = 'PENDING_DELETION'
}

/** The corresponding operation type for the action */
enum Github_OperationType {
  /** An existing resource was accessed */
  ACCESS = 'ACCESS',
  /** A resource performed an authentication event */
  AUTHENTICATION = 'AUTHENTICATION',
  /** A new resource was created */
  CREATE = 'CREATE',
  /** An existing resource was modified */
  MODIFY = 'MODIFY',
  /** An existing resource was removed */
  REMOVE = 'REMOVE',
  /** An existing resource was restored */
  RESTORE = 'RESTORE',
  /** An existing resource was transferred between multiple resources */
  TRANSFER = 'TRANSFER'
}

/** Possible directions in which to order a list of items when provided an `orderBy` argument. */
enum Github_OrderDirection {
  /** Specifies an ascending order for a given `orderBy` argument. */
  ASC = 'ASC',
  /** Specifies a descending order for a given `orderBy` argument. */
  DESC = 'DESC'
}

/** Audit log entry for a org.add_billing_manager */
type Github_OrgAddBillingManagerAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The email address used to invite a billing manager for the organization. */
  readonly invitationEmail: Maybe<Scalars['String']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.add_member */
type Github_OrgAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The permission level of the member added to the organization. */
  readonly permission: Maybe<Github_OrgAddMemberAuditEntryPermission>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The permissions available to members on an Organization. */
enum Github_OrgAddMemberAuditEntryPermission {
  /** Can read and clone repositories. */
  READ = 'READ',
  /** Can read, clone, push, and add collaborators to repositories. */
  ADMIN = 'ADMIN'
}

/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization = Github_Node & Github_Actor & Github_PackageOwner & Github_ProjectOwner & Github_RepositoryOwner & Github_UniformResourceLocatable & Github_MemberStatusable & Github_ProfileOwner & Github_Sponsorable & {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  readonly anyPinnableItems: Scalars['Boolean'];
  /** Audit log entries of the organization */
  readonly auditLog: Github_OrganizationAuditEntryConnection;
  /** A URL pointing to the organization's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The organization's public profile description. */
  readonly description: Maybe<Scalars['String']>;
  /** The organization's public profile description rendered to HTML. */
  readonly descriptionHTML: Maybe<Scalars['String']>;
  /** The organization's public email. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The setting value for whether the organization has an IP allow list enabled. */
  readonly ipAllowListEnabledSetting: Github_IpAllowListEnabledSettingValue;
  /** The IP addresses that are allowed to access resources owned by the organization. */
  readonly ipAllowListEntries: Github_IpAllowListEntryConnection;
  /** Whether the organization has verified its profile email and website. */
  readonly isVerified: Scalars['Boolean'];
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  readonly itemShowcase: Github_ProfileItemShowcase;
  /** The organization's public profile location. */
  readonly location: Maybe<Scalars['String']>;
  /** The organization's login name. */
  readonly login: Scalars['String'];
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  readonly memberStatuses: Github_UserStatusConnection;
  /** A list of users who are members of this organization. */
  readonly membersWithRole: Github_OrganizationMemberConnection;
  /** The organization's public profile name. */
  readonly name: Maybe<Scalars['String']>;
  /** The HTTP path creating a new team */
  readonly newTeamResourcePath: Scalars['Github_URI'];
  /** The HTTP URL creating a new team */
  readonly newTeamUrl: Scalars['Github_URI'];
  /** The billing email for the organization. */
  readonly organizationBillingEmail: Maybe<Scalars['String']>;
  /** A list of packages under the owner. */
  readonly packages: Github_PackageConnection;
  /** A list of users who have been invited to join this organization. */
  readonly pendingMembers: Github_UserConnection;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  readonly pinnableItems: Github_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  readonly pinnedItems: Github_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  readonly pinnedItemsRemaining: Scalars['Int'];
  /** Find project by number. */
  readonly project: Maybe<Github_Project>;
  /** A list of projects under the owner. */
  readonly projects: Github_ProjectConnection;
  /** The HTTP path listing organization's projects */
  readonly projectsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL listing organization's projects */
  readonly projectsUrl: Scalars['Github_URI'];
  /** A list of repositories that the user owns. */
  readonly repositories: Github_RepositoryConnection;
  /** Find Repository. */
  readonly repository: Maybe<Github_Repository>;
  /**
   * When true the organization requires all members, billing managers, and outside
   * collaborators to enable two-factor authentication.
   */
  readonly requiresTwoFactorAuthentication: Maybe<Scalars['Boolean']>;
  /** The HTTP path for this organization. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The Organization's SAML identity providers */
  readonly samlIdentityProvider: Maybe<Github_OrganizationIdentityProvider>;
  /** The GitHub Sponsors listing for this user. */
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  /** This object's sponsorships as the maintainer. */
  readonly sponsorshipsAsMaintainer: Github_SponsorshipConnection;
  /** This object's sponsorships as the sponsor. */
  readonly sponsorshipsAsSponsor: Github_SponsorshipConnection;
  /** Find an organization's team by its slug. */
  readonly team: Maybe<Github_Team>;
  /** A list of teams in this organization. */
  readonly teams: Github_TeamConnection;
  /** The HTTP path listing organization's teams */
  readonly teamsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL listing organization's teams */
  readonly teamsUrl: Scalars['Github_URI'];
  /** The organization's Twitter username. */
  readonly twitterUsername: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this organization. */
  readonly url: Scalars['Github_URI'];
  /** Organization is adminable by the viewer. */
  readonly viewerCanAdminister: Scalars['Boolean'];
  /** Can the viewer pin repositories and gists to the profile? */
  readonly viewerCanChangePinnedItems: Scalars['Boolean'];
  /** Can the current viewer create new projects on this owner. */
  readonly viewerCanCreateProjects: Scalars['Boolean'];
  /** Viewer can create repositories on this organization */
  readonly viewerCanCreateRepositories: Scalars['Boolean'];
  /** Viewer can create teams on this organization. */
  readonly viewerCanCreateTeams: Scalars['Boolean'];
  /** Viewer is an active member of this organization. */
  readonly viewerIsAMember: Scalars['Boolean'];
  /** The organization's public profile URL. */
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_anyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_auditLogArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
  orderBy?: Maybe<Github_AuditLogOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_ipAllowListEntriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_IpAllowListEntryOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_memberStatusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_UserStatusOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_membersWithRoleArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
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


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_pendingMembersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_pinnableItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_pinnedItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_projectArgs = {
  number: Scalars['Int'];
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
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


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_repositoryArgs = {
  name: Scalars['String'];
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_sponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_sponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
type Github_Organization_teamArgs = {
  slug: Scalars['String'];
};


/** An account on GitHub, with one or more owners, that has repositories, members and teams. */
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

/** An audit entry in an organization audit log. */
type Github_OrganizationAuditEntry = Github_MembersCanDeleteReposClearAuditEntry | Github_MembersCanDeleteReposDisableAuditEntry | Github_MembersCanDeleteReposEnableAuditEntry | Github_OauthApplicationCreateAuditEntry | Github_OrgAddBillingManagerAuditEntry | Github_OrgAddMemberAuditEntry | Github_OrgBlockUserAuditEntry | Github_OrgConfigDisableCollaboratorsOnlyAuditEntry | Github_OrgConfigEnableCollaboratorsOnlyAuditEntry | Github_OrgCreateAuditEntry | Github_OrgDisableOauthAppRestrictionsAuditEntry | Github_OrgDisableSamlAuditEntry | Github_OrgDisableTwoFactorRequirementAuditEntry | Github_OrgEnableOauthAppRestrictionsAuditEntry | Github_OrgEnableSamlAuditEntry | Github_OrgEnableTwoFactorRequirementAuditEntry | Github_OrgInviteMemberAuditEntry | Github_OrgInviteToBusinessAuditEntry | Github_OrgOauthAppAccessApprovedAuditEntry | Github_OrgOauthAppAccessDeniedAuditEntry | Github_OrgOauthAppAccessRequestedAuditEntry | Github_OrgRemoveBillingManagerAuditEntry | Github_OrgRemoveMemberAuditEntry | Github_OrgRemoveOutsideCollaboratorAuditEntry | Github_OrgRestoreMemberAuditEntry | Github_OrgUnblockUserAuditEntry | Github_OrgUpdateDefaultRepositoryPermissionAuditEntry | Github_OrgUpdateMemberAuditEntry | Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry | Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry | Github_PrivateRepositoryForkingDisableAuditEntry | Github_PrivateRepositoryForkingEnableAuditEntry | Github_RepoAccessAuditEntry | Github_RepoAddMemberAuditEntry | Github_RepoAddTopicAuditEntry | Github_RepoArchivedAuditEntry | Github_RepoChangeMergeSettingAuditEntry | Github_RepoConfigDisableAnonymousGitAccessAuditEntry | Github_RepoConfigDisableCollaboratorsOnlyAuditEntry | Github_RepoConfigDisableContributorsOnlyAuditEntry | Github_RepoConfigDisableSockpuppetDisallowedAuditEntry | Github_RepoConfigEnableAnonymousGitAccessAuditEntry | Github_RepoConfigEnableCollaboratorsOnlyAuditEntry | Github_RepoConfigEnableContributorsOnlyAuditEntry | Github_RepoConfigEnableSockpuppetDisallowedAuditEntry | Github_RepoConfigLockAnonymousGitAccessAuditEntry | Github_RepoConfigUnlockAnonymousGitAccessAuditEntry | Github_RepoCreateAuditEntry | Github_RepoDestroyAuditEntry | Github_RepoRemoveMemberAuditEntry | Github_RepoRemoveTopicAuditEntry | Github_RepositoryVisibilityChangeDisableAuditEntry | Github_RepositoryVisibilityChangeEnableAuditEntry | Github_TeamAddMemberAuditEntry | Github_TeamAddRepositoryAuditEntry | Github_TeamChangeParentTeamAuditEntry | Github_TeamRemoveMemberAuditEntry | Github_TeamRemoveRepositoryAuditEntry;

/** The connection type for OrganizationAuditEntry. */
type Github_OrganizationAuditEntryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationAuditEntryEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_OrganizationAuditEntry>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Metadata for an audit entry with action org.* */
type Github_OrganizationAuditEntryData = {
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
};

/** An edge in a connection. */
type Github_OrganizationAuditEntryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_OrganizationAuditEntry>;
};

/** The connection type for Organization. */
type Github_OrganizationConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Organization>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_OrganizationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Organization>;
};

/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
type Github_OrganizationIdentityProvider = Github_Node & {
  /** The digest algorithm used to sign SAML requests for the Identity Provider. */
  readonly digestMethod: Maybe<Scalars['Github_URI']>;
  /** External Identities provisioned by this Identity Provider */
  readonly externalIdentities: Github_ExternalIdentityConnection;
  readonly id: Scalars['ID'];
  /** The x509 certificate used by the Identity Provder to sign assertions and responses. */
  readonly idpCertificate: Maybe<Scalars['Github_X509Certificate']>;
  /** The Issuer Entity ID for the SAML Identity Provider */
  readonly issuer: Maybe<Scalars['String']>;
  /** Organization this Identity Provider belongs to */
  readonly organization: Maybe<Github_Organization>;
  /** The signature algorithm used to sign SAML requests for the Identity Provider. */
  readonly signatureMethod: Maybe<Scalars['Github_URI']>;
  /** The URL endpoint for the Identity Provider's SAML SSO. */
  readonly ssoUrl: Maybe<Scalars['Github_URI']>;
};


/** An Identity Provider configured to provision SAML and SCIM identities for Organizations */
type Github_OrganizationIdentityProvider_externalIdentitiesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** An Invitation for a user to an organization. */
type Github_OrganizationInvitation = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The email address of the user invited to the organization. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The type of invitation that was sent (e.g. email, user). */
  readonly invitationType: Github_OrganizationInvitationType;
  /** The user who was invited to the organization. */
  readonly invitee: Maybe<Github_User>;
  /** The user who created the invitation. */
  readonly inviter: Github_User;
  /** The organization the invite is for */
  readonly organization: Github_Organization;
  /** The user's pending role in the organization (e.g. member, owner). */
  readonly role: Github_OrganizationInvitationRole;
};

/** The connection type for OrganizationInvitation. */
type Github_OrganizationInvitationConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationInvitationEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_OrganizationInvitation>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_OrganizationInvitationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_OrganizationInvitation>;
};

/** The possible organization invitation roles. */
enum Github_OrganizationInvitationRole {
  /** The user is invited to be a direct member of the organization. */
  DIRECT_MEMBER = 'DIRECT_MEMBER',
  /** The user is invited to be an admin of the organization. */
  ADMIN = 'ADMIN',
  /** The user is invited to be a billing manager of the organization. */
  BILLING_MANAGER = 'BILLING_MANAGER',
  /** The user's previous role will be reinstated. */
  REINSTATE = 'REINSTATE'
}

/** The possible organization invitation types. */
enum Github_OrganizationInvitationType {
  /** The invitation was to an existing user. */
  USER = 'USER',
  /** The invitation was to an email address. */
  EMAIL = 'EMAIL'
}

/** The connection type for User. */
type Github_OrganizationMemberConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_OrganizationMemberEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a user within an organization. */
type Github_OrganizationMemberEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** Whether the organization member has two factor enabled or not. Returns null if information is not available to viewer. */
  readonly hasTwoFactorEnabled: Maybe<Scalars['Boolean']>;
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_User>;
  /** The role this user has in the organization. */
  readonly role: Maybe<Github_OrganizationMemberRole>;
};

/** The possible roles within an organization for its members. */
enum Github_OrganizationMemberRole {
  /** The user is a member of the organization. */
  MEMBER = 'MEMBER',
  /** The user is an administrator of the organization. */
  ADMIN = 'ADMIN'
}

/** The possible values for the members can create repositories setting on an organization. */
enum Github_OrganizationMembersCanCreateRepositoriesSettingValue {
  /** Members will be able to create public and private repositories. */
  ALL = 'ALL',
  /** Members will be able to create only private repositories. */
  PRIVATE = 'PRIVATE',
  /** Members will not be able to create public or private repositories. */
  DISABLED = 'DISABLED'
}

/** Ordering options for organization connections. */
type Github_OrganizationOrder = {
  /** The field to order organizations by. */
  readonly field: Github_OrganizationOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which organization connections can be ordered. */
enum Github_OrganizationOrderField {
  /** Order organizations by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order organizations by login */
  LOGIN = 'LOGIN'
}

/** An organization list hovercard context */
type Github_OrganizationsHovercardContext = Github_HovercardContext & {
  /** A string describing this context */
  readonly message: Scalars['String'];
  /** An octicon to accompany this context */
  readonly octicon: Scalars['String'];
  /** Organizations this user is a member of that are relevant */
  readonly relevantOrganizations: Github_OrganizationConnection;
  /** The total number of organizations this user is in */
  readonly totalOrganizationCount: Scalars['Int'];
};


/** An organization list hovercard context */
type Github_OrganizationsHovercardContext_relevantOrganizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** An organization teams hovercard context */
type Github_OrganizationTeamsHovercardContext = Github_HovercardContext & {
  /** A string describing this context */
  readonly message: Scalars['String'];
  /** An octicon to accompany this context */
  readonly octicon: Scalars['String'];
  /** Teams in this organization the user is a member of that are relevant */
  readonly relevantTeams: Github_TeamConnection;
  /** The path for the full team list for this user */
  readonly teamsResourcePath: Scalars['Github_URI'];
  /** The URL for the full team list for this user */
  readonly teamsUrl: Scalars['Github_URI'];
  /** The total number of teams the user is on in the organization */
  readonly totalTeamCount: Scalars['Int'];
};


/** An organization teams hovercard context */
type Github_OrganizationTeamsHovercardContext_relevantTeamsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Audit log entry for a org.block_user */
type Github_OrgBlockUserAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The blocked user. */
  readonly blockedUser: Maybe<Github_User>;
  /** The username of the blocked user. */
  readonly blockedUserName: Maybe<Scalars['String']>;
  /** The HTTP path for the blocked user. */
  readonly blockedUserResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the blocked user. */
  readonly blockedUserUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.config.disable_collaborators_only event. */
type Github_OrgConfigDisableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.config.enable_collaborators_only event. */
type Github_OrgConfigEnableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.create event. */
type Github_OrgCreateAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The billing plan for the Organization. */
  readonly billingPlan: Maybe<Github_OrgCreateAuditEntryBillingPlan>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The billing plans available for organizations. */
enum Github_OrgCreateAuditEntryBillingPlan {
  /** Free Plan */
  FREE = 'FREE',
  /** Team Plan */
  BUSINESS = 'BUSINESS',
  /** Enterprise Cloud Plan */
  BUSINESS_PLUS = 'BUSINESS_PLUS',
  /** Legacy Unlimited Plan */
  UNLIMITED = 'UNLIMITED',
  /** Tiered Per Seat Plan */
  TIERED_PER_SEAT = 'TIERED_PER_SEAT'
}

/** Audit log entry for a org.disable_oauth_app_restrictions event. */
type Github_OrgDisableOauthAppRestrictionsAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.disable_saml event. */
type Github_OrgDisableSamlAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The SAML provider's digest algorithm URL. */
  readonly digestMethodUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The SAML provider's issuer URL. */
  readonly issuerUrl: Maybe<Scalars['Github_URI']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The SAML provider's signature algorithm URL. */
  readonly signatureMethodUrl: Maybe<Scalars['Github_URI']>;
  /** The SAML provider's single sign-on URL. */
  readonly singleSignOnUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.disable_two_factor_requirement event. */
type Github_OrgDisableTwoFactorRequirementAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.enable_oauth_app_restrictions event. */
type Github_OrgEnableOauthAppRestrictionsAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.enable_saml event. */
type Github_OrgEnableSamlAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The SAML provider's digest algorithm URL. */
  readonly digestMethodUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The SAML provider's issuer URL. */
  readonly issuerUrl: Maybe<Scalars['Github_URI']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The SAML provider's signature algorithm URL. */
  readonly signatureMethodUrl: Maybe<Scalars['Github_URI']>;
  /** The SAML provider's single sign-on URL. */
  readonly singleSignOnUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.enable_two_factor_requirement event. */
type Github_OrgEnableTwoFactorRequirementAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.invite_member event. */
type Github_OrgInviteMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The email address of the organization invitation. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The organization invitation. */
  readonly organizationInvitation: Maybe<Github_OrganizationInvitation>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.invite_to_business event. */
type Github_OrgInviteToBusinessAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.oauth_app_access_approved event. */
type Github_OrgOauthAppAccessApprovedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The name of the OAuth Application. */
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the OAuth Application */
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.oauth_app_access_denied event. */
type Github_OrgOauthAppAccessDeniedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The name of the OAuth Application. */
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the OAuth Application */
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.oauth_app_access_requested event. */
type Github_OrgOauthAppAccessRequestedAuditEntry = Github_Node & Github_AuditEntry & Github_OauthApplicationAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The name of the OAuth Application. */
  readonly oauthApplicationName: Maybe<Scalars['String']>;
  /** The HTTP path for the OAuth Application */
  readonly oauthApplicationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the OAuth Application */
  readonly oauthApplicationUrl: Maybe<Scalars['Github_URI']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.remove_billing_manager event. */
type Github_OrgRemoveBillingManagerAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The reason for the billing manager being removed. */
  readonly reason: Maybe<Github_OrgRemoveBillingManagerAuditEntryReason>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The reason a billing manager was removed from an Organization. */
enum Github_OrgRemoveBillingManagerAuditEntryReason {
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  /** SAML external identity missing */
  SAML_EXTERNAL_IDENTITY_MISSING = 'SAML_EXTERNAL_IDENTITY_MISSING',
  /** SAML SSO enforcement requires an external identity */
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY'
}

/** Audit log entry for a org.remove_member event. */
type Github_OrgRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The types of membership the member has with the organization. */
  readonly membershipTypes: Maybe<ReadonlyArray<Github_OrgRemoveMemberAuditEntryMembershipType>>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The reason for the member being removed. */
  readonly reason: Maybe<Github_OrgRemoveMemberAuditEntryReason>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The type of membership a user has with an Organization. */
enum Github_OrgRemoveMemberAuditEntryMembershipType {
  /** A direct member is a user that is a member of the Organization. */
  DIRECT_MEMBER = 'DIRECT_MEMBER',
  /**
   * Organization administrators have full access and can change several settings,
   * including the names of repositories that belong to the Organization and Owners
   * team membership. In addition, organization admins can delete the organization
   * and all of its repositories.
   */
  ADMIN = 'ADMIN',
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  BILLING_MANAGER = 'BILLING_MANAGER',
  /**
   * An unaffiliated collaborator is a person who is not a member of the
   * Organization and does not have access to any repositories in the Organization.
   */
  UNAFFILIATED = 'UNAFFILIATED',
  /**
   * An outside collaborator is a person who isn't explicitly a member of the
   * Organization, but who has Read, Write, or Admin permissions to one or more
   * repositories in the organization.
   */
  OUTSIDE_COLLABORATOR = 'OUTSIDE_COLLABORATOR'
}

/** The reason a member was removed from an Organization. */
enum Github_OrgRemoveMemberAuditEntryReason {
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  /** SAML external identity missing */
  SAML_EXTERNAL_IDENTITY_MISSING = 'SAML_EXTERNAL_IDENTITY_MISSING',
  /** SAML SSO enforcement requires an external identity */
  SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY = 'SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY',
  /** User account has been deleted */
  USER_ACCOUNT_DELETED = 'USER_ACCOUNT_DELETED',
  /** User was removed from organization during account recovery */
  TWO_FACTOR_ACCOUNT_RECOVERY = 'TWO_FACTOR_ACCOUNT_RECOVERY'
}

/** Audit log entry for a org.remove_outside_collaborator event. */
type Github_OrgRemoveOutsideCollaboratorAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The types of membership the outside collaborator has with the organization. */
  readonly membershipTypes: Maybe<ReadonlyArray<Github_OrgRemoveOutsideCollaboratorAuditEntryMembershipType>>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The reason for the outside collaborator being removed from the Organization. */
  readonly reason: Maybe<Github_OrgRemoveOutsideCollaboratorAuditEntryReason>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The type of membership a user has with an Organization. */
enum Github_OrgRemoveOutsideCollaboratorAuditEntryMembershipType {
  /**
   * An outside collaborator is a person who isn't explicitly a member of the
   * Organization, but who has Read, Write, or Admin permissions to one or more
   * repositories in the organization.
   */
  OUTSIDE_COLLABORATOR = 'OUTSIDE_COLLABORATOR',
  /**
   * An unaffiliated collaborator is a person who is not a member of the
   * Organization and does not have access to any repositories in the organization.
   */
  UNAFFILIATED = 'UNAFFILIATED',
  /** A billing manager is a user who manages the billing settings for the Organization, such as updating payment information. */
  BILLING_MANAGER = 'BILLING_MANAGER'
}

/** The reason an outside collaborator was removed from an Organization. */
enum Github_OrgRemoveOutsideCollaboratorAuditEntryReason {
  /** The organization required 2FA of its billing managers and this user did not have 2FA enabled. */
  TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE = 'TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE',
  /** SAML external identity missing */
  SAML_EXTERNAL_IDENTITY_MISSING = 'SAML_EXTERNAL_IDENTITY_MISSING'
}

/** Audit log entry for a org.restore_member event. */
type Github_OrgRestoreMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The number of custom email routings for the restored member. */
  readonly restoredCustomEmailRoutingsCount: Maybe<Scalars['Int']>;
  /** The number of issue assignemnts for the restored member. */
  readonly restoredIssueAssignmentsCount: Maybe<Scalars['Int']>;
  /** Restored organization membership objects. */
  readonly restoredMemberships: Maybe<ReadonlyArray<Github_OrgRestoreMemberAuditEntryMembership>>;
  /** The number of restored memberships. */
  readonly restoredMembershipsCount: Maybe<Scalars['Int']>;
  /** The number of repositories of the restored member. */
  readonly restoredRepositoriesCount: Maybe<Scalars['Int']>;
  /** The number of starred repositories for the restored member. */
  readonly restoredRepositoryStarsCount: Maybe<Scalars['Int']>;
  /** The number of watched repositories for the restored member. */
  readonly restoredRepositoryWatchesCount: Maybe<Scalars['Int']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Types of memberships that can be restored for an Organization member. */
type Github_OrgRestoreMemberAuditEntryMembership = Github_OrgRestoreMemberMembershipOrganizationAuditEntryData | Github_OrgRestoreMemberMembershipRepositoryAuditEntryData | Github_OrgRestoreMemberMembershipTeamAuditEntryData;

/** Metadata for an organization membership for org.restore_member actions */
type Github_OrgRestoreMemberMembershipOrganizationAuditEntryData = Github_OrganizationAuditEntryData & {
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
};

/** Metadata for a repository membership for org.restore_member actions */
type Github_OrgRestoreMemberMembershipRepositoryAuditEntryData = Github_RepositoryAuditEntryData & {
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
};

/** Metadata for a team membership for org.restore_member actions */
type Github_OrgRestoreMemberMembershipTeamAuditEntryData = Github_TeamAuditEntryData & {
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.unblock_user */
type Github_OrgUnblockUserAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The user being unblocked by the organization. */
  readonly blockedUser: Maybe<Github_User>;
  /** The username of the blocked user. */
  readonly blockedUserName: Maybe<Scalars['String']>;
  /** The HTTP path for the blocked user. */
  readonly blockedUserResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the blocked user. */
  readonly blockedUserUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a org.update_default_repository_permission */
type Github_OrgUpdateDefaultRepositoryPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The new default repository permission level for the organization. */
  readonly permission: Maybe<Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  /** The former default repository permission level for the organization. */
  readonly permissionWas: Maybe<Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The default permission a repository can have in an Organization. */
enum Github_OrgUpdateDefaultRepositoryPermissionAuditEntryPermission {
  /** Can read and clone repositories. */
  READ = 'READ',
  /** Can read, clone and push to repositories. */
  WRITE = 'WRITE',
  /** Can read, clone, push, and add collaborators to repositories. */
  ADMIN = 'ADMIN',
  /** No default permission value. */
  NONE = 'NONE'
}

/** Audit log entry for a org.update_member event. */
type Github_OrgUpdateMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The new member permission level for the organization. */
  readonly permission: Maybe<Github_OrgUpdateMemberAuditEntryPermission>;
  /** The former member permission level for the organization. */
  readonly permissionWas: Maybe<Github_OrgUpdateMemberAuditEntryPermission>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The permissions available to members on an Organization. */
enum Github_OrgUpdateMemberAuditEntryPermission {
  /** Can read and clone repositories. */
  READ = 'READ',
  /** Can read, clone, push, and add collaborators to repositories. */
  ADMIN = 'ADMIN'
}

/** Audit log entry for a org.update_member_repository_creation_permission event. */
type Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** Can members create repositories in the organization. */
  readonly canCreateRepositories: Maybe<Scalars['Boolean']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The permission for visibility level of repositories for this organization. */
  readonly visibility: Maybe<Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility>;
};

/** The permissions available for repository creation on an Organization. */
enum Github_OrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility {
  /** All organization members are restricted from creating any repositories. */
  ALL = 'ALL',
  /** All organization members are restricted from creating public repositories. */
  PUBLIC = 'PUBLIC',
  /** All organization members are allowed to create any repositories. */
  NONE = 'NONE',
  /** All organization members are restricted from creating private repositories. */
  PRIVATE = 'PRIVATE',
  /** All organization members are restricted from creating internal repositories. */
  INTERNAL = 'INTERNAL',
  /** All organization members are restricted from creating public or internal repositories. */
  PUBLIC_INTERNAL = 'PUBLIC_INTERNAL',
  /** All organization members are restricted from creating private or internal repositories. */
  PRIVATE_INTERNAL = 'PRIVATE_INTERNAL',
  /** All organization members are restricted from creating public or private repositories. */
  PUBLIC_PRIVATE = 'PUBLIC_PRIVATE'
}

/** Audit log entry for a org.update_member_repository_invitation_permission event. */
type Github_OrgUpdateMemberRepositoryInvitationPermissionAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** Can outside collaborators be invited to repositories in the organization. */
  readonly canInviteOutsideCollaboratorsToRepositories: Maybe<Scalars['Boolean']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Information for an uploaded package. */
type Github_Package = Github_Node & {
  readonly id: Scalars['ID'];
  /** Find the latest version for the package. */
  readonly latestVersion: Maybe<Github_PackageVersion>;
  /** Identifies the name of the package. */
  readonly name: Scalars['String'];
  /** Identifies the type of the package. */
  readonly packageType: Github_PackageType;
  /** The repository this package belongs to. */
  readonly repository: Maybe<Github_Repository>;
  /** Statistics about package activity. */
  readonly statistics: Maybe<Github_PackageStatistics>;
  /** Find package version by version string. */
  readonly version: Maybe<Github_PackageVersion>;
  /** list of versions for this package */
  readonly versions: Github_PackageVersionConnection;
};


/** Information for an uploaded package. */
type Github_Package_versionArgs = {
  version: Scalars['String'];
};


/** Information for an uploaded package. */
type Github_Package_versionsArgs = {
  orderBy?: Maybe<Github_PackageVersionOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for Package. */
type Github_PackageConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PackageEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Package>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PackageEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Package>;
};

/** A file in a package version. */
type Github_PackageFile = Github_Node & {
  readonly id: Scalars['ID'];
  /** MD5 hash of the file. */
  readonly md5: Maybe<Scalars['String']>;
  /** Name of the file. */
  readonly name: Scalars['String'];
  /** The package version this file belongs to. */
  readonly packageVersion: Maybe<Github_PackageVersion>;
  /** SHA1 hash of the file. */
  readonly sha1: Maybe<Scalars['String']>;
  /** SHA256 hash of the file. */
  readonly sha256: Maybe<Scalars['String']>;
  /** Size of the file in bytes. */
  readonly size: Maybe<Scalars['Int']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** URL to download the asset. */
  readonly url: Maybe<Scalars['Github_URI']>;
};

/** The connection type for PackageFile. */
type Github_PackageFileConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PackageFileEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PackageFile>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PackageFileEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PackageFile>;
};

/** Ways in which lists of package files can be ordered upon return. */
type Github_PackageFileOrder = {
  /** The field in which to order package files by. */
  readonly field: Maybe<Github_PackageFileOrderField>;
  /** The direction in which to order package files by the specified field. */
  readonly direction: Maybe<Github_OrderDirection>;
};

/** Properties by which package file connections can be ordered. */
enum Github_PackageFileOrderField {
  /** Order package files by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** Ways in which lists of packages can be ordered upon return. */
type Github_PackageOrder = {
  /** The field in which to order packages by. */
  readonly field: Maybe<Github_PackageOrderField>;
  /** The direction in which to order packages by the specified field. */
  readonly direction: Maybe<Github_OrderDirection>;
};

/** Properties by which package connections can be ordered. */
enum Github_PackageOrderField {
  /** Order packages by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** Represents an owner of a package. */
type Github_PackageOwner = {
  readonly id: Scalars['ID'];
  /** A list of packages under the owner. */
  readonly packages: Github_PackageConnection;
};


/** Represents an owner of a package. */
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

/** Represents a object that contains package activity statistics such as downloads. */
type Github_PackageStatistics = {
  /** Number of times the package was downloaded since it was created. */
  readonly downloadsTotalCount: Scalars['Int'];
};

/** A version tag contains the mapping between a tag name and a version. */
type Github_PackageTag = Github_Node & {
  readonly id: Scalars['ID'];
  /** Identifies the tag name of the version. */
  readonly name: Scalars['String'];
  /** Version that the tag is associated with. */
  readonly version: Maybe<Github_PackageVersion>;
};

/** The possible types of a package. */
enum Github_PackageType {
  /** An npm package. */
  NPM = 'NPM',
  /** A rubygems package. */
  RUBYGEMS = 'RUBYGEMS',
  /** A maven package. */
  MAVEN = 'MAVEN',
  /** A docker image. */
  DOCKER = 'DOCKER',
  /** A debian package. */
  DEBIAN = 'DEBIAN',
  /** A nuget package. */
  NUGET = 'NUGET',
  /** A python package. */
  PYPI = 'PYPI'
}

/** Information about a specific package version. */
type Github_PackageVersion = Github_Node & {
  /** List of files associated with this package version */
  readonly files: Github_PackageFileConnection;
  readonly id: Scalars['ID'];
  /** The package associated with this version. */
  readonly package: Maybe<Github_Package>;
  /** The platform this version was built for. */
  readonly platform: Maybe<Scalars['String']>;
  /** Whether or not this version is a pre-release. */
  readonly preRelease: Scalars['Boolean'];
  /** The README of this package version. */
  readonly readme: Maybe<Scalars['String']>;
  /** The release associated with this package version. */
  readonly release: Maybe<Github_Release>;
  /** Statistics about package activity. */
  readonly statistics: Maybe<Github_PackageVersionStatistics>;
  /** The package version summary. */
  readonly summary: Maybe<Scalars['String']>;
  /** The version string. */
  readonly version: Scalars['String'];
};


/** Information about a specific package version. */
type Github_PackageVersion_filesArgs = {
  orderBy?: Maybe<Github_PackageFileOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for PackageVersion. */
type Github_PackageVersionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PackageVersionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PackageVersion>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PackageVersionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PackageVersion>;
};

/** Ways in which lists of package versions can be ordered upon return. */
type Github_PackageVersionOrder = {
  /** The field in which to order package versions by. */
  readonly field: Maybe<Github_PackageVersionOrderField>;
  /** The direction in which to order package versions by the specified field. */
  readonly direction: Maybe<Github_OrderDirection>;
};

/** Properties by which package version connections can be ordered. */
enum Github_PackageVersionOrderField {
  /** Order package versions by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** Represents a object that contains package version activity statistics such as downloads. */
type Github_PackageVersionStatistics = {
  /** Number of times the package was downloaded since it was created. */
  readonly downloadsTotalCount: Scalars['Int'];
};

/** Information about pagination in a connection. */
type Github_PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>;
};

/** Types that can grant permissions on a repository to a user */
type Github_PermissionGranter = Github_Organization | Github_Repository | Github_Team;

/** A level of permission and source for a user's access to a repository. */
type Github_PermissionSource = {
  /** The organization the repository belongs to. */
  readonly organization: Github_Organization;
  /** The level of access this source has granted to the user. */
  readonly permission: Github_DefaultRepositoryPermissionField;
  /** The source of this permission. */
  readonly source: Github_PermissionGranter;
};

/** Types that can be pinned to a profile page. */
type Github_PinnableItem = Github_Gist | Github_Repository;

/** The connection type for PinnableItem. */
type Github_PinnableItemConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PinnableItemEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PinnableItem>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PinnableItemEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PinnableItem>;
};

/** Represents items that can be pinned to a profile page or dashboard. */
enum Github_PinnableItemType {
  /** A repository. */
  REPOSITORY = 'REPOSITORY',
  /** A gist. */
  GIST = 'GIST',
  /** An issue. */
  ISSUE = 'ISSUE',
  /** A project. */
  PROJECT = 'PROJECT',
  /** A pull request. */
  PULL_REQUEST = 'PULL_REQUEST',
  /** A user. */
  USER = 'USER',
  /** An organization. */
  ORGANIZATION = 'ORGANIZATION',
  /** A team. */
  TEAM = 'TEAM'
}

/** Represents a 'pinned' event on a given issue or pull request. */
type Github_PinnedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the issue associated with the event. */
  readonly issue: Github_Issue;
};


/** Audit log entry for a private_repository_forking.disable event. */
type Github_PrivateRepositoryForkingDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a private_repository_forking.enable event. */
type Github_PrivateRepositoryForkingEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
type Github_ProfileItemShowcase = {
  /** Whether or not the owner has pinned any repositories or gists. */
  readonly hasPinnedItems: Scalars['Boolean'];
  /**
   * The repositories and gists in the showcase. If the profile owner has any
   * pinned items, those will be returned. Otherwise, the profile owner's popular
   * repositories will be returned.
   */
  readonly items: Github_PinnableItemConnection;
};


/**
 * A curatable list of repositories relating to a repository owner, which defaults
 * to showing the most popular repositories they own.
 */
type Github_ProfileItemShowcase_itemsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Represents any entity on GitHub that has a profile page. */
type Github_ProfileOwner = {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  readonly anyPinnableItems: Scalars['Boolean'];
  /** The public profile email. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  readonly itemShowcase: Github_ProfileItemShowcase;
  /** The public profile location. */
  readonly location: Maybe<Scalars['String']>;
  /** The username used to login. */
  readonly login: Scalars['String'];
  /** The public profile name. */
  readonly name: Maybe<Scalars['String']>;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  readonly pinnableItems: Github_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  readonly pinnedItems: Github_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  readonly pinnedItemsRemaining: Scalars['Int'];
  /** Can the viewer pin repositories and gists to the profile? */
  readonly viewerCanChangePinnedItems: Scalars['Boolean'];
  /** The public profile website URL. */
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


/** Represents any entity on GitHub that has a profile page. */
type Github_ProfileOwner_anyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>;
};


/** Represents any entity on GitHub that has a profile page. */
type Github_ProfileOwner_pinnableItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Represents any entity on GitHub that has a profile page. */
type Github_ProfileOwner_pinnedItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Projects manage issues, pull requests and notes within a project owner. */
type Github_Project = Github_Node & Github_Closable & Github_Updatable & {
  /** The project's description body. */
  readonly body: Maybe<Scalars['String']>;
  /** The projects description body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** `true` if the object is closed (definition of closed may depend on type) */
  readonly closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  /** List of columns in the project */
  readonly columns: Github_ProjectColumnConnection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The actor who originally created the project. */
  readonly creator: Maybe<Github_Actor>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** The project's name. */
  readonly name: Scalars['String'];
  /** The project's number. */
  readonly number: Scalars['Int'];
  /** The project's owner. Currently limited to repositories, organizations, and users. */
  readonly owner: Github_ProjectOwner;
  /** List of pending cards in this project */
  readonly pendingCards: Github_ProjectCardConnection;
  /** The HTTP path for this project */
  readonly resourcePath: Scalars['Github_URI'];
  /** Whether the project is open or closed. */
  readonly state: Github_ProjectState;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this project */
  readonly url: Scalars['Github_URI'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
};


/** Projects manage issues, pull requests and notes within a project owner. */
type Github_Project_columnsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** Projects manage issues, pull requests and notes within a project owner. */
type Github_Project_pendingCardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};

/** A card in a project. */
type Github_ProjectCard = Github_Node & {
  /**
   * The project column this card is associated under. A card may only belong to one
   * project column at a time. The column field will be null if the card is created
   * in a pending state and has yet to be associated with a column. Once cards are
   * associated with a column, they will not become pending in the future.
   */
  readonly column: Maybe<Github_ProjectColumn>;
  /** The card content item */
  readonly content: Maybe<Github_ProjectCardItem>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The actor who created this card */
  readonly creator: Maybe<Github_Actor>;
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** Whether the card is archived */
  readonly isArchived: Scalars['Boolean'];
  /** The card note */
  readonly note: Maybe<Scalars['String']>;
  /** The project that contains this card. */
  readonly project: Github_Project;
  /** The HTTP path for this card */
  readonly resourcePath: Scalars['Github_URI'];
  /** The state of ProjectCard */
  readonly state: Maybe<Github_ProjectCardState>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this card */
  readonly url: Scalars['Github_URI'];
};

/** The possible archived states of a project card. */
enum Github_ProjectCardArchivedState {
  /** A project card that is archived */
  ARCHIVED = 'ARCHIVED',
  /** A project card that is not archived */
  NOT_ARCHIVED = 'NOT_ARCHIVED'
}

/** The connection type for ProjectCard. */
type Github_ProjectCardConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ProjectCardEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ProjectCard>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ProjectCardEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_ProjectCard>;
};

/** Types that can be inside Project Cards. */
type Github_ProjectCardItem = Github_Issue | Github_PullRequest;

/** Various content states of a ProjectCard */
enum Github_ProjectCardState {
  /** The card has content only. */
  CONTENT_ONLY = 'CONTENT_ONLY',
  /** The card has a note only. */
  NOTE_ONLY = 'NOTE_ONLY',
  /** The card is redacted. */
  REDACTED = 'REDACTED'
}

/** A column inside a project. */
type Github_ProjectColumn = Github_Node & {
  /** List of cards in the column */
  readonly cards: Github_ProjectCardConnection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** The project column's name. */
  readonly name: Scalars['String'];
  /** The project that contains this column. */
  readonly project: Github_Project;
  /** The semantic purpose of the column */
  readonly purpose: Maybe<Github_ProjectColumnPurpose>;
  /** The HTTP path for this project column */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this project column */
  readonly url: Scalars['Github_URI'];
};


/** A column inside a project. */
type Github_ProjectColumn_cardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};

/** The connection type for ProjectColumn. */
type Github_ProjectColumnConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ProjectColumnEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ProjectColumn>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ProjectColumnEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_ProjectColumn>;
};

/** The semantic purpose of the column - todo, in progress, or done. */
enum Github_ProjectColumnPurpose {
  /** The column contains cards still to be worked on */
  TODO = 'TODO',
  /** The column contains cards which are currently being worked on */
  IN_PROGRESS = 'IN_PROGRESS',
  /** The column contains cards which are complete */
  DONE = 'DONE'
}

/** A list of projects associated with the owner. */
type Github_ProjectConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ProjectEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Project>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ProjectEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Project>;
};

/** Ways in which lists of projects can be ordered upon return. */
type Github_ProjectOrder = {
  /** The field in which to order projects by. */
  readonly field: Github_ProjectOrderField;
  /** The direction in which to order projects by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which project connections can be ordered. */
enum Github_ProjectOrderField {
  /** Order projects by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order projects by update time */
  UPDATED_AT = 'UPDATED_AT',
  /** Order projects by name */
  NAME = 'NAME'
}

/** Represents an owner of a Project. */
type Github_ProjectOwner = {
  readonly id: Scalars['ID'];
  /** Find project by number. */
  readonly project: Maybe<Github_Project>;
  /** A list of projects under the owner. */
  readonly projects: Github_ProjectConnection;
  /** The HTTP path listing owners projects */
  readonly projectsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL listing owners projects */
  readonly projectsUrl: Scalars['Github_URI'];
  /** Can the current viewer create new projects on this owner. */
  readonly viewerCanCreateProjects: Scalars['Boolean'];
};


/** Represents an owner of a Project. */
type Github_ProjectOwner_projectArgs = {
  number: Scalars['Int'];
};


/** Represents an owner of a Project. */
type Github_ProjectOwner_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** State of the project; either 'open' or 'closed' */
enum Github_ProjectState {
  /** The project is open. */
  OPEN = 'OPEN',
  /** The project is closed. */
  CLOSED = 'CLOSED'
}

/** GitHub-provided templates for Projects */
enum Github_ProjectTemplate {
  /** Create a board with columns for To do, In progress and Done. */
  BASIC_KANBAN = 'BASIC_KANBAN',
  /** Create a board with v2 triggers to automatically move cards across To do, In progress and Done columns. */
  AUTOMATED_KANBAN_V2 = 'AUTOMATED_KANBAN_V2',
  /** Create a board with triggers to automatically move cards across columns with review automation. */
  AUTOMATED_REVIEWS_KANBAN = 'AUTOMATED_REVIEWS_KANBAN',
  /** Create a board to triage and prioritize bugs with To do, priority, and Done columns. */
  BUG_TRIAGE = 'BUG_TRIAGE'
}

/** A user's public key. */
type Github_PublicKey = Github_Node & {
  /** The last time this authorization was used to perform an action. Values will be null for keys not owned by the user. */
  readonly accessedAt: Maybe<Scalars['Github_DateTime']>;
  /**
   * Identifies the date and time when the key was created. Keys created before
   * March 5th, 2014 have inaccurate values. Values will be null for keys not owned by the user.
   */
  readonly createdAt: Maybe<Scalars['Github_DateTime']>;
  /** The fingerprint for this PublicKey. */
  readonly fingerprint: Scalars['String'];
  readonly id: Scalars['ID'];
  /** Whether this PublicKey is read-only or not. Values will be null for keys not owned by the user. */
  readonly isReadOnly: Maybe<Scalars['Boolean']>;
  /** The public key string. */
  readonly key: Scalars['String'];
  /**
   * Identifies the date and time when the key was updated. Keys created before
   * March 5th, 2014 may have inaccurate values. Values will be null for keys not
   * owned by the user.
   */
  readonly updatedAt: Maybe<Scalars['Github_DateTime']>;
};

/** The connection type for PublicKey. */
type Github_PublicKeyConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PublicKeyEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PublicKey>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PublicKeyEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PublicKey>;
};

/** A repository pull request. */
type Github_PullRequest = Github_Node & Github_Assignable & Github_Closable & Github_Comment & Github_Updatable & Github_UpdatableComment & Github_Labelable & Github_Lockable & Github_Reactable & Github_RepositoryNode & Github_Subscribable & Github_UniformResourceLocatable & {
  /** Reason that the conversation was locked. */
  readonly activeLockReason: Maybe<Github_LockReason>;
  /** The number of additions in this pull request. */
  readonly additions: Scalars['Int'];
  /** A list of Users assigned to this object. */
  readonly assignees: Github_UserConnection;
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** Identifies the base Ref associated with the pull request. */
  readonly baseRef: Maybe<Github_Ref>;
  /** Identifies the name of the base Ref associated with the pull request, even if the ref has been deleted. */
  readonly baseRefName: Scalars['String'];
  /** Identifies the oid of the base ref associated with the pull request, even if the ref has been deleted. */
  readonly baseRefOid: Scalars['Github_GitObjectID'];
  /** The repository associated with this pull request's base Ref. */
  readonly baseRepository: Maybe<Github_Repository>;
  /** The body as Markdown. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** The number of changed files in this pull request. */
  readonly changedFiles: Scalars['Int'];
  /** The HTTP path for the checks of this pull request. */
  readonly checksResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for the checks of this pull request. */
  readonly checksUrl: Scalars['Github_URI'];
  /** `true` if the pull request is closed */
  readonly closed: Scalars['Boolean'];
  /** Identifies the date and time when the object was closed. */
  readonly closedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of comments associated with the pull request. */
  readonly comments: Github_IssueCommentConnection;
  /** A list of commits present in this pull request's head branch not present in the base branch. */
  readonly commits: Github_PullRequestCommitConnection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The number of deletions in this pull request. */
  readonly deletions: Scalars['Int'];
  /** The actor who edited this pull request's body. */
  readonly editor: Maybe<Github_Actor>;
  /** Lists the files changed within this pull request. */
  readonly files: Maybe<Github_PullRequestChangedFileConnection>;
  /** Identifies the head Ref associated with the pull request. */
  readonly headRef: Maybe<Github_Ref>;
  /** Identifies the name of the head Ref associated with the pull request, even if the ref has been deleted. */
  readonly headRefName: Scalars['String'];
  /** Identifies the oid of the head ref associated with the pull request, even if the ref has been deleted. */
  readonly headRefOid: Scalars['Github_GitObjectID'];
  /** The repository associated with this pull request's head Ref. */
  readonly headRepository: Maybe<Github_Repository>;
  /** The owner of the repository associated with this pull request's head Ref. */
  readonly headRepositoryOwner: Maybe<Github_RepositoryOwner>;
  /** The hovercard information for this issue */
  readonly hovercard: Github_Hovercard;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** The head and base repositories are different. */
  readonly isCrossRepository: Scalars['Boolean'];
  /** Identifies if the pull request is a draft. */
  readonly isDraft: Scalars['Boolean'];
  /** A list of labels associated with the object. */
  readonly labels: Maybe<Github_LabelConnection>;
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** `true` if the pull request is locked */
  readonly locked: Scalars['Boolean'];
  /** Indicates whether maintainers can modify the pull request. */
  readonly maintainerCanModify: Scalars['Boolean'];
  /** The commit that was created when this pull request was merged. */
  readonly mergeCommit: Maybe<Github_Commit>;
  /** Whether or not the pull request can be merged based on the existence of merge conflicts. */
  readonly mergeable: Github_MergeableState;
  /** Whether or not the pull request was merged. */
  readonly merged: Scalars['Boolean'];
  /** The date and time that the pull request was merged. */
  readonly mergedAt: Maybe<Scalars['Github_DateTime']>;
  /** The actor who merged the pull request. */
  readonly mergedBy: Maybe<Github_Actor>;
  /** Identifies the milestone associated with the pull request. */
  readonly milestone: Maybe<Github_Milestone>;
  /** Identifies the pull request number. */
  readonly number: Scalars['Int'];
  /** A list of Users that are participating in the Pull Request conversation. */
  readonly participants: Github_UserConnection;
  /** The permalink to the pull request. */
  readonly permalink: Scalars['Github_URI'];
  /**
   * The commit that GitHub automatically generated to test if this pull request
   * could be merged. This field will not return a value if the pull request is
   * merged, or if the test merge commit is still being generated. See the
   * `mergeable` field for more details on the mergeability of the pull request.
   */
  readonly potentialMergeCommit: Maybe<Github_Commit>;
  /** List of project cards associated with this pull request. */
  readonly projectCards: Github_ProjectCardConnection;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
  /** The HTTP path for this pull request. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP path for reverting this pull request. */
  readonly revertResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for reverting this pull request. */
  readonly revertUrl: Scalars['Github_URI'];
  /** The current status of this pull request with respect to code review. */
  readonly reviewDecision: Maybe<Github_PullRequestReviewDecision>;
  /** A list of review requests associated with the pull request. */
  readonly reviewRequests: Maybe<Github_ReviewRequestConnection>;
  /** The list of all review threads for this pull request. */
  readonly reviewThreads: Github_PullRequestReviewThreadConnection;
  /** A list of reviews associated with the pull request. */
  readonly reviews: Maybe<Github_PullRequestReviewConnection>;
  /** Identifies the state of the pull request. */
  readonly state: Github_PullRequestState;
  /** A list of reviewer suggestions based on commit history and past review comments. */
  readonly suggestedReviewers: ReadonlyArray<Maybe<Github_SuggestedReviewer>>;
  /**
   * A list of events, comments, commits, etc. associated with the pull request.
   * @deprecated `timeline` will be removed Use PullRequest.timelineItems instead. Removal on 2020-10-01 UTC.
   */
  readonly timeline: Github_PullRequestTimelineConnection;
  /** A list of events, comments, commits, etc. associated with the pull request. */
  readonly timelineItems: Github_PullRequestTimelineItemsConnection;
  /** Identifies the pull request title. */
  readonly title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this pull request. */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Whether or not the viewer can apply suggestion. */
  readonly viewerCanApplySuggestion: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};


/** A repository pull request. */
type Github_PullRequest_assigneesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_commitsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_filesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_hovercardArgs = {
  includeNotificationContexts?: Maybe<Scalars['Boolean']>;
};


/** A repository pull request. */
type Github_PullRequest_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_participantsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_projectCardsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  archivedStates?: Maybe<ReadonlyArray<Maybe<Github_ProjectCardArchivedState>>>;
};


/** A repository pull request. */
type Github_PullRequest_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** A repository pull request. */
type Github_PullRequest_reviewRequestsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_reviewThreadsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_reviewsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  states: Maybe<ReadonlyArray<Github_PullRequestReviewState>>;
  author: Maybe<Scalars['String']>;
};


/** A repository pull request. */
type Github_PullRequest_timelineArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_timelineItemsArgs = {
  since: Maybe<Scalars['Github_DateTime']>;
  skip: Maybe<Scalars['Int']>;
  itemTypes: Maybe<ReadonlyArray<Github_PullRequestTimelineItemsItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository pull request. */
type Github_PullRequest_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** A file changed in a pull request. */
type Github_PullRequestChangedFile = {
  /** The number of additions to the file. */
  readonly additions: Scalars['Int'];
  /** The number of deletions to the file. */
  readonly deletions: Scalars['Int'];
  /** The path of the file. */
  readonly path: Scalars['String'];
};

/** The connection type for PullRequestChangedFile. */
type Github_PullRequestChangedFileConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestChangedFileEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestChangedFile>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PullRequestChangedFileEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestChangedFile>;
};

/** Represents a Git commit part of a pull request. */
type Github_PullRequestCommit = Github_Node & Github_UniformResourceLocatable & {
  /** The Git commit object */
  readonly commit: Github_Commit;
  readonly id: Scalars['ID'];
  /** The pull request this commit belongs to */
  readonly pullRequest: Github_PullRequest;
  /** The HTTP path for this pull request commit */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this pull request commit */
  readonly url: Scalars['Github_URI'];
};

/** Represents a commit comment thread part of a pull request. */
type Github_PullRequestCommitCommentThread = Github_Node & Github_RepositoryNode & {
  /** The comments that exist in this thread. */
  readonly comments: Github_CommitCommentConnection;
  /** The commit the comments were made on. */
  readonly commit: Github_Commit;
  readonly id: Scalars['ID'];
  /** The file the comments were made on. */
  readonly path: Maybe<Scalars['String']>;
  /** The position in the diff for the commit that the comment was made on. */
  readonly position: Maybe<Scalars['Int']>;
  /** The pull request this commit comment thread belongs to */
  readonly pullRequest: Github_PullRequest;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
};


/** Represents a commit comment thread part of a pull request. */
type Github_PullRequestCommitCommentThread_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for PullRequestCommit. */
type Github_PullRequestCommitConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestCommitEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestCommit>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PullRequestCommitEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestCommit>;
};

/** The connection type for PullRequest. */
type Github_PullRequestConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequest>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** This aggregates pull requests opened by a user within one repository. */
type Github_PullRequestContributionsByRepository = {
  /** The pull request contributions. */
  readonly contributions: Github_CreatedPullRequestContributionConnection;
  /** The repository in which the pull requests were opened. */
  readonly repository: Github_Repository;
};


/** This aggregates pull requests opened by a user within one repository. */
type Github_PullRequestContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};

/** An edge in a connection. */
type Github_PullRequestEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequest>;
};

/** Represents available types of methods to use when merging a pull request. */
enum Github_PullRequestMergeMethod {
  /** Add all commits from the head branch to the base branch with a merge commit. */
  MERGE = 'MERGE',
  /** Combine all commits from the head branch into a single commit in the base branch. */
  SQUASH = 'SQUASH',
  /** Add all commits from the head branch onto the base branch individually. */
  REBASE = 'REBASE'
}

/** Ways in which lists of issues can be ordered upon return. */
type Github_PullRequestOrder = {
  /** The field in which to order pull requests by. */
  readonly field: Github_PullRequestOrderField;
  /** The direction in which to order pull requests by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which pull_requests connections can be ordered. */
enum Github_PullRequestOrderField {
  /** Order pull_requests by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order pull_requests by update time */
  UPDATED_AT = 'UPDATED_AT'
}

/** A review object for a given pull request. */
type Github_PullRequestReview = Github_Node & Github_Comment & Github_Deletable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** Identifies the pull request review body. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body of this review rendered as plain text. */
  readonly bodyText: Scalars['String'];
  /** A list of review comments for the current pull request review. */
  readonly comments: Github_PullRequestReviewCommentConnection;
  /** Identifies the commit associated with this pull request review. */
  readonly commit: Maybe<Github_Commit>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of teams that this review was made on behalf of. */
  readonly onBehalfOf: Github_TeamConnection;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the pull request associated with this pull request review. */
  readonly pullRequest: Github_PullRequest;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
  /** The HTTP path permalink for this PullRequestReview. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the current state of the pull request review. */
  readonly state: Github_PullRequestReviewState;
  /** Identifies when the Pull Request Review was submitted */
  readonly submittedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL permalink for this PullRequestReview. */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** A review object for a given pull request. */
type Github_PullRequestReview_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A review object for a given pull request. */
type Github_PullRequestReview_onBehalfOfArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A review object for a given pull request. */
type Github_PullRequestReview_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** A review object for a given pull request. */
type Github_PullRequestReview_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** A review comment associated with a given repository pull request. */
type Github_PullRequestReviewComment = Github_Node & Github_Comment & Github_Deletable & Github_Minimizable & Github_Updatable & Github_UpdatableComment & Github_Reactable & Github_RepositoryNode & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the subject of the comment. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** The comment body of this review comment. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The comment body of this review comment rendered as plain text. */
  readonly bodyText: Scalars['String'];
  /** Identifies the commit associated with the comment. */
  readonly commit: Maybe<Github_Commit>;
  /** Identifies when the comment was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The diff hunk to which the comment applies. */
  readonly diffHunk: Scalars['String'];
  /** Identifies when the comment was created in a draft state. */
  readonly draftedAt: Scalars['Github_DateTime'];
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** Returns whether or not a comment has been minimized. */
  readonly isMinimized: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Returns why the comment was minimized. */
  readonly minimizedReason: Maybe<Scalars['String']>;
  /** Identifies the original commit associated with the comment. */
  readonly originalCommit: Maybe<Github_Commit>;
  /** The original line index in the diff to which the comment applies. */
  readonly originalPosition: Scalars['Int'];
  /** Identifies when the comment body is outdated */
  readonly outdated: Scalars['Boolean'];
  /** The path to which the comment applies. */
  readonly path: Scalars['String'];
  /** The line index in the diff to which the comment applies. */
  readonly position: Maybe<Scalars['Int']>;
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** The pull request associated with this review comment. */
  readonly pullRequest: Github_PullRequest;
  /** The pull request review associated with this review comment. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The comment this is a reply to. */
  readonly replyTo: Maybe<Github_PullRequestReviewComment>;
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
  /** The HTTP path permalink for this review comment. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the state of the comment. */
  readonly state: Github_PullRequestReviewCommentState;
  /** Identifies when the comment was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL permalink for this review comment. */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Check if the current viewer can minimize this object. */
  readonly viewerCanMinimize: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** A review comment associated with a given repository pull request. */
type Github_PullRequestReviewComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** A review comment associated with a given repository pull request. */
type Github_PullRequestReviewComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for PullRequestReviewComment. */
type Github_PullRequestReviewCommentConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewCommentEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewComment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PullRequestReviewCommentEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestReviewComment>;
};

/** The possible states of a pull request review comment. */
enum Github_PullRequestReviewCommentState {
  /** A comment that is part of a pending review */
  PENDING = 'PENDING',
  /** A comment that is part of a submitted review */
  SUBMITTED = 'SUBMITTED'
}

/** The connection type for PullRequestReview. */
type Github_PullRequestReviewConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestReview>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** This aggregates pull request reviews made by a user within one repository. */
type Github_PullRequestReviewContributionsByRepository = {
  /** The pull request review contributions. */
  readonly contributions: Github_CreatedPullRequestReviewContributionConnection;
  /** The repository in which the pull request reviews were made. */
  readonly repository: Github_Repository;
};


/** This aggregates pull request reviews made by a user within one repository. */
type Github_PullRequestReviewContributionsByRepository_contributionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_ContributionOrder>;
};

/** The review status of a pull request. */
enum Github_PullRequestReviewDecision {
  /** Changes have been requested on the pull request. */
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  /** The pull request has received an approving review. */
  APPROVED = 'APPROVED',
  /** A review is required before the pull request can be merged. */
  REVIEW_REQUIRED = 'REVIEW_REQUIRED'
}

/** An edge in a connection. */
type Github_PullRequestReviewEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestReview>;
};

/** The possible events to perform on a pull request review. */
enum Github_PullRequestReviewEvent {
  /** Submit general feedback without explicit approval. */
  COMMENT = 'COMMENT',
  /** Submit feedback and approve merging these changes. */
  APPROVE = 'APPROVE',
  /** Submit feedback that must be addressed before merging. */
  REQUEST_CHANGES = 'REQUEST_CHANGES',
  /** Dismiss review so it now longer effects merging. */
  DISMISS = 'DISMISS'
}

/** The possible states of a pull request review. */
enum Github_PullRequestReviewState {
  /** A review that has not yet been submitted. */
  PENDING = 'PENDING',
  /** An informational review. */
  COMMENTED = 'COMMENTED',
  /** A review allowing the pull request to merge. */
  APPROVED = 'APPROVED',
  /** A review blocking the pull request from merging. */
  CHANGES_REQUESTED = 'CHANGES_REQUESTED',
  /** A review that has been dismissed. */
  DISMISSED = 'DISMISSED'
}

/** A threaded list of comments for a given pull request. */
type Github_PullRequestReviewThread = Github_Node & {
  /** A list of pull request comments associated with the thread. */
  readonly comments: Github_PullRequestReviewCommentConnection;
  /** The side of the diff on which this thread was placed. */
  readonly diffSide: Github_DiffSide;
  readonly id: Scalars['ID'];
  /** Whether this thread has been resolved */
  readonly isResolved: Scalars['Boolean'];
  /** The line in the file to which this thread refers */
  readonly line: Maybe<Scalars['Int']>;
  /** The original line in the file to which this thread refers. */
  readonly originalLine: Maybe<Scalars['Int']>;
  /** The original start line in the file to which this thread refers (multi-line only). */
  readonly originalStartLine: Maybe<Scalars['Int']>;
  /** Identifies the pull request associated with this thread. */
  readonly pullRequest: Github_PullRequest;
  /** Identifies the repository associated with this thread. */
  readonly repository: Github_Repository;
  /** The user who resolved this thread */
  readonly resolvedBy: Maybe<Github_User>;
  /** The side of the diff that the first line of the thread starts on (multi-line only) */
  readonly startDiffSide: Maybe<Github_DiffSide>;
  /** The start line in the file to which this thread refers (multi-line only) */
  readonly startLine: Maybe<Scalars['Int']>;
  /** Whether or not the viewer can resolve this thread */
  readonly viewerCanResolve: Scalars['Boolean'];
  /** Whether or not the viewer can unresolve this thread */
  readonly viewerCanUnresolve: Scalars['Boolean'];
};


/** A threaded list of comments for a given pull request. */
type Github_PullRequestReviewThread_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  skip: Maybe<Scalars['Int']>;
};

/** Review comment threads for a pull request review. */
type Github_PullRequestReviewThreadConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewThreadEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestReviewThread>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PullRequestReviewThreadEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestReviewThread>;
};

/** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
type Github_PullRequestRevisionMarker = {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The last commit the viewer has seen. */
  readonly lastSeenCommit: Github_Commit;
  /** The pull request to which the marker belongs. */
  readonly pullRequest: Github_PullRequest;
};

/** The possible states of a pull request. */
enum Github_PullRequestState {
  /** A pull request that is still open. */
  OPEN = 'OPEN',
  /** A pull request that has been closed without being merged. */
  CLOSED = 'CLOSED',
  /** A pull request that has been closed by being merged. */
  MERGED = 'MERGED'
}

/** The connection type for PullRequestTimelineItem. */
type Github_PullRequestTimelineConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItemEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItem>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An item in an pull request timeline */
type Github_PullRequestTimelineItem = Github_AssignedEvent | Github_BaseRefForcePushedEvent | Github_ClosedEvent | Github_Commit | Github_CommitCommentThread | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DeployedEvent | Github_DeploymentEnvironmentChangedEvent | Github_HeadRefDeletedEvent | Github_HeadRefForcePushedEvent | Github_HeadRefRestoredEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MergedEvent | Github_MilestonedEvent | Github_PullRequestReview | Github_PullRequestReviewComment | Github_PullRequestReviewThread | Github_ReferencedEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_ReviewDismissedEvent | Github_ReviewRequestRemovedEvent | Github_ReviewRequestedEvent | Github_SubscribedEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

/** An edge in a connection. */
type Github_PullRequestTimelineItemEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestTimelineItem>;
};

/** An item in a pull request timeline */
type Github_PullRequestTimelineItems = Github_AddedToProjectEvent | Github_AssignedEvent | Github_AutomaticBaseChangeFailedEvent | Github_AutomaticBaseChangeSucceededEvent | Github_BaseRefChangedEvent | Github_BaseRefForcePushedEvent | Github_ClosedEvent | Github_CommentDeletedEvent | Github_ConnectedEvent | Github_ConvertToDraftEvent | Github_ConvertedNoteToIssueEvent | Github_CrossReferencedEvent | Github_DemilestonedEvent | Github_DeployedEvent | Github_DeploymentEnvironmentChangedEvent | Github_DisconnectedEvent | Github_HeadRefDeletedEvent | Github_HeadRefForcePushedEvent | Github_HeadRefRestoredEvent | Github_IssueComment | Github_LabeledEvent | Github_LockedEvent | Github_MarkedAsDuplicateEvent | Github_MentionedEvent | Github_MergedEvent | Github_MilestonedEvent | Github_MovedColumnsInProjectEvent | Github_PinnedEvent | Github_PullRequestCommit | Github_PullRequestCommitCommentThread | Github_PullRequestReview | Github_PullRequestReviewThread | Github_PullRequestRevisionMarker | Github_ReadyForReviewEvent | Github_ReferencedEvent | Github_RemovedFromProjectEvent | Github_RenamedTitleEvent | Github_ReopenedEvent | Github_ReviewDismissedEvent | Github_ReviewRequestRemovedEvent | Github_ReviewRequestedEvent | Github_SubscribedEvent | Github_TransferredEvent | Github_UnassignedEvent | Github_UnlabeledEvent | Github_UnlockedEvent | Github_UnmarkedAsDuplicateEvent | Github_UnpinnedEvent | Github_UnsubscribedEvent | Github_UserBlockedEvent;

/** The connection type for PullRequestTimelineItems. */
type Github_PullRequestTimelineItemsConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItemsEdge>>>;
  /** Identifies the count of items after applying `before` and `after` filters. */
  readonly filteredCount: Scalars['Int'];
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PullRequestTimelineItems>>>;
  /** Identifies the count of items after applying `before`/`after` filters and `first`/`last`/`skip` slicing. */
  readonly pageCount: Scalars['Int'];
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
  /** Identifies the date and time when the timeline was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** An edge in a connection. */
type Github_PullRequestTimelineItemsEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PullRequestTimelineItems>;
};

/** The possible item types found in a timeline. */
enum Github_PullRequestTimelineItemsItemType {
  /** Represents a Git commit part of a pull request. */
  PULL_REQUEST_COMMIT = 'PULL_REQUEST_COMMIT',
  /** Represents a commit comment thread part of a pull request. */
  PULL_REQUEST_COMMIT_COMMENT_THREAD = 'PULL_REQUEST_COMMIT_COMMENT_THREAD',
  /** A review object for a given pull request. */
  PULL_REQUEST_REVIEW = 'PULL_REQUEST_REVIEW',
  /** A threaded list of comments for a given pull request. */
  PULL_REQUEST_REVIEW_THREAD = 'PULL_REQUEST_REVIEW_THREAD',
  /** Represents the latest point in the pull request timeline for which the viewer has seen the pull request's commits. */
  PULL_REQUEST_REVISION_MARKER = 'PULL_REQUEST_REVISION_MARKER',
  /** Represents a 'automatic_base_change_failed' event on a given pull request. */
  AUTOMATIC_BASE_CHANGE_FAILED_EVENT = 'AUTOMATIC_BASE_CHANGE_FAILED_EVENT',
  /** Represents a 'automatic_base_change_succeeded' event on a given pull request. */
  AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT = 'AUTOMATIC_BASE_CHANGE_SUCCEEDED_EVENT',
  /** Represents a 'base_ref_changed' event on a given issue or pull request. */
  BASE_REF_CHANGED_EVENT = 'BASE_REF_CHANGED_EVENT',
  /** Represents a 'base_ref_force_pushed' event on a given pull request. */
  BASE_REF_FORCE_PUSHED_EVENT = 'BASE_REF_FORCE_PUSHED_EVENT',
  /** Represents a 'deployed' event on a given pull request. */
  DEPLOYED_EVENT = 'DEPLOYED_EVENT',
  /** Represents a 'deployment_environment_changed' event on a given pull request. */
  DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT = 'DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT',
  /** Represents a 'head_ref_deleted' event on a given pull request. */
  HEAD_REF_DELETED_EVENT = 'HEAD_REF_DELETED_EVENT',
  /** Represents a 'head_ref_force_pushed' event on a given pull request. */
  HEAD_REF_FORCE_PUSHED_EVENT = 'HEAD_REF_FORCE_PUSHED_EVENT',
  /** Represents a 'head_ref_restored' event on a given pull request. */
  HEAD_REF_RESTORED_EVENT = 'HEAD_REF_RESTORED_EVENT',
  /** Represents a 'merged' event on a given pull request. */
  MERGED_EVENT = 'MERGED_EVENT',
  /** Represents a 'review_dismissed' event on a given issue or pull request. */
  REVIEW_DISMISSED_EVENT = 'REVIEW_DISMISSED_EVENT',
  /** Represents an 'review_requested' event on a given pull request. */
  REVIEW_REQUESTED_EVENT = 'REVIEW_REQUESTED_EVENT',
  /** Represents an 'review_request_removed' event on a given pull request. */
  REVIEW_REQUEST_REMOVED_EVENT = 'REVIEW_REQUEST_REMOVED_EVENT',
  /** Represents a 'ready_for_review' event on a given pull request. */
  READY_FOR_REVIEW_EVENT = 'READY_FOR_REVIEW_EVENT',
  /** Represents a 'convert_to_draft' event on a given pull request. */
  CONVERT_TO_DRAFT_EVENT = 'CONVERT_TO_DRAFT_EVENT',
  /** Represents a comment on an Issue. */
  ISSUE_COMMENT = 'ISSUE_COMMENT',
  /** Represents a mention made by one issue or pull request to another. */
  CROSS_REFERENCED_EVENT = 'CROSS_REFERENCED_EVENT',
  /** Represents a 'added_to_project' event on a given issue or pull request. */
  ADDED_TO_PROJECT_EVENT = 'ADDED_TO_PROJECT_EVENT',
  /** Represents an 'assigned' event on any assignable object. */
  ASSIGNED_EVENT = 'ASSIGNED_EVENT',
  /** Represents a 'closed' event on any `Closable`. */
  CLOSED_EVENT = 'CLOSED_EVENT',
  /** Represents a 'comment_deleted' event on a given issue or pull request. */
  COMMENT_DELETED_EVENT = 'COMMENT_DELETED_EVENT',
  /** Represents a 'connected' event on a given issue or pull request. */
  CONNECTED_EVENT = 'CONNECTED_EVENT',
  /** Represents a 'converted_note_to_issue' event on a given issue or pull request. */
  CONVERTED_NOTE_TO_ISSUE_EVENT = 'CONVERTED_NOTE_TO_ISSUE_EVENT',
  /** Represents a 'demilestoned' event on a given issue or pull request. */
  DEMILESTONED_EVENT = 'DEMILESTONED_EVENT',
  /** Represents a 'disconnected' event on a given issue or pull request. */
  DISCONNECTED_EVENT = 'DISCONNECTED_EVENT',
  /** Represents a 'labeled' event on a given issue or pull request. */
  LABELED_EVENT = 'LABELED_EVENT',
  /** Represents a 'locked' event on a given issue or pull request. */
  LOCKED_EVENT = 'LOCKED_EVENT',
  /** Represents a 'marked_as_duplicate' event on a given issue or pull request. */
  MARKED_AS_DUPLICATE_EVENT = 'MARKED_AS_DUPLICATE_EVENT',
  /** Represents a 'mentioned' event on a given issue or pull request. */
  MENTIONED_EVENT = 'MENTIONED_EVENT',
  /** Represents a 'milestoned' event on a given issue or pull request. */
  MILESTONED_EVENT = 'MILESTONED_EVENT',
  /** Represents a 'moved_columns_in_project' event on a given issue or pull request. */
  MOVED_COLUMNS_IN_PROJECT_EVENT = 'MOVED_COLUMNS_IN_PROJECT_EVENT',
  /** Represents a 'pinned' event on a given issue or pull request. */
  PINNED_EVENT = 'PINNED_EVENT',
  /** Represents a 'referenced' event on a given `ReferencedSubject`. */
  REFERENCED_EVENT = 'REFERENCED_EVENT',
  /** Represents a 'removed_from_project' event on a given issue or pull request. */
  REMOVED_FROM_PROJECT_EVENT = 'REMOVED_FROM_PROJECT_EVENT',
  /** Represents a 'renamed' event on a given issue or pull request */
  RENAMED_TITLE_EVENT = 'RENAMED_TITLE_EVENT',
  /** Represents a 'reopened' event on any `Closable`. */
  REOPENED_EVENT = 'REOPENED_EVENT',
  /** Represents a 'subscribed' event on a given `Subscribable`. */
  SUBSCRIBED_EVENT = 'SUBSCRIBED_EVENT',
  /** Represents a 'transferred' event on a given issue or pull request. */
  TRANSFERRED_EVENT = 'TRANSFERRED_EVENT',
  /** Represents an 'unassigned' event on any assignable object. */
  UNASSIGNED_EVENT = 'UNASSIGNED_EVENT',
  /** Represents an 'unlabeled' event on a given issue or pull request. */
  UNLABELED_EVENT = 'UNLABELED_EVENT',
  /** Represents an 'unlocked' event on a given issue or pull request. */
  UNLOCKED_EVENT = 'UNLOCKED_EVENT',
  /** Represents a 'user_blocked' event on a given user. */
  USER_BLOCKED_EVENT = 'USER_BLOCKED_EVENT',
  /** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
  UNMARKED_AS_DUPLICATE_EVENT = 'UNMARKED_AS_DUPLICATE_EVENT',
  /** Represents an 'unpinned' event on a given issue or pull request. */
  UNPINNED_EVENT = 'UNPINNED_EVENT',
  /** Represents an 'unsubscribed' event on a given `Subscribable`. */
  UNSUBSCRIBED_EVENT = 'UNSUBSCRIBED_EVENT'
}

/** The possible target states when updating a pull request. */
enum Github_PullRequestUpdateState {
  /** A pull request that is still open. */
  OPEN = 'OPEN',
  /** A pull request that has been closed without being merged. */
  CLOSED = 'CLOSED'
}

/** A team, user or app who has the ability to push to a protected branch. */
type Github_PushAllowance = Github_Node & {
  /** The actor that can push. */
  readonly actor: Maybe<Github_PushAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly id: Scalars['ID'];
};

/** Types that can be an actor. */
type Github_PushAllowanceActor = Github_App | Github_Team | Github_User;

/** The connection type for PushAllowance. */
type Github_PushAllowanceConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_PushAllowanceEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_PushAllowance>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_PushAllowanceEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_PushAllowance>;
};

/** Represents the client's rate limit. */
type Github_RateLimit = {
  /** The point cost for the current query counting against the rate limit. */
  readonly cost: Scalars['Int'];
  /** The maximum number of points the client is permitted to consume in a 60 minute window. */
  readonly limit: Scalars['Int'];
  /** The maximum number of nodes this query may return */
  readonly nodeCount: Scalars['Int'];
  /** The number of points remaining in the current rate limit window. */
  readonly remaining: Scalars['Int'];
  /** The time at which the current rate limit window resets in UTC epoch seconds. */
  readonly resetAt: Scalars['Github_DateTime'];
};

/** Represents a subject that can be reacted on. */
type Github_Reactable = {
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
};


/** Represents a subject that can be reacted on. */
type Github_Reactable_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};

/** The connection type for User. */
type Github_ReactingUserConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReactingUserEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a user that's made a reaction. */
type Github_ReactingUserEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  readonly node: Github_User;
  /** The moment when the user made the reaction. */
  readonly reactedAt: Scalars['Github_DateTime'];
};

/** An emoji reaction to a particular piece of content. */
type Github_Reaction = Github_Node & {
  /** Identifies the emoji reaction. */
  readonly content: Github_ReactionContent;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** The reactable piece of content */
  readonly reactable: Github_Reactable;
  /** Identifies the user who created this reaction. */
  readonly user: Maybe<Github_User>;
};

/** A list of reactions that have been left on the subject. */
type Github_ReactionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReactionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Reaction>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
  /** Whether or not the authenticated user has left a reaction on the subject. */
  readonly viewerHasReacted: Scalars['Boolean'];
};

/** Emojis that can be attached to Issues, Pull Requests and Comments. */
enum Github_ReactionContent {
  /** Represents the `:+1:` emoji. */
  THUMBS_UP = 'THUMBS_UP',
  /** Represents the `:-1:` emoji. */
  THUMBS_DOWN = 'THUMBS_DOWN',
  /** Represents the `:laugh:` emoji. */
  LAUGH = 'LAUGH',
  /** Represents the `:hooray:` emoji. */
  HOORAY = 'HOORAY',
  /** Represents the `:confused:` emoji. */
  CONFUSED = 'CONFUSED',
  /** Represents the `:heart:` emoji. */
  HEART = 'HEART',
  /** Represents the `:rocket:` emoji. */
  ROCKET = 'ROCKET',
  /** Represents the `:eyes:` emoji. */
  EYES = 'EYES'
}

/** An edge in a connection. */
type Github_ReactionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Reaction>;
};

/** A group of emoji reactions to a particular piece of content. */
type Github_ReactionGroup = {
  /** Identifies the emoji reaction. */
  readonly content: Github_ReactionContent;
  /** Identifies when the reaction was created. */
  readonly createdAt: Maybe<Scalars['Github_DateTime']>;
  /** The subject that was reacted to. */
  readonly subject: Github_Reactable;
  /** Users who have reacted to the reaction subject with the emotion represented by this reaction group */
  readonly users: Github_ReactingUserConnection;
  /** Whether or not the authenticated user has left a reaction on the subject. */
  readonly viewerHasReacted: Scalars['Boolean'];
};


/** A group of emoji reactions to a particular piece of content. */
type Github_ReactionGroup_usersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Ways in which lists of reactions can be ordered upon return. */
type Github_ReactionOrder = {
  /** The field in which to order reactions by. */
  readonly field: Github_ReactionOrderField;
  /** The direction in which to order reactions by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** A list of fields that reactions can be ordered by. */
enum Github_ReactionOrderField {
  /** Allows ordering a list of reactions by when they were created. */
  CREATED_AT = 'CREATED_AT'
}

/** Represents a 'ready_for_review' event on a given pull request. */
type Github_ReadyForReviewEvent = Github_Node & Github_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** The HTTP path for this ready for review event. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this ready for review event. */
  readonly url: Scalars['Github_URI'];
};

/** Represents a Git reference. */
type Github_Ref = Github_Node & {
  /** A list of pull requests with this ref as the head ref. */
  readonly associatedPullRequests: Github_PullRequestConnection;
  readonly id: Scalars['ID'];
  /** The ref name. */
  readonly name: Scalars['String'];
  /** The ref's prefix, such as `refs/heads/` or `refs/tags/`. */
  readonly prefix: Scalars['String'];
  /** The repository the ref belongs to. */
  readonly repository: Github_Repository;
  /** The object the ref points to. Returns null when object does not exist. */
  readonly target: Maybe<Github_GitObject>;
};


/** Represents a Git reference. */
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

/** The connection type for Ref. */
type Github_RefConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RefEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Ref>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_RefEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Ref>;
};

/** Represents a 'referenced' event on a given `ReferencedSubject`. */
type Github_ReferencedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the commit associated with the 'referenced' event. */
  readonly commit: Maybe<Github_Commit>;
  /** Identifies the repository associated with the 'referenced' event. */
  readonly commitRepository: Github_Repository;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Reference originated in a different repository. */
  readonly isCrossRepository: Scalars['Boolean'];
  /** Checks if the commit message itself references the subject. Can be false in the case of a commit comment reference. */
  readonly isDirectReference: Scalars['Boolean'];
  /** Object referenced by event. */
  readonly subject: Github_ReferencedSubject;
};

/** Any referencable object */
type Github_ReferencedSubject = Github_Issue | Github_PullRequest;

/** Ways in which lists of git refs can be ordered upon return. */
type Github_RefOrder = {
  /** The field in which to order refs by. */
  readonly field: Github_RefOrderField;
  /** The direction in which to order refs by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which ref connections can be ordered. */
enum Github_RefOrderField {
  /** Order refs by underlying commit date if the ref prefix is refs/tags/ */
  TAG_COMMIT_DATE = 'TAG_COMMIT_DATE',
  /** Order refs by their alphanumeric name */
  ALPHABETICAL = 'ALPHABETICAL'
}

/** Autogenerated input type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
type Github_RegenerateEnterpriseIdentityProviderRecoveryCodesInput = {
  /** The ID of the enterprise on which to set an identity provider. */
  readonly enterpriseId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RegenerateEnterpriseIdentityProviderRecoveryCodes */
type Github_RegenerateEnterpriseIdentityProviderRecoveryCodesPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The identity provider for the enterprise. */
  readonly identityProvider: Maybe<Github_EnterpriseIdentityProvider>;
};

/** A release contains the content for a release. */
type Github_Release = Github_Node & Github_UniformResourceLocatable & {
  /** The author of the release */
  readonly author: Maybe<Github_User>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The description of the release. */
  readonly description: Maybe<Scalars['String']>;
  /** The description of this release rendered to HTML. */
  readonly descriptionHTML: Maybe<Scalars['Github_HTML']>;
  readonly id: Scalars['ID'];
  /** Whether or not the release is a draft */
  readonly isDraft: Scalars['Boolean'];
  /** Whether or not the release is a prerelease */
  readonly isPrerelease: Scalars['Boolean'];
  /** The title of the release. */
  readonly name: Maybe<Scalars['String']>;
  /** Identifies the date and time when the release was created. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** List of releases assets which are dependent on this release. */
  readonly releaseAssets: Github_ReleaseAssetConnection;
  /** The HTTP path for this issue */
  readonly resourcePath: Scalars['Github_URI'];
  /** A description of the release, rendered to HTML without any links in it. */
  readonly shortDescriptionHTML: Maybe<Scalars['Github_HTML']>;
  /** The Git tag the release points to */
  readonly tag: Maybe<Github_Ref>;
  /** The name of the release's Git tag */
  readonly tagName: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this issue */
  readonly url: Scalars['Github_URI'];
};


/** A release contains the content for a release. */
type Github_Release_releaseAssetsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
};


/** A release contains the content for a release. */
type Github_Release_shortDescriptionHTMLArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** A release asset contains the content for a release asset. */
type Github_ReleaseAsset = Github_Node & {
  /** The asset's content-type */
  readonly contentType: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The number of times this asset was downloaded */
  readonly downloadCount: Scalars['Int'];
  /** Identifies the URL where you can download the release asset via the browser. */
  readonly downloadUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  /** Identifies the title of the release asset. */
  readonly name: Scalars['String'];
  /** Release that the asset is associated with */
  readonly release: Maybe<Github_Release>;
  /** The size (in bytes) of the asset */
  readonly size: Scalars['Int'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The user that performed the upload */
  readonly uploadedBy: Github_User;
  /** Identifies the URL of the release asset. */
  readonly url: Scalars['Github_URI'];
};

/** The connection type for ReleaseAsset. */
type Github_ReleaseAssetConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReleaseAssetEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ReleaseAsset>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ReleaseAssetEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_ReleaseAsset>;
};

/** The connection type for Release. */
type Github_ReleaseConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReleaseEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Release>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ReleaseEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Release>;
};

/** Ways in which lists of releases can be ordered upon return. */
type Github_ReleaseOrder = {
  /** The field in which to order releases by. */
  readonly field: Github_ReleaseOrderField;
  /** The direction in which to order releases by the specified field. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which release connections can be ordered. */
enum Github_ReleaseOrderField {
  /** Order releases by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order releases alphabetically by name */
  NAME = 'NAME'
}

/** Autogenerated input type of RemoveAssigneesFromAssignable */
type Github_RemoveAssigneesFromAssignableInput = {
  /** The id of the assignable object to remove assignees from. */
  readonly assignableId: Scalars['ID'];
  /** The id of users to remove as assignees. */
  readonly assigneeIds: ReadonlyArray<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveAssigneesFromAssignable */
type Github_RemoveAssigneesFromAssignablePayload = {
  /** The item that was unassigned. */
  readonly assignable: Maybe<Github_Assignable>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Represents a 'removed_from_project' event on a given issue or pull request. */
type Github_RemovedFromProjectEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
};

/** Autogenerated input type of RemoveEnterpriseAdmin */
type Github_RemoveEnterpriseAdminInput = {
  /** The Enterprise ID from which to remove the administrator. */
  readonly enterpriseId: Scalars['ID'];
  /** The login of the user to remove as an administrator. */
  readonly login: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveEnterpriseAdmin */
type Github_RemoveEnterpriseAdminPayload = {
  /** The user who was removed as an administrator. */
  readonly admin: Maybe<Github_User>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated enterprise. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of removing an administrator. */
  readonly message: Maybe<Scalars['String']>;
  /** The viewer performing the mutation. */
  readonly viewer: Maybe<Github_User>;
};

/** Autogenerated input type of RemoveEnterpriseIdentityProvider */
type Github_RemoveEnterpriseIdentityProviderInput = {
  /** The ID of the enterprise from which to remove the identity provider. */
  readonly enterpriseId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveEnterpriseIdentityProvider */
type Github_RemoveEnterpriseIdentityProviderPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The identity provider that was removed from the enterprise. */
  readonly identityProvider: Maybe<Github_EnterpriseIdentityProvider>;
};

/** Autogenerated input type of RemoveEnterpriseOrganization */
type Github_RemoveEnterpriseOrganizationInput = {
  /** The ID of the enterprise from which the organization should be removed. */
  readonly enterpriseId: Scalars['ID'];
  /** The ID of the organization to remove from the enterprise. */
  readonly organizationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveEnterpriseOrganization */
type Github_RemoveEnterpriseOrganizationPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated enterprise. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** The organization that was removed from the enterprise. */
  readonly organization: Maybe<Github_Organization>;
  /** The viewer performing the mutation. */
  readonly viewer: Maybe<Github_User>;
};

/** Autogenerated input type of RemoveLabelsFromLabelable */
type Github_RemoveLabelsFromLabelableInput = {
  /** The id of the Labelable to remove labels from. */
  readonly labelableId: Scalars['ID'];
  /** The ids of labels to remove. */
  readonly labelIds: ReadonlyArray<Scalars['ID']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveLabelsFromLabelable */
type Github_RemoveLabelsFromLabelablePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The Labelable the labels were removed from. */
  readonly labelable: Maybe<Github_Labelable>;
};

/** Autogenerated input type of RemoveOutsideCollaborator */
type Github_RemoveOutsideCollaboratorInput = {
  /** The ID of the outside collaborator to remove. */
  readonly userId: Scalars['ID'];
  /** The ID of the organization to remove the outside collaborator from. */
  readonly organizationId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveOutsideCollaborator */
type Github_RemoveOutsideCollaboratorPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The user that was removed as an outside collaborator. */
  readonly removedUser: Maybe<Github_User>;
};

/** Autogenerated input type of RemoveReaction */
type Github_RemoveReactionInput = {
  /** The Node ID of the subject to modify. */
  readonly subjectId: Scalars['ID'];
  /** The name of the emoji reaction to remove. */
  readonly content: Github_ReactionContent;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveReaction */
type Github_RemoveReactionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The reaction object. */
  readonly reaction: Maybe<Github_Reaction>;
  /** The reactable subject. */
  readonly subject: Maybe<Github_Reactable>;
};

/** Autogenerated input type of RemoveStar */
type Github_RemoveStarInput = {
  /** The Starrable ID to unstar. */
  readonly starrableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RemoveStar */
type Github_RemoveStarPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The starrable. */
  readonly starrable: Maybe<Github_Starrable>;
};

/** Represents a 'renamed' event on a given issue or pull request */
type Github_RenamedTitleEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the current title of the issue or pull request. */
  readonly currentTitle: Scalars['String'];
  readonly id: Scalars['ID'];
  /** Identifies the previous title of the issue or pull request. */
  readonly previousTitle: Scalars['String'];
  /** Subject that was renamed. */
  readonly subject: Github_RenamedTitleSubject;
};

/** An object which has a renamable title */
type Github_RenamedTitleSubject = Github_Issue | Github_PullRequest;

/** Represents a 'reopened' event on any `Closable`. */
type Github_ReopenedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Object that was reopened. */
  readonly closable: Github_Closable;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
};

/** Autogenerated input type of ReopenIssue */
type Github_ReopenIssueInput = {
  /** ID of the issue to be opened. */
  readonly issueId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReopenIssue */
type Github_ReopenIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The issue that was opened. */
  readonly issue: Maybe<Github_Issue>;
};

/** Autogenerated input type of ReopenPullRequest */
type Github_ReopenPullRequestInput = {
  /** ID of the pull request to be reopened. */
  readonly pullRequestId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ReopenPullRequest */
type Github_ReopenPullRequestPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The pull request that was reopened. */
  readonly pullRequest: Maybe<Github_PullRequest>;
};

/** Audit log entry for a repo.access event. */
type Github_RepoAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The visibility of the repository */
  readonly visibility: Maybe<Github_RepoAccessAuditEntryVisibility>;
};

/** The privacy of a repository */
enum Github_RepoAccessAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL',
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC'
}

/** Audit log entry for a repo.add_member event. */
type Github_RepoAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The visibility of the repository */
  readonly visibility: Maybe<Github_RepoAddMemberAuditEntryVisibility>;
};

/** The privacy of a repository */
enum Github_RepoAddMemberAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL',
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC'
}

/** Audit log entry for a repo.add_topic event. */
type Github_RepoAddTopicAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & Github_TopicAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The name of the topic added to the repository */
  readonly topic: Maybe<Github_Topic>;
  /** The name of the topic added to the repository */
  readonly topicName: Maybe<Scalars['String']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.archived event. */
type Github_RepoArchivedAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The visibility of the repository */
  readonly visibility: Maybe<Github_RepoArchivedAuditEntryVisibility>;
};

/** The privacy of a repository */
enum Github_RepoArchivedAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL',
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC'
}

/** Audit log entry for a repo.change_merge_setting event. */
type Github_RepoChangeMergeSettingAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** Whether the change was to enable (true) or disable (false) the merge type */
  readonly isEnabled: Maybe<Scalars['Boolean']>;
  /** The merge method affected by the change */
  readonly mergeType: Maybe<Github_RepoChangeMergeSettingAuditEntryMergeType>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The merge options available for pull requests to this repository. */
enum Github_RepoChangeMergeSettingAuditEntryMergeType {
  /** The pull request is added to the base branch in a merge commit. */
  MERGE = 'MERGE',
  /** Commits from the pull request are added onto the base branch individually without a merge commit. */
  REBASE = 'REBASE',
  /** The pull request's commits are squashed into a single commit before they are merged to the base branch. */
  SQUASH = 'SQUASH'
}

/** Audit log entry for a repo.config.disable_anonymous_git_access event. */
type Github_RepoConfigDisableAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.disable_collaborators_only event. */
type Github_RepoConfigDisableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.disable_contributors_only event. */
type Github_RepoConfigDisableContributorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.disable_sockpuppet_disallowed event. */
type Github_RepoConfigDisableSockpuppetDisallowedAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.enable_anonymous_git_access event. */
type Github_RepoConfigEnableAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.enable_collaborators_only event. */
type Github_RepoConfigEnableCollaboratorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.enable_contributors_only event. */
type Github_RepoConfigEnableContributorsOnlyAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.enable_sockpuppet_disallowed event. */
type Github_RepoConfigEnableSockpuppetDisallowedAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.lock_anonymous_git_access event. */
type Github_RepoConfigLockAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.config.unlock_anonymous_git_access event. */
type Github_RepoConfigUnlockAnonymousGitAccessAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repo.create event. */
type Github_RepoCreateAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The name of the parent repository for this forked repository. */
  readonly forkParentName: Maybe<Scalars['String']>;
  /** The name of the root repository for this netork. */
  readonly forkSourceName: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The visibility of the repository */
  readonly visibility: Maybe<Github_RepoCreateAuditEntryVisibility>;
};

/** The privacy of a repository */
enum Github_RepoCreateAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL',
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC'
}

/** Audit log entry for a repo.destroy event. */
type Github_RepoDestroyAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The visibility of the repository */
  readonly visibility: Maybe<Github_RepoDestroyAuditEntryVisibility>;
};

/** The privacy of a repository */
enum Github_RepoDestroyAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL',
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC'
}

/** Audit log entry for a repo.remove_member event. */
type Github_RepoRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
  /** The visibility of the repository */
  readonly visibility: Maybe<Github_RepoRemoveMemberAuditEntryVisibility>;
};

/** The privacy of a repository */
enum Github_RepoRemoveMemberAuditEntryVisibility {
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL',
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC'
}

/** Audit log entry for a repo.remove_topic event. */
type Github_RepoRemoveTopicAuditEntry = Github_Node & Github_AuditEntry & Github_RepositoryAuditEntryData & Github_OrganizationAuditEntryData & Github_TopicAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The name of the topic added to the repository */
  readonly topic: Maybe<Github_Topic>;
  /** The name of the topic added to the repository */
  readonly topicName: Maybe<Scalars['String']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The reasons a piece of content can be reported or minimized. */
enum Github_ReportedContentClassifiers {
  /** A spammy piece of content */
  SPAM = 'SPAM',
  /** An abusive or harassing piece of content */
  ABUSE = 'ABUSE',
  /** An irrelevant piece of content */
  OFF_TOPIC = 'OFF_TOPIC',
  /** An outdated piece of content */
  OUTDATED = 'OUTDATED',
  /** A duplicated piece of content */
  DUPLICATE = 'DUPLICATE',
  /** The content has been resolved */
  RESOLVED = 'RESOLVED'
}

/** A repository contains the content for a project. */
type Github_Repository = Github_Node & Github_ProjectOwner & Github_PackageOwner & Github_Subscribable & Github_Starrable & Github_UniformResourceLocatable & Github_RepositoryInfo & {
  /** A list of users that can be assigned to issues in this repository. */
  readonly assignableUsers: Github_UserConnection;
  /** A list of branch protection rules for this repository. */
  readonly branchProtectionRules: Github_BranchProtectionRuleConnection;
  /** Returns the code of conduct for this repository */
  readonly codeOfConduct: Maybe<Github_CodeOfConduct>;
  /** A list of collaborators associated with the repository. */
  readonly collaborators: Maybe<Github_RepositoryCollaboratorConnection>;
  /** A list of commit comments associated with the repository. */
  readonly commitComments: Github_CommitCommentConnection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The Ref associated with the repository's default branch. */
  readonly defaultBranchRef: Maybe<Github_Ref>;
  /** Whether or not branches are automatically deleted when merged in this repository. */
  readonly deleteBranchOnMerge: Scalars['Boolean'];
  /** A list of deploy keys that are on this repository. */
  readonly deployKeys: Github_DeployKeyConnection;
  /** Deployments associated with the repository */
  readonly deployments: Github_DeploymentConnection;
  /** The description of the repository. */
  readonly description: Maybe<Scalars['String']>;
  /** The description of the repository rendered to HTML. */
  readonly descriptionHTML: Scalars['Github_HTML'];
  /** The number of kilobytes this repository occupies on disk. */
  readonly diskUsage: Maybe<Scalars['Int']>;
  /** Returns how many forks there are of this repository in the whole network. */
  readonly forkCount: Scalars['Int'];
  /** A list of direct forked repositories. */
  readonly forks: Github_RepositoryConnection;
  /** The funding links for this repository */
  readonly fundingLinks: ReadonlyArray<Github_FundingLink>;
  /** Indicates if the repository has issues feature enabled. */
  readonly hasIssuesEnabled: Scalars['Boolean'];
  /** Indicates if the repository has the Projects feature enabled. */
  readonly hasProjectsEnabled: Scalars['Boolean'];
  /** Indicates if the repository has wiki feature enabled. */
  readonly hasWikiEnabled: Scalars['Boolean'];
  /** The repository's URL. */
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** Indicates if the repository is unmaintained. */
  readonly isArchived: Scalars['Boolean'];
  /** Returns whether or not this repository disabled. */
  readonly isDisabled: Scalars['Boolean'];
  /** Returns whether or not this repository is empty. */
  readonly isEmpty: Scalars['Boolean'];
  /** Identifies if the repository is a fork. */
  readonly isFork: Scalars['Boolean'];
  /** Indicates if the repository has been locked or not. */
  readonly isLocked: Scalars['Boolean'];
  /** Identifies if the repository is a mirror. */
  readonly isMirror: Scalars['Boolean'];
  /** Identifies if the repository is private. */
  readonly isPrivate: Scalars['Boolean'];
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  readonly isTemplate: Scalars['Boolean'];
  /** Returns a single issue from the current repository by number. */
  readonly issue: Maybe<Github_Issue>;
  /** Returns a single issue-like object from the current repository by number. */
  readonly issueOrPullRequest: Maybe<Github_IssueOrPullRequest>;
  /** A list of issues that have been opened in the repository. */
  readonly issues: Github_IssueConnection;
  /** Returns a single label by name */
  readonly label: Maybe<Github_Label>;
  /** A list of labels associated with the repository. */
  readonly labels: Maybe<Github_LabelConnection>;
  /** A list containing a breakdown of the language composition of the repository. */
  readonly languages: Maybe<Github_LanguageConnection>;
  /** The license associated with the repository */
  readonly licenseInfo: Maybe<Github_License>;
  /** The reason the repository has been locked. */
  readonly lockReason: Maybe<Github_RepositoryLockReason>;
  /** A list of Users that can be mentioned in the context of the repository. */
  readonly mentionableUsers: Github_UserConnection;
  /** Whether or not PRs are merged with a merge commit on this repository. */
  readonly mergeCommitAllowed: Scalars['Boolean'];
  /** Returns a single milestone from the current repository by number. */
  readonly milestone: Maybe<Github_Milestone>;
  /** A list of milestones associated with the repository. */
  readonly milestones: Maybe<Github_MilestoneConnection>;
  /** The repository's original mirror URL. */
  readonly mirrorUrl: Maybe<Scalars['Github_URI']>;
  /** The name of the repository. */
  readonly name: Scalars['String'];
  /** The repository's name with owner. */
  readonly nameWithOwner: Scalars['String'];
  /** A Git object in the repository */
  readonly object: Maybe<Github_GitObject>;
  /** The image used to represent this repository in Open Graph data. */
  readonly openGraphImageUrl: Scalars['Github_URI'];
  /** The User owner of the repository. */
  readonly owner: Github_RepositoryOwner;
  /** A list of packages under the owner. */
  readonly packages: Github_PackageConnection;
  /** The repository parent, if this is a fork. */
  readonly parent: Maybe<Github_Repository>;
  /** The primary language of the repository's code. */
  readonly primaryLanguage: Maybe<Github_Language>;
  /** Find project by number. */
  readonly project: Maybe<Github_Project>;
  /** A list of projects under the owner. */
  readonly projects: Github_ProjectConnection;
  /** The HTTP path listing the repository's projects */
  readonly projectsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL listing the repository's projects */
  readonly projectsUrl: Scalars['Github_URI'];
  /** Returns a single pull request from the current repository by number. */
  readonly pullRequest: Maybe<Github_PullRequest>;
  /** A list of pull requests that have been opened in the repository. */
  readonly pullRequests: Github_PullRequestConnection;
  /** Identifies when the repository was last pushed to. */
  readonly pushedAt: Maybe<Scalars['Github_DateTime']>;
  /** Whether or not rebase-merging is enabled on this repository. */
  readonly rebaseMergeAllowed: Scalars['Boolean'];
  /** Fetch a given ref from the repository */
  readonly ref: Maybe<Github_Ref>;
  /** Fetch a list of refs from the repository */
  readonly refs: Maybe<Github_RefConnection>;
  /** Lookup a single release given various criteria. */
  readonly release: Maybe<Github_Release>;
  /** List of releases which are dependent on this repository. */
  readonly releases: Github_ReleaseConnection;
  /** A list of applied repository-topic associations for this repository. */
  readonly repositoryTopics: Github_RepositoryTopicConnection;
  /** The HTTP path for this repository */
  readonly resourcePath: Scalars['Github_URI'];
  /** A description of the repository, rendered to HTML without any links in it. */
  readonly shortDescriptionHTML: Scalars['Github_HTML'];
  /** Whether or not squash-merging is enabled on this repository. */
  readonly squashMergeAllowed: Scalars['Boolean'];
  /** The SSH URL to clone this repository */
  readonly sshUrl: Scalars['Github_GitSSHRemote'];
  /** A list of users who have starred this starrable. */
  readonly stargazers: Github_StargazerConnection;
  /**
   * Returns a list of all submodules in this repository parsed from the
   * .gitmodules file as of the default branch's HEAD commit.
   */
  readonly submodules: Github_SubmoduleConnection;
  /** Temporary authentication token for cloning this repository. */
  readonly tempCloneToken: Maybe<Scalars['String']>;
  /** The repository from which this repository was generated, if any. */
  readonly templateRepository: Maybe<Github_Repository>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this repository */
  readonly url: Scalars['Github_URI'];
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  readonly usesCustomOpenGraphImage: Scalars['Boolean'];
  /** Indicates whether the viewer has admin permissions on this repository. */
  readonly viewerCanAdminister: Scalars['Boolean'];
  /** Can the current viewer create new projects on this owner. */
  readonly viewerCanCreateProjects: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Indicates whether the viewer can update the topics of this repository. */
  readonly viewerCanUpdateTopics: Scalars['Boolean'];
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  readonly viewerHasStarred: Scalars['Boolean'];
  /** The users permission level on the repository. Will return null if authenticated as an GitHub App. */
  readonly viewerPermission: Maybe<Github_RepositoryPermission>;
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
  /** A list of vulnerability alerts that are on this repository. */
  readonly vulnerabilityAlerts: Maybe<Github_RepositoryVulnerabilityAlertConnection>;
  /** A list of users watching the repository. */
  readonly watchers: Github_UserConnection;
};


/** A repository contains the content for a project. */
type Github_Repository_assignableUsersArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_branchProtectionRulesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_collaboratorsArgs = {
  affiliation: Maybe<Github_CollaboratorAffiliation>;
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_commitCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_deployKeysArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_deploymentsArgs = {
  environments: Maybe<ReadonlyArray<Scalars['String']>>;
  orderBy?: Maybe<Github_DeploymentOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
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


/** A repository contains the content for a project. */
type Github_Repository_issueArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
type Github_Repository_issueOrPullRequestArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
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


/** A repository contains the content for a project. */
type Github_Repository_labelArgs = {
  name: Scalars['String'];
};


/** A repository contains the content for a project. */
type Github_Repository_labelsArgs = {
  orderBy?: Maybe<Github_LabelOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
};


/** A repository contains the content for a project. */
type Github_Repository_languagesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_LanguageOrder>;
};


/** A repository contains the content for a project. */
type Github_Repository_mentionableUsersArgs = {
  query: Maybe<Scalars['String']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_milestoneArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
type Github_Repository_milestonesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  states: Maybe<ReadonlyArray<Github_MilestoneState>>;
  orderBy: Maybe<Github_MilestoneOrder>;
  query: Maybe<Scalars['String']>;
};


/** A repository contains the content for a project. */
type Github_Repository_objectArgs = {
  oid: Maybe<Scalars['Github_GitObjectID']>;
  expression: Maybe<Scalars['String']>;
};


/** A repository contains the content for a project. */
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


/** A repository contains the content for a project. */
type Github_Repository_projectArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
type Github_Repository_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_pullRequestArgs = {
  number: Scalars['Int'];
};


/** A repository contains the content for a project. */
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


/** A repository contains the content for a project. */
type Github_Repository_refArgs = {
  qualifiedName: Scalars['String'];
};


/** A repository contains the content for a project. */
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


/** A repository contains the content for a project. */
type Github_Repository_releaseArgs = {
  tagName: Scalars['String'];
};


/** A repository contains the content for a project. */
type Github_Repository_releasesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_ReleaseOrder>;
};


/** A repository contains the content for a project. */
type Github_Repository_repositoryTopicsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_shortDescriptionHTMLArgs = {
  limit?: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};


/** A repository contains the content for a project. */
type Github_Repository_submodulesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_vulnerabilityAlertsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A repository contains the content for a project. */
type Github_Repository_watchersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The affiliation of a user to a repository */
enum Github_RepositoryAffiliation {
  /** Repositories that are owned by the authenticated user. */
  OWNER = 'OWNER',
  /** Repositories that the user has been added to as a collaborator. */
  COLLABORATOR = 'COLLABORATOR',
  /**
   * Repositories that the user has access to through being a member of an
   * organization. This includes every repository on every team that the user is on.
   */
  ORGANIZATION_MEMBER = 'ORGANIZATION_MEMBER'
}

/** Metadata for an audit entry with action repo.* */
type Github_RepositoryAuditEntryData = {
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
};

/** The connection type for User. */
type Github_RepositoryCollaboratorConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryCollaboratorEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a user who is a collaborator of a repository. */
type Github_RepositoryCollaboratorEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  readonly node: Github_User;
  /**
   * The permission the user has on the repository.
   * 
   * **Upcoming Change on 2020-10-01 UTC**
   * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
   * **Reason:** This field may return additional values
   */
  readonly permission: Github_RepositoryPermission;
  /** A list of sources for the user's access to the repository. */
  readonly permissionSources: Maybe<ReadonlyArray<Github_PermissionSource>>;
};

/** A list of repositories owned by the subject. */
type Github_RepositoryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Repository>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
  /** The total size in kilobytes of all repositories in the connection. */
  readonly totalDiskUsage: Scalars['Int'];
};

/** The reason a repository is listed as 'contributed'. */
enum Github_RepositoryContributionType {
  /** Created a commit */
  COMMIT = 'COMMIT',
  /** Created an issue */
  ISSUE = 'ISSUE',
  /** Created a pull request */
  PULL_REQUEST = 'PULL_REQUEST',
  /** Created the repository */
  REPOSITORY = 'REPOSITORY',
  /** Reviewed a pull request */
  PULL_REQUEST_REVIEW = 'PULL_REQUEST_REVIEW'
}

/** An edge in a connection. */
type Github_RepositoryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Repository>;
};

/** A subset of repository info. */
type Github_RepositoryInfo = {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The description of the repository. */
  readonly description: Maybe<Scalars['String']>;
  /** The description of the repository rendered to HTML. */
  readonly descriptionHTML: Scalars['Github_HTML'];
  /** Returns how many forks there are of this repository in the whole network. */
  readonly forkCount: Scalars['Int'];
  /** Indicates if the repository has issues feature enabled. */
  readonly hasIssuesEnabled: Scalars['Boolean'];
  /** Indicates if the repository has the Projects feature enabled. */
  readonly hasProjectsEnabled: Scalars['Boolean'];
  /** Indicates if the repository has wiki feature enabled. */
  readonly hasWikiEnabled: Scalars['Boolean'];
  /** The repository's URL. */
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  /** Indicates if the repository is unmaintained. */
  readonly isArchived: Scalars['Boolean'];
  /** Identifies if the repository is a fork. */
  readonly isFork: Scalars['Boolean'];
  /** Indicates if the repository has been locked or not. */
  readonly isLocked: Scalars['Boolean'];
  /** Identifies if the repository is a mirror. */
  readonly isMirror: Scalars['Boolean'];
  /** Identifies if the repository is private. */
  readonly isPrivate: Scalars['Boolean'];
  /** Identifies if the repository is a template that can be used to generate new repositories. */
  readonly isTemplate: Scalars['Boolean'];
  /** The license associated with the repository */
  readonly licenseInfo: Maybe<Github_License>;
  /** The reason the repository has been locked. */
  readonly lockReason: Maybe<Github_RepositoryLockReason>;
  /** The repository's original mirror URL. */
  readonly mirrorUrl: Maybe<Scalars['Github_URI']>;
  /** The name of the repository. */
  readonly name: Scalars['String'];
  /** The repository's name with owner. */
  readonly nameWithOwner: Scalars['String'];
  /** The image used to represent this repository in Open Graph data. */
  readonly openGraphImageUrl: Scalars['Github_URI'];
  /** The User owner of the repository. */
  readonly owner: Github_RepositoryOwner;
  /** Identifies when the repository was last pushed to. */
  readonly pushedAt: Maybe<Scalars['Github_DateTime']>;
  /** The HTTP path for this repository */
  readonly resourcePath: Scalars['Github_URI'];
  /** A description of the repository, rendered to HTML without any links in it. */
  readonly shortDescriptionHTML: Scalars['Github_HTML'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this repository */
  readonly url: Scalars['Github_URI'];
  /** Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar. */
  readonly usesCustomOpenGraphImage: Scalars['Boolean'];
};


/** A subset of repository info. */
type Github_RepositoryInfo_shortDescriptionHTMLArgs = {
  limit?: Maybe<Scalars['Int']>;
};

/** An invitation for a user to be added to a repository. */
type Github_RepositoryInvitation = Github_Node & {
  /** The email address that received the invitation. */
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The user who received the invitation. */
  readonly invitee: Maybe<Github_User>;
  /** The user who created the invitation. */
  readonly inviter: Github_User;
  /**
   * The permission granted on this repository by this invitation.
   * 
   * **Upcoming Change on 2020-10-01 UTC**
   * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
   * **Reason:** This field may return additional values
   */
  readonly permission: Github_RepositoryPermission;
  /** The Repository the user is invited to. */
  readonly repository: Maybe<Github_RepositoryInfo>;
};

/** The connection type for RepositoryInvitation. */
type Github_RepositoryInvitationConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryInvitationEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_RepositoryInvitation>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_RepositoryInvitationEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_RepositoryInvitation>;
};

/** Ordering options for repository invitation connections. */
type Github_RepositoryInvitationOrder = {
  /** The field to order repository invitations by. */
  readonly field: Github_RepositoryInvitationOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which repository invitation connections can be ordered. */
enum Github_RepositoryInvitationOrderField {
  /** Order repository invitations by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order repository invitations by invitee login */
  INVITEE_LOGIN = 'INVITEE_LOGIN'
}

/** The possible reasons a given repository could be in a locked state. */
enum Github_RepositoryLockReason {
  /** The repository is locked due to a move. */
  MOVING = 'MOVING',
  /** The repository is locked due to a billing related reason. */
  BILLING = 'BILLING',
  /** The repository is locked due to a rename. */
  RENAME = 'RENAME',
  /** The repository is locked due to a migration. */
  MIGRATING = 'MIGRATING'
}

/** Represents a object that belongs to a repository. */
type Github_RepositoryNode = {
  /** The repository associated with this node. */
  readonly repository: Github_Repository;
};

/** Ordering options for repository connections */
type Github_RepositoryOrder = {
  /** The field to order repositories by. */
  readonly field: Github_RepositoryOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which repository connections can be ordered. */
enum Github_RepositoryOrderField {
  /** Order repositories by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order repositories by update time */
  UPDATED_AT = 'UPDATED_AT',
  /** Order repositories by push time */
  PUSHED_AT = 'PUSHED_AT',
  /** Order repositories by name */
  NAME = 'NAME',
  /** Order repositories by number of stargazers */
  STARGAZERS = 'STARGAZERS'
}

/** Represents an owner of a Repository. */
type Github_RepositoryOwner = {
  /** A URL pointing to the owner's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  /** The username used to login. */
  readonly login: Scalars['String'];
  /** A list of repositories that the user owns. */
  readonly repositories: Github_RepositoryConnection;
  /** Find Repository. */
  readonly repository: Maybe<Github_Repository>;
  /** The HTTP URL for the owner. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for the owner. */
  readonly url: Scalars['Github_URI'];
};


/** Represents an owner of a Repository. */
type Github_RepositoryOwner_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


/** Represents an owner of a Repository. */
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


/** Represents an owner of a Repository. */
type Github_RepositoryOwner_repositoryArgs = {
  name: Scalars['String'];
};

/** The access level to a repository */
enum Github_RepositoryPermission {
  /**
   * Can read, clone, and push to this repository. Can also manage issues, pull
   * requests, and repository settings, including adding collaborators
   */
  ADMIN = 'ADMIN',
  /** Can read, clone, and push to this repository. They can also manage issues, pull requests, and some repository settings */
  MAINTAIN = 'MAINTAIN',
  /** Can read, clone, and push to this repository. Can also manage issues and pull requests */
  WRITE = 'WRITE',
  /** Can read and clone this repository. Can also manage issues and pull requests */
  TRIAGE = 'TRIAGE',
  /** Can read and clone this repository. Can also open and comment on issues and pull requests */
  READ = 'READ'
}

/** The privacy of a repository */
enum Github_RepositoryPrivacy {
  /** Public */
  PUBLIC = 'PUBLIC',
  /** Private */
  PRIVATE = 'PRIVATE'
}

/** A repository-topic connects a repository to a topic. */
type Github_RepositoryTopic = Github_Node & Github_UniformResourceLocatable & {
  readonly id: Scalars['ID'];
  /** The HTTP path for this repository-topic. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The topic. */
  readonly topic: Github_Topic;
  /** The HTTP URL for this repository-topic. */
  readonly url: Scalars['Github_URI'];
};

/** The connection type for RepositoryTopic. */
type Github_RepositoryTopicConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryTopicEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_RepositoryTopic>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_RepositoryTopicEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_RepositoryTopic>;
};

/** The repository's visibility level. */
enum Github_RepositoryVisibility {
  /** The repository is visible only to those with explicit access. */
  PRIVATE = 'PRIVATE',
  /** The repository is visible to everyone. */
  PUBLIC = 'PUBLIC',
  /** The repository is visible only to users in the same business. */
  INTERNAL = 'INTERNAL'
}

/** Audit log entry for a repository_visibility_change.disable event. */
type Github_RepositoryVisibilityChangeDisableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a repository_visibility_change.enable event. */
type Github_RepositoryVisibilityChangeEnableAuditEntry = Github_Node & Github_AuditEntry & Github_EnterpriseAuditEntryData & Github_OrganizationAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  /** The HTTP path for this enterprise. */
  readonly enterpriseResourcePath: Maybe<Scalars['Github_URI']>;
  /** The slug of the enterprise. */
  readonly enterpriseSlug: Maybe<Scalars['String']>;
  /** The HTTP URL for this enterprise. */
  readonly enterpriseUrl: Maybe<Scalars['Github_URI']>;
  readonly id: Scalars['ID'];
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** A alert for a repository with an affected vulnerability. */
type Github_RepositoryVulnerabilityAlert = Github_Node & Github_RepositoryNode & {
  /** When was the alert created? */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The reason the alert was dismissed */
  readonly dismissReason: Maybe<Scalars['String']>;
  /** When was the alert dimissed? */
  readonly dismissedAt: Maybe<Scalars['Github_DateTime']>;
  /** The user who dismissed the alert */
  readonly dismisser: Maybe<Github_User>;
  readonly id: Scalars['ID'];
  /** The associated repository */
  readonly repository: Github_Repository;
  /** The associated security advisory */
  readonly securityAdvisory: Maybe<Github_SecurityAdvisory>;
  /** The associated security vulnerablity */
  readonly securityVulnerability: Maybe<Github_SecurityVulnerability>;
  /** The vulnerable manifest filename */
  readonly vulnerableManifestFilename: Scalars['String'];
  /** The vulnerable manifest path */
  readonly vulnerableManifestPath: Scalars['String'];
  /** The vulnerable requirements */
  readonly vulnerableRequirements: Maybe<Scalars['String']>;
};

/** The connection type for RepositoryVulnerabilityAlert. */
type Github_RepositoryVulnerabilityAlertConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_RepositoryVulnerabilityAlertEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_RepositoryVulnerabilityAlert>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_RepositoryVulnerabilityAlertEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_RepositoryVulnerabilityAlert>;
};

/** Types that can be requested reviewers. */
type Github_RequestedReviewer = Github_Mannequin | Github_Team | Github_User;

/** Autogenerated input type of RequestReviews */
type Github_RequestReviewsInput = {
  /** The Node ID of the pull request to modify. */
  readonly pullRequestId: Scalars['ID'];
  /** The Node IDs of the user to request. */
  readonly userIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** The Node IDs of the team to request. */
  readonly teamIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** Add users to the set rather than replace. */
  readonly union: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of RequestReviews */
type Github_RequestReviewsPayload = {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The pull request that is getting requests. */
  readonly pullRequest: Maybe<Github_PullRequest>;
  /** The edge from the pull request to the requested reviewers. */
  readonly requestedReviewersEdge: Maybe<Github_UserEdge>;
};

/** Autogenerated input type of ResolveReviewThread */
type Github_ResolveReviewThreadInput = {
  /** The ID of the thread to resolve */
  readonly threadId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of ResolveReviewThread */
type Github_ResolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The thread to resolve. */
  readonly thread: Maybe<Github_PullRequestReviewThread>;
};

/** Represents a private contribution a user made on GitHub. */
type Github_RestrictedContribution = Github_Contribution & {
  /**
   * Whether this contribution is associated with a record you do not have access to. For
   * example, your own 'first issue' contribution may have been made on a repository you can no
   * longer access.
   */
  readonly isRestricted: Scalars['Boolean'];
  /** When this contribution was made. */
  readonly occurredAt: Scalars['Github_DateTime'];
  /** The HTTP path for this contribution. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this contribution. */
  readonly url: Scalars['Github_URI'];
  /** The user who made this contribution. */
  readonly user: Github_User;
};

/** A team or user who has the ability to dismiss a review on a protected branch. */
type Github_ReviewDismissalAllowance = Github_Node & {
  /** The actor that can dismiss. */
  readonly actor: Maybe<Github_ReviewDismissalAllowanceActor>;
  /** Identifies the branch protection rule associated with the allowed user or team. */
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  readonly id: Scalars['ID'];
};

/** Types that can be an actor. */
type Github_ReviewDismissalAllowanceActor = Github_Team | Github_User;

/** The connection type for ReviewDismissalAllowance. */
type Github_ReviewDismissalAllowanceConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReviewDismissalAllowanceEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ReviewDismissalAllowance>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_ReviewDismissalAllowanceEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_ReviewDismissalAllowance>;
};

/** Represents a 'review_dismissed' event on a given issue or pull request. */
type Github_ReviewDismissedEvent = Github_Node & Github_UniformResourceLocatable & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** Identifies the optional message associated with the 'review_dismissed' event. */
  readonly dismissalMessage: Maybe<Scalars['String']>;
  /** Identifies the optional message associated with the event, rendered to HTML. */
  readonly dismissalMessageHTML: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** Identifies the previous state of the review with the 'review_dismissed' event. */
  readonly previousReviewState: Github_PullRequestReviewState;
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** Identifies the commit which caused the review to become stale. */
  readonly pullRequestCommit: Maybe<Github_PullRequestCommit>;
  /** The HTTP path for this review dismissed event. */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the review associated with the 'review_dismissed' event. */
  readonly review: Maybe<Github_PullRequestReview>;
  /** The HTTP URL for this review dismissed event. */
  readonly url: Scalars['Github_URI'];
};

/** A request for a user to review a pull request. */
type Github_ReviewRequest = Github_Node & {
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** Identifies the pull request associated with this review request. */
  readonly pullRequest: Github_PullRequest;
  /** The reviewer that is requested. */
  readonly requestedReviewer: Maybe<Github_RequestedReviewer>;
};

/** The connection type for ReviewRequest. */
type Github_ReviewRequestConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_ReviewRequestEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_ReviewRequest>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents an 'review_requested' event on a given pull request. */
type Github_ReviewRequestedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** Identifies the reviewer whose review was requested. */
  readonly requestedReviewer: Maybe<Github_RequestedReviewer>;
};

/** An edge in a connection. */
type Github_ReviewRequestEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_ReviewRequest>;
};

/** Represents an 'review_request_removed' event on a given pull request. */
type Github_ReviewRequestRemovedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** PullRequest referenced by event. */
  readonly pullRequest: Github_PullRequest;
  /** Identifies the reviewer whose review request was removed. */
  readonly requestedReviewer: Maybe<Github_RequestedReviewer>;
};

/**
 * A hovercard context with a message describing the current code review state of the pull
 * request.
 */
type Github_ReviewStatusHovercardContext = Github_HovercardContext & {
  /** A string describing this context */
  readonly message: Scalars['String'];
  /** An octicon to accompany this context */
  readonly octicon: Scalars['String'];
  /** The current status of the pull request with respect to code review. */
  readonly reviewDecision: Maybe<Github_PullRequestReviewDecision>;
};

/** The possible digest algorithms used to sign SAML requests for an identity provider. */
enum Github_SamlDigestAlgorithm {
  /** SHA1 */
  SHA1 = 'SHA1',
  /** SHA256 */
  SHA256 = 'SHA256',
  /** SHA384 */
  SHA384 = 'SHA384',
  /** SHA512 */
  SHA512 = 'SHA512'
}

/** The possible signature algorithms used to sign SAML requests for a Identity Provider. */
enum Github_SamlSignatureAlgorithm {
  /** RSA-SHA1 */
  RSA_SHA1 = 'RSA_SHA1',
  /** RSA-SHA256 */
  RSA_SHA256 = 'RSA_SHA256',
  /** RSA-SHA384 */
  RSA_SHA384 = 'RSA_SHA384',
  /** RSA-SHA512 */
  RSA_SHA512 = 'RSA_SHA512'
}

/** A Saved Reply is text a user can use to reply quickly. */
type Github_SavedReply = Github_Node & {
  /** The body of the saved reply. */
  readonly body: Scalars['String'];
  /** The saved reply body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  /** The title of the saved reply. */
  readonly title: Scalars['String'];
  /** The user that saved this reply. */
  readonly user: Maybe<Github_Actor>;
};

/** The connection type for SavedReply. */
type Github_SavedReplyConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SavedReplyEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SavedReply>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_SavedReplyEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_SavedReply>;
};

/** Ordering options for saved reply connections. */
type Github_SavedReplyOrder = {
  /** The field to order saved replies by. */
  readonly field: Github_SavedReplyOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which saved reply connections can be ordered. */
enum Github_SavedReplyOrderField {
  /** Order saved reply by when they were updated. */
  UPDATED_AT = 'UPDATED_AT'
}

/** The results of a search. */
type Github_SearchResultItem = Github_App | Github_Issue | Github_MarketplaceListing | Github_Organization | Github_PullRequest | Github_Repository | Github_User;

/** A list of results that matched against a search query. */
type Github_SearchResultItemConnection = {
  /** The number of pieces of code that matched the search query. */
  readonly codeCount: Scalars['Int'];
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SearchResultItemEdge>>>;
  /** The number of issues that matched the search query. */
  readonly issueCount: Scalars['Int'];
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SearchResultItem>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** The number of repositories that matched the search query. */
  readonly repositoryCount: Scalars['Int'];
  /** The number of users that matched the search query. */
  readonly userCount: Scalars['Int'];
  /** The number of wiki pages that matched the search query. */
  readonly wikiCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_SearchResultItemEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_SearchResultItem>;
  /** Text matches on the result found. */
  readonly textMatches: Maybe<ReadonlyArray<Maybe<Github_TextMatch>>>;
};

/** Represents the individual results of a search. */
enum Github_SearchType {
  /** Returns results matching issues in repositories. */
  ISSUE = 'ISSUE',
  /** Returns results matching repositories. */
  REPOSITORY = 'REPOSITORY',
  /** Returns results matching users and organizations on GitHub. */
  USER = 'USER'
}

/** A GitHub Security Advisory */
type Github_SecurityAdvisory = Github_Node & {
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** This is a long plaintext description of the advisory */
  readonly description: Scalars['String'];
  /** The GitHub Security Advisory ID */
  readonly ghsaId: Scalars['String'];
  readonly id: Scalars['ID'];
  /** A list of identifiers for this advisory */
  readonly identifiers: ReadonlyArray<Github_SecurityAdvisoryIdentifier>;
  /** The organization that originated the advisory */
  readonly origin: Scalars['String'];
  /** The permalink for the advisory */
  readonly permalink: Maybe<Scalars['Github_URI']>;
  /** When the advisory was published */
  readonly publishedAt: Scalars['Github_DateTime'];
  /** A list of references for this advisory */
  readonly references: ReadonlyArray<Github_SecurityAdvisoryReference>;
  /** The severity of the advisory */
  readonly severity: Github_SecurityAdvisorySeverity;
  /** A short plaintext summary of the advisory */
  readonly summary: Scalars['String'];
  /** When the advisory was last updated */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** Vulnerabilities associated with this Advisory */
  readonly vulnerabilities: Github_SecurityVulnerabilityConnection;
  /** When the advisory was withdrawn, if it has been withdrawn */
  readonly withdrawnAt: Maybe<Scalars['Github_DateTime']>;
};


/** A GitHub Security Advisory */
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

/** The connection type for SecurityAdvisory. */
type Github_SecurityAdvisoryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SecurityAdvisoryEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SecurityAdvisory>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** The possible ecosystems of a security vulnerability's package. */
enum Github_SecurityAdvisoryEcosystem {
  /** Ruby gems hosted at RubyGems.org */
  RUBYGEMS = 'RUBYGEMS',
  /** JavaScript packages hosted at npmjs.com */
  NPM = 'NPM',
  /** Python packages hosted at PyPI.org */
  PIP = 'PIP',
  /** Java artifacts hosted at the Maven central repository */
  MAVEN = 'MAVEN',
  /** .NET packages hosted at the NuGet Gallery */
  NUGET = 'NUGET',
  /** PHP packages hosted at packagist.org */
  COMPOSER = 'COMPOSER'
}

/** An edge in a connection. */
type Github_SecurityAdvisoryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_SecurityAdvisory>;
};

/** A GitHub Security Advisory Identifier */
type Github_SecurityAdvisoryIdentifier = {
  /** The identifier type, e.g. GHSA, CVE */
  readonly type: Scalars['String'];
  /** The identifier */
  readonly value: Scalars['String'];
};

/** An advisory identifier to filter results on. */
type Github_SecurityAdvisoryIdentifierFilter = {
  /** The identifier type. */
  readonly type: Github_SecurityAdvisoryIdentifierType;
  /** The identifier string. Supports exact or partial matching. */
  readonly value: Scalars['String'];
};

/** Identifier formats available for advisories. */
enum Github_SecurityAdvisoryIdentifierType {
  /** Common Vulnerabilities and Exposures Identifier. */
  CVE = 'CVE',
  /** GitHub Security Advisory ID. */
  GHSA = 'GHSA'
}

/** Ordering options for security advisory connections */
type Github_SecurityAdvisoryOrder = {
  /** The field to order security advisories by. */
  readonly field: Github_SecurityAdvisoryOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which security advisory connections can be ordered. */
enum Github_SecurityAdvisoryOrderField {
  /** Order advisories by publication time */
  PUBLISHED_AT = 'PUBLISHED_AT',
  /** Order advisories by update time */
  UPDATED_AT = 'UPDATED_AT'
}

/** An individual package */
type Github_SecurityAdvisoryPackage = {
  /** The ecosystem the package belongs to, e.g. RUBYGEMS, NPM */
  readonly ecosystem: Github_SecurityAdvisoryEcosystem;
  /** The package name */
  readonly name: Scalars['String'];
};

/** An individual package version */
type Github_SecurityAdvisoryPackageVersion = {
  /** The package name or version */
  readonly identifier: Scalars['String'];
};

/** A GitHub Security Advisory Reference */
type Github_SecurityAdvisoryReference = {
  /** A publicly accessible reference */
  readonly url: Scalars['Github_URI'];
};

/** Severity of the vulnerability. */
enum Github_SecurityAdvisorySeverity {
  /** Low. */
  LOW = 'LOW',
  /** Moderate. */
  MODERATE = 'MODERATE',
  /** High. */
  HIGH = 'HIGH',
  /** Critical. */
  CRITICAL = 'CRITICAL'
}

/** An individual vulnerability within an Advisory */
type Github_SecurityVulnerability = {
  /** The Advisory associated with this Vulnerability */
  readonly advisory: Github_SecurityAdvisory;
  /** The first version containing a fix for the vulnerability */
  readonly firstPatchedVersion: Maybe<Github_SecurityAdvisoryPackageVersion>;
  /** A description of the vulnerable package */
  readonly package: Github_SecurityAdvisoryPackage;
  /** The severity of the vulnerability within this package */
  readonly severity: Github_SecurityAdvisorySeverity;
  /** When the vulnerability was last updated */
  readonly updatedAt: Scalars['Github_DateTime'];
  /**
   * A string that describes the vulnerable package versions.
   * This string follows a basic syntax with a few forms.
   * + `= 0.2.0` denotes a single vulnerable version.
   * + `<= 1.0.8` denotes a version range up to and including the specified version
   * + `< 0.1.11` denotes a version range up to, but excluding, the specified version
   * + `>= 4.3.0, < 4.3.5` denotes a version range with a known minimum and maximum version.
   * + `>= 0.0.1` denotes a version range with a known minimum, but no known maximum
   */
  readonly vulnerableVersionRange: Scalars['String'];
};

/** The connection type for SecurityVulnerability. */
type Github_SecurityVulnerabilityConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SecurityVulnerabilityEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SecurityVulnerability>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_SecurityVulnerabilityEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_SecurityVulnerability>;
};

/** Ordering options for security vulnerability connections */
type Github_SecurityVulnerabilityOrder = {
  /** The field to order security vulnerabilities by. */
  readonly field: Github_SecurityVulnerabilityOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which security vulnerability connections can be ordered. */
enum Github_SecurityVulnerabilityOrderField {
  /** Order vulnerability by update time */
  UPDATED_AT = 'UPDATED_AT'
}

/** Autogenerated input type of SetEnterpriseIdentityProvider */
type Github_SetEnterpriseIdentityProviderInput = {
  /** The ID of the enterprise on which to set an identity provider. */
  readonly enterpriseId: Scalars['ID'];
  /** The URL endpoint for the identity provider's SAML SSO. */
  readonly ssoUrl: Scalars['Github_URI'];
  /** The Issuer Entity ID for the SAML identity provider */
  readonly issuer: Maybe<Scalars['String']>;
  /** The x509 certificate used by the identity provider to sign assertions and responses. */
  readonly idpCertificate: Scalars['String'];
  /** The signature algorithm used to sign SAML requests for the identity provider. */
  readonly signatureMethod: Github_SamlSignatureAlgorithm;
  /** The digest algorithm used to sign SAML requests for the identity provider. */
  readonly digestMethod: Github_SamlDigestAlgorithm;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SetEnterpriseIdentityProvider */
type Github_SetEnterpriseIdentityProviderPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The identity provider for the enterprise. */
  readonly identityProvider: Maybe<Github_EnterpriseIdentityProvider>;
};

/** Represents an S/MIME signature on a Commit or Tag. */
type Github_SmimeSignature = Github_GitSignature & {
  /** Email used to sign this object. */
  readonly email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  readonly isValid: Scalars['Boolean'];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  readonly payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  readonly signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  readonly signer: Maybe<Github_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  readonly state: Github_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

/** Entites that can sponsor others via GitHub Sponsors */
type Github_Sponsor = Github_Organization | Github_User;

/** Entities that can be sponsored through GitHub Sponsors */
type Github_Sponsorable = {
  /** The GitHub Sponsors listing for this user. */
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  /** This object's sponsorships as the maintainer. */
  readonly sponsorshipsAsMaintainer: Github_SponsorshipConnection;
  /** This object's sponsorships as the sponsor. */
  readonly sponsorshipsAsSponsor: Github_SponsorshipConnection;
};


/** Entities that can be sponsored through GitHub Sponsors */
type Github_Sponsorable_sponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


/** Entities that can be sponsored through GitHub Sponsors */
type Github_Sponsorable_sponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};

/** A sponsorship relationship between a sponsor and a maintainer */
type Github_Sponsorship = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /**
   * The entity that is being sponsored
   * @deprecated `Sponsorship.maintainer` will be removed. Use `Sponsorship.sponsorable` instead. Removal on 2020-04-01 UTC.
   */
  readonly maintainer: Github_User;
  /** The privacy level for this sponsorship. */
  readonly privacyLevel: Github_SponsorshipPrivacy;
  /**
   * The user that is sponsoring. Returns null if the sponsorship is private or if sponsor is not a user.
   * @deprecated `Sponsorship.sponsor` will be removed. Use `Sponsorship.sponsorEntity` instead. Removal on 2020-10-01 UTC.
   */
  readonly sponsor: Maybe<Github_User>;
  /** The user or organization that is sponsoring. Returns null if the sponsorship is private. */
  readonly sponsorEntity: Maybe<Github_Sponsor>;
  /** The entity that is being sponsored */
  readonly sponsorable: Github_Sponsorable;
  /** The associated sponsorship tier */
  readonly tier: Maybe<Github_SponsorsTier>;
};

/** The connection type for Sponsorship. */
type Github_SponsorshipConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SponsorshipEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Sponsorship>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_SponsorshipEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Sponsorship>;
};

/** Ordering options for sponsorship connections. */
type Github_SponsorshipOrder = {
  /** The field to order sponsorship by. */
  readonly field: Github_SponsorshipOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which sponsorship connections can be ordered. */
enum Github_SponsorshipOrderField {
  /** Order sponsorship by creation time. */
  CREATED_AT = 'CREATED_AT'
}

/** The privacy of a sponsorship */
enum Github_SponsorshipPrivacy {
  /** Public */
  PUBLIC = 'PUBLIC',
  /** Private */
  PRIVATE = 'PRIVATE'
}

/** A GitHub Sponsors listing. */
type Github_SponsorsListing = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The full description of the listing. */
  readonly fullDescription: Scalars['String'];
  /** The full description of the listing rendered to HTML. */
  readonly fullDescriptionHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  /** The listing's full name. */
  readonly name: Scalars['String'];
  /** The short description of the listing. */
  readonly shortDescription: Scalars['String'];
  /** The short name of the listing. */
  readonly slug: Scalars['String'];
  /** The published tiers for this GitHub Sponsors listing. */
  readonly tiers: Maybe<Github_SponsorsTierConnection>;
};


/** A GitHub Sponsors listing. */
type Github_SponsorsListing_tiersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_SponsorsTierOrder>;
};

/** A GitHub Sponsors tier associated with a GitHub Sponsors listing. */
type Github_SponsorsTier = Github_Node & {
  /** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
  readonly adminInfo: Maybe<Github_SponsorsTierAdminInfo>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The description of the tier. */
  readonly description: Scalars['String'];
  /** The tier description rendered to HTML */
  readonly descriptionHTML: Scalars['Github_HTML'];
  readonly id: Scalars['ID'];
  /** How much this tier costs per month in cents. */
  readonly monthlyPriceInCents: Scalars['Int'];
  /** How much this tier costs per month in dollars. */
  readonly monthlyPriceInDollars: Scalars['Int'];
  /** The name of the tier. */
  readonly name: Scalars['String'];
  /** The sponsors listing that this tier belongs to. */
  readonly sponsorsListing: Github_SponsorsListing;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
type Github_SponsorsTierAdminInfo = {
  /** The sponsorships associated with this tier. */
  readonly sponsorships: Github_SponsorshipConnection;
};


/** SponsorsTier information only visible to users that can administer the associated Sponsors listing. */
type Github_SponsorsTierAdminInfo_sponsorshipsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};

/** The connection type for SponsorsTier. */
type Github_SponsorsTierConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SponsorsTierEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_SponsorsTier>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_SponsorsTierEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_SponsorsTier>;
};

/** Ordering options for Sponsors tiers connections. */
type Github_SponsorsTierOrder = {
  /** The field to order tiers by. */
  readonly field: Github_SponsorsTierOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which Sponsors tiers connections can be ordered. */
enum Github_SponsorsTierOrderField {
  /** Order tiers by creation time. */
  CREATED_AT = 'CREATED_AT',
  /** Order tiers by their monthly price in cents */
  MONTHLY_PRICE_IN_CENTS = 'MONTHLY_PRICE_IN_CENTS'
}

/** The connection type for User. */
type Github_StargazerConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_StargazerEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a user that's starred a repository. */
type Github_StargazerEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  readonly node: Github_User;
  /** Identifies when the item was starred. */
  readonly starredAt: Scalars['Github_DateTime'];
};

/** Ways in which star connections can be ordered. */
type Github_StarOrder = {
  /** The field in which to order nodes by. */
  readonly field: Github_StarOrderField;
  /** The direction in which to order nodes. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which star connections can be ordered. */
enum Github_StarOrderField {
  /** Allows ordering a list of stars by when they were created. */
  STARRED_AT = 'STARRED_AT'
}

/** Things that can be starred. */
type Github_Starrable = {
  readonly id: Scalars['ID'];
  /** A list of users who have starred this starrable. */
  readonly stargazers: Github_StargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  readonly viewerHasStarred: Scalars['Boolean'];
};


/** Things that can be starred. */
type Github_Starrable_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};

/** The connection type for Repository. */
type Github_StarredRepositoryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_StarredRepositoryEdge>>>;
  /** Is the list of stars for this user truncated? This is true for users that have many stars. */
  readonly isOverLimit: Scalars['Boolean'];
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Repository>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a starred repository. */
type Github_StarredRepositoryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  readonly node: Github_Repository;
  /** Identifies when the item was starred. */
  readonly starredAt: Scalars['Github_DateTime'];
};

/** Represents a commit status. */
type Github_Status = Github_Node & {
  /** The commit this status is attached to. */
  readonly commit: Maybe<Github_Commit>;
  /** Looks up an individual status context by context name. */
  readonly context: Maybe<Github_StatusContext>;
  /** The individual status contexts for this commit. */
  readonly contexts: ReadonlyArray<Github_StatusContext>;
  readonly id: Scalars['ID'];
  /** The combined commit status. */
  readonly state: Github_StatusState;
};


/** Represents a commit status. */
type Github_Status_contextArgs = {
  name: Scalars['String'];
};

/** Represents the rollup for both the check runs and status for a commit. */
type Github_StatusCheckRollup = Github_Node & {
  /** The commit the status and check runs are attached to. */
  readonly commit: Maybe<Github_Commit>;
  /** A list of status contexts and check runs for this commit. */
  readonly contexts: Github_StatusCheckRollupContextConnection;
  readonly id: Scalars['ID'];
  /** The combined status for the commit. */
  readonly state: Github_StatusState;
};


/** Represents the rollup for both the check runs and status for a commit. */
type Github_StatusCheckRollup_contextsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** Types that can be inside a StatusCheckRollup context. */
type Github_StatusCheckRollupContext = Github_StatusContext;

/** The connection type for StatusCheckRollupContext. */
type Github_StatusCheckRollupContextConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_StatusCheckRollupContextEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_StatusCheckRollupContext>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_StatusCheckRollupContextEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_StatusCheckRollupContext>;
};

/** Represents an individual commit status context */
type Github_StatusContext = Github_Node & {
  /** The avatar of the OAuth application or the user that created the status */
  readonly avatarUrl: Maybe<Scalars['Github_URI']>;
  /** This commit this status context is attached to. */
  readonly commit: Maybe<Github_Commit>;
  /** The name of this status context. */
  readonly context: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The actor who created this status context. */
  readonly creator: Maybe<Github_Actor>;
  /** The description for this status context. */
  readonly description: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  /** The state of this status context. */
  readonly state: Github_StatusState;
  /** The URL for this status context. */
  readonly targetUrl: Maybe<Scalars['Github_URI']>;
};


/** Represents an individual commit status context */
type Github_StatusContext_avatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};

/** The possible commit status states. */
enum Github_StatusState {
  /** Status is expected. */
  EXPECTED = 'EXPECTED',
  /** Status is errored. */
  ERROR = 'ERROR',
  /** Status is failing. */
  FAILURE = 'FAILURE',
  /** Status is pending. */
  PENDING = 'PENDING',
  /** Status is successful. */
  SUCCESS = 'SUCCESS'
}

/** Autogenerated input type of SubmitPullRequestReview */
type Github_SubmitPullRequestReviewInput = {
  /** The Pull Request ID to submit any pending reviews. */
  readonly pullRequestId: Maybe<Scalars['ID']>;
  /** The Pull Request Review ID to submit. */
  readonly pullRequestReviewId: Maybe<Scalars['ID']>;
  /** The event to send to the Pull Request Review. */
  readonly event: Github_PullRequestReviewEvent;
  /** The text field to set on the Pull Request Review. */
  readonly body: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of SubmitPullRequestReview */
type Github_SubmitPullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The submitted pull request review. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

/** A pointer to a repository at a specific revision embedded inside another repository. */
type Github_Submodule = {
  /** The branch of the upstream submodule for tracking updates */
  readonly branch: Maybe<Scalars['String']>;
  /** The git URL of the submodule repository */
  readonly gitUrl: Scalars['Github_URI'];
  /** The name of the submodule in .gitmodules */
  readonly name: Scalars['String'];
  /** The path in the superproject that this submodule is located in */
  readonly path: Scalars['String'];
  /** The commit revision of the subproject repository being tracked by the submodule */
  readonly subprojectCommitOid: Maybe<Scalars['Github_GitObjectID']>;
};

/** The connection type for Submodule. */
type Github_SubmoduleConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_SubmoduleEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Submodule>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_SubmoduleEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Submodule>;
};

/** Entities that can be subscribed to for web and email notifications. */
type Github_Subscribable = {
  readonly id: Scalars['ID'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};

/** Represents a 'subscribed' event on a given `Subscribable`. */
type Github_SubscribedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Object referenced by event. */
  readonly subscribable: Github_Subscribable;
};

/** The possible states of a subscription. */
enum Github_SubscriptionState {
  /** The User is only notified when participating or @mentioned. */
  UNSUBSCRIBED = 'UNSUBSCRIBED',
  /** The User is notified of all conversations. */
  SUBSCRIBED = 'SUBSCRIBED',
  /** The User is never notified. */
  IGNORED = 'IGNORED'
}

/** A suggestion to review a pull request based on a user's commit history and review comments. */
type Github_SuggestedReviewer = {
  /** Is this suggestion based on past commits? */
  readonly isAuthor: Scalars['Boolean'];
  /** Is this suggestion based on past review comments? */
  readonly isCommenter: Scalars['Boolean'];
  /** Identifies the user suggested to review the pull request. */
  readonly reviewer: Github_User;
};

/** Represents a Git tag. */
type Github_Tag = Github_Node & Github_GitObject & {
  /** An abbreviated version of the Git object ID */
  readonly abbreviatedOid: Scalars['String'];
  /** The HTTP path for this Git object */
  readonly commitResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this Git object */
  readonly commitUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  /** The Git tag message. */
  readonly message: Maybe<Scalars['String']>;
  /** The Git tag name. */
  readonly name: Scalars['String'];
  /** The Git object ID */
  readonly oid: Scalars['Github_GitObjectID'];
  /** The Repository the Git object belongs to */
  readonly repository: Github_Repository;
  /** Details about the tag author. */
  readonly tagger: Maybe<Github_GitActor>;
  /** The Git object the tag points to. */
  readonly target: Github_GitObject;
};

/** A team of users in an organization. */
type Github_Team = Github_Node & Github_Subscribable & Github_MemberStatusable & {
  /** A list of teams that are ancestors of this team. */
  readonly ancestors: Github_TeamConnection;
  /** A URL pointing to the team's avatar. */
  readonly avatarUrl: Maybe<Scalars['Github_URI']>;
  /** List of child teams belonging to this team */
  readonly childTeams: Github_TeamConnection;
  /** The slug corresponding to the organization and team. */
  readonly combinedSlug: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The description of the team. */
  readonly description: Maybe<Scalars['String']>;
  /** Find a team discussion by its number. */
  readonly discussion: Maybe<Github_TeamDiscussion>;
  /** A list of team discussions. */
  readonly discussions: Github_TeamDiscussionConnection;
  /** The HTTP path for team discussions */
  readonly discussionsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for team discussions */
  readonly discussionsUrl: Scalars['Github_URI'];
  /** The HTTP path for editing this team */
  readonly editTeamResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for editing this team */
  readonly editTeamUrl: Scalars['Github_URI'];
  readonly id: Scalars['ID'];
  /** A list of pending invitations for users to this team */
  readonly invitations: Maybe<Github_OrganizationInvitationConnection>;
  /** Get the status messages members of this entity have set that are either public or visible only to the organization. */
  readonly memberStatuses: Github_UserStatusConnection;
  /** A list of users who are members of this team. */
  readonly members: Github_TeamMemberConnection;
  /** The HTTP path for the team' members */
  readonly membersResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for the team' members */
  readonly membersUrl: Scalars['Github_URI'];
  /** The name of the team. */
  readonly name: Scalars['String'];
  /** The HTTP path creating a new team */
  readonly newTeamResourcePath: Scalars['Github_URI'];
  /** The HTTP URL creating a new team */
  readonly newTeamUrl: Scalars['Github_URI'];
  /** The organization that owns this team. */
  readonly organization: Github_Organization;
  /** The parent team of the team. */
  readonly parentTeam: Maybe<Github_Team>;
  /** The level of privacy the team has. */
  readonly privacy: Github_TeamPrivacy;
  /** A list of repositories this team has access to. */
  readonly repositories: Github_TeamRepositoryConnection;
  /** The HTTP path for this team's repositories */
  readonly repositoriesResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this team's repositories */
  readonly repositoriesUrl: Scalars['Github_URI'];
  /** The HTTP path for this team */
  readonly resourcePath: Scalars['Github_URI'];
  /** The slug corresponding to the team. */
  readonly slug: Scalars['String'];
  /** The HTTP path for this team's teams */
  readonly teamsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this team's teams */
  readonly teamsUrl: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this team */
  readonly url: Scalars['Github_URI'];
  /** Team is adminable by the viewer. */
  readonly viewerCanAdminister: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};


/** A team of users in an organization. */
type Github_Team_ancestorsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
type Github_Team_avatarUrlArgs = {
  size?: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
type Github_Team_childTeamsArgs = {
  orderBy: Maybe<Github_TeamOrder>;
  userLogins: Maybe<ReadonlyArray<Scalars['String']>>;
  immediateOnly?: Maybe<Scalars['Boolean']>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
type Github_Team_discussionArgs = {
  number: Scalars['Int'];
};


/** A team of users in an organization. */
type Github_Team_discussionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  isPinned: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_TeamDiscussionOrder>;
};


/** A team of users in an organization. */
type Github_Team_invitationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A team of users in an organization. */
type Github_Team_memberStatusesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_UserStatusOrder>;
};


/** A team of users in an organization. */
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


/** A team of users in an organization. */
type Github_Team_repositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  query: Maybe<Scalars['String']>;
  orderBy: Maybe<Github_TeamRepositoryOrder>;
};

/** Audit log entry for a team.add_member event. */
type Github_TeamAddMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a team.add_repository event. */
type Github_TeamAddRepositoryAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & Github_TeamAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Metadata for an audit entry with action team.* */
type Github_TeamAuditEntryData = {
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a team.change_parent_team event. */
type Github_TeamChangeParentTeamAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The new parent team. */
  readonly parentTeam: Maybe<Github_Team>;
  /** The name of the new parent team */
  readonly parentTeamName: Maybe<Scalars['String']>;
  /** The name of the former parent team */
  readonly parentTeamNameWas: Maybe<Scalars['String']>;
  /** The HTTP path for the parent team */
  readonly parentTeamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the parent team */
  readonly parentTeamUrl: Maybe<Scalars['Github_URI']>;
  /** The former parent team. */
  readonly parentTeamWas: Maybe<Github_Team>;
  /** The HTTP path for the previous parent team */
  readonly parentTeamWasResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the previous parent team */
  readonly parentTeamWasUrl: Maybe<Scalars['Github_URI']>;
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The connection type for Team. */
type Github_TeamConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Team>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A team discussion. */
type Github_TeamDiscussion = Github_Node & Github_Comment & Github_Deletable & Github_Reactable & Github_Subscribable & Github_UniformResourceLocatable & Github_Updatable & Github_UpdatableComment & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the discussion's team. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** The body as Markdown. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** Identifies the discussion body hash. */
  readonly bodyVersion: Scalars['String'];
  /** A list of comments on this discussion. */
  readonly comments: Github_TeamDiscussionCommentConnection;
  /** The HTTP path for discussion comments */
  readonly commentsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for discussion comments */
  readonly commentsUrl: Scalars['Github_URI'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** Whether or not the discussion is pinned. */
  readonly isPinned: Scalars['Boolean'];
  /** Whether or not the discussion is only visible to team members and org admins. */
  readonly isPrivate: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the discussion within its team. */
  readonly number: Scalars['Int'];
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The HTTP path for this discussion */
  readonly resourcePath: Scalars['Github_URI'];
  /** The team that defines the context of this discussion. */
  readonly team: Github_Team;
  /** The title of the discussion */
  readonly title: Scalars['String'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this discussion */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Whether or not the current viewer can pin this discussion. */
  readonly viewerCanPin: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the viewer is able to change their subscription status for the repository. */
  readonly viewerCanSubscribe: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
  /** Identifies if the viewer is watching, not watching, or ignoring the subscribable entity. */
  readonly viewerSubscription: Maybe<Github_SubscriptionState>;
};


/** A team discussion. */
type Github_TeamDiscussion_commentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_TeamDiscussionCommentOrder>;
  fromComment: Maybe<Scalars['Int']>;
};


/** A team discussion. */
type Github_TeamDiscussion_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** A team discussion. */
type Github_TeamDiscussion_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** A comment on a team discussion. */
type Github_TeamDiscussionComment = Github_Node & Github_Comment & Github_Deletable & Github_Reactable & Github_UniformResourceLocatable & Github_Updatable & Github_UpdatableComment & {
  /** The actor who authored the comment. */
  readonly author: Maybe<Github_Actor>;
  /** Author's association with the comment's team. */
  readonly authorAssociation: Github_CommentAuthorAssociation;
  /** The body as Markdown. */
  readonly body: Scalars['String'];
  /** The body rendered to HTML. */
  readonly bodyHTML: Scalars['Github_HTML'];
  /** The body rendered to text. */
  readonly bodyText: Scalars['String'];
  /** The current version of the body content. */
  readonly bodyVersion: Scalars['String'];
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Check if this comment was created via an email reply. */
  readonly createdViaEmail: Scalars['Boolean'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The discussion this comment is about. */
  readonly discussion: Github_TeamDiscussion;
  /** The actor who edited the comment. */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Check if this comment was edited and includes an edit with the creation data */
  readonly includesCreatedEdit: Scalars['Boolean'];
  /** The moment the editor made the last edit */
  readonly lastEditedAt: Maybe<Scalars['Github_DateTime']>;
  /** Identifies the comment number. */
  readonly number: Scalars['Int'];
  /** Identifies when the comment was published at. */
  readonly publishedAt: Maybe<Scalars['Github_DateTime']>;
  /** A list of reactions grouped by content left on the subject. */
  readonly reactionGroups: Maybe<ReadonlyArray<Github_ReactionGroup>>;
  /** A list of Reactions left on the Issue. */
  readonly reactions: Github_ReactionConnection;
  /** The HTTP path for this comment */
  readonly resourcePath: Scalars['Github_URI'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this comment */
  readonly url: Scalars['Github_URI'];
  /** A list of edits to this content. */
  readonly userContentEdits: Maybe<Github_UserContentEditConnection>;
  /** Check if the current viewer can delete this object. */
  readonly viewerCanDelete: Scalars['Boolean'];
  /** Can user react to this subject */
  readonly viewerCanReact: Scalars['Boolean'];
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
  /** Did the viewer author this comment. */
  readonly viewerDidAuthor: Scalars['Boolean'];
};


/** A comment on a team discussion. */
type Github_TeamDiscussionComment_reactionsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  content: Maybe<Github_ReactionContent>;
  orderBy: Maybe<Github_ReactionOrder>;
};


/** A comment on a team discussion. */
type Github_TeamDiscussionComment_userContentEditsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};

/** The connection type for TeamDiscussionComment. */
type Github_TeamDiscussionCommentConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussionCommentEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussionComment>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_TeamDiscussionCommentEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_TeamDiscussionComment>;
};

/** Ways in which team discussion comment connections can be ordered. */
type Github_TeamDiscussionCommentOrder = {
  /** The field by which to order nodes. */
  readonly field: Github_TeamDiscussionCommentOrderField;
  /** The direction in which to order nodes. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which team discussion comment connections can be ordered. */
enum Github_TeamDiscussionCommentOrderField {
  /** Allows sequential ordering of team discussion comments (which is equivalent to chronological ordering). */
  NUMBER = 'NUMBER'
}

/** The connection type for TeamDiscussion. */
type Github_TeamDiscussionConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussionEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_TeamDiscussion>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_TeamDiscussionEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_TeamDiscussion>;
};

/** Ways in which team discussion connections can be ordered. */
type Github_TeamDiscussionOrder = {
  /** The field by which to order nodes. */
  readonly field: Github_TeamDiscussionOrderField;
  /** The direction in which to order nodes. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which team discussion connections can be ordered. */
enum Github_TeamDiscussionOrderField {
  /** Allows chronological ordering of team discussions. */
  CREATED_AT = 'CREATED_AT'
}

/** An edge in a connection. */
type Github_TeamEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_Team>;
};

/** The connection type for User. */
type Github_TeamMemberConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamMemberEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a user who is a member of a team. */
type Github_TeamMemberEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The HTTP path to the organization's member access page. */
  readonly memberAccessResourcePath: Scalars['Github_URI'];
  /** The HTTP URL to the organization's member access page. */
  readonly memberAccessUrl: Scalars['Github_URI'];
  readonly node: Github_User;
  /** The role the member has on the team. */
  readonly role: Github_TeamMemberRole;
};

/** Ordering options for team member connections */
type Github_TeamMemberOrder = {
  /** The field to order team members by. */
  readonly field: Github_TeamMemberOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which team member connections can be ordered. */
enum Github_TeamMemberOrderField {
  /** Order team members by login */
  LOGIN = 'LOGIN',
  /** Order team members by creation time */
  CREATED_AT = 'CREATED_AT'
}

/** The possible team member roles; either 'maintainer' or 'member'. */
enum Github_TeamMemberRole {
  /** A team maintainer has permission to add and remove team members. */
  MAINTAINER = 'MAINTAINER',
  /** A team member has no administrative permissions on the team. */
  MEMBER = 'MEMBER'
}

/** Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL. */
enum Github_TeamMembershipType {
  /** Includes only immediate members of the team. */
  IMMEDIATE = 'IMMEDIATE',
  /** Includes only child team members for the team. */
  CHILD_TEAM = 'CHILD_TEAM',
  /** Includes immediate and child team members for the team. */
  ALL = 'ALL'
}

/** Ways in which team connections can be ordered. */
type Github_TeamOrder = {
  /** The field in which to order nodes by. */
  readonly field: Github_TeamOrderField;
  /** The direction in which to order nodes. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which team connections can be ordered. */
enum Github_TeamOrderField {
  /** Allows ordering a list of teams by name. */
  NAME = 'NAME'
}

/** The possible team privacy values. */
enum Github_TeamPrivacy {
  /** A secret team can only be seen by its members. */
  SECRET = 'SECRET',
  /** A visible team can be seen and @mentioned by every member of the organization. */
  VISIBLE = 'VISIBLE'
}

/** Audit log entry for a team.remove_member event. */
type Github_TeamRemoveMemberAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_TeamAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** Audit log entry for a team.remove_repository event. */
type Github_TeamRemoveRepositoryAuditEntry = Github_Node & Github_AuditEntry & Github_OrganizationAuditEntryData & Github_RepositoryAuditEntryData & Github_TeamAuditEntryData & {
  /** The action name */
  readonly action: Scalars['String'];
  /** The user who initiated the action */
  readonly actor: Maybe<Github_AuditEntryActor>;
  /** The IP address of the actor */
  readonly actorIp: Maybe<Scalars['String']>;
  /** A readable representation of the actor's location */
  readonly actorLocation: Maybe<Github_ActorLocation>;
  /** The username of the user who initiated the action */
  readonly actorLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the actor. */
  readonly actorResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the actor. */
  readonly actorUrl: Maybe<Scalars['Github_URI']>;
  /** The time the action was initiated */
  readonly createdAt: Scalars['Github_PreciseDateTime'];
  readonly id: Scalars['ID'];
  /** Whether the team was mapped to an LDAP Group. */
  readonly isLdapMapped: Maybe<Scalars['Boolean']>;
  /** The corresponding operation type for the action */
  readonly operationType: Maybe<Github_OperationType>;
  /** The Organization associated with the Audit Entry. */
  readonly organization: Maybe<Github_Organization>;
  /** The name of the Organization. */
  readonly organizationName: Maybe<Scalars['String']>;
  /** The HTTP path for the organization */
  readonly organizationResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the organization */
  readonly organizationUrl: Maybe<Scalars['Github_URI']>;
  /** The repository associated with the action */
  readonly repository: Maybe<Github_Repository>;
  /** The name of the repository */
  readonly repositoryName: Maybe<Scalars['String']>;
  /** The HTTP path for the repository */
  readonly repositoryResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the repository */
  readonly repositoryUrl: Maybe<Scalars['Github_URI']>;
  /** The team associated with the action */
  readonly team: Maybe<Github_Team>;
  /** The name of the team */
  readonly teamName: Maybe<Scalars['String']>;
  /** The HTTP path for this team */
  readonly teamResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for this team */
  readonly teamUrl: Maybe<Scalars['Github_URI']>;
  /** The user affected by the action */
  readonly user: Maybe<Github_User>;
  /** For actions involving two users, the actor is the initiator and the user is the affected user. */
  readonly userLogin: Maybe<Scalars['String']>;
  /** The HTTP path for the user. */
  readonly userResourcePath: Maybe<Scalars['Github_URI']>;
  /** The HTTP URL for the user. */
  readonly userUrl: Maybe<Scalars['Github_URI']>;
};

/** The connection type for Repository. */
type Github_TeamRepositoryConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_TeamRepositoryEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_Repository>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Represents a team repository. */
type Github_TeamRepositoryEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  readonly node: Github_Repository;
  /**
   * The permission level the team has on the repository
   * 
   * **Upcoming Change on 2020-10-01 UTC**
   * **Description:** Type for `permission` will change from `RepositoryPermission!` to `String`.
   * **Reason:** This field may return additional values
   */
  readonly permission: Github_RepositoryPermission;
};

/** Ordering options for team repository connections */
type Github_TeamRepositoryOrder = {
  /** The field to order repositories by. */
  readonly field: Github_TeamRepositoryOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which team repository connections can be ordered. */
enum Github_TeamRepositoryOrderField {
  /** Order repositories by creation time */
  CREATED_AT = 'CREATED_AT',
  /** Order repositories by update time */
  UPDATED_AT = 'UPDATED_AT',
  /** Order repositories by push time */
  PUSHED_AT = 'PUSHED_AT',
  /** Order repositories by name */
  NAME = 'NAME',
  /** Order repositories by permission */
  PERMISSION = 'PERMISSION',
  /** Order repositories by number of stargazers */
  STARGAZERS = 'STARGAZERS'
}

/** The role of a user on a team. */
enum Github_TeamRole {
  /** User has admin rights on the team. */
  ADMIN = 'ADMIN',
  /** User is a member of the team. */
  MEMBER = 'MEMBER'
}

/** A text match within a search result. */
type Github_TextMatch = {
  /** The specific text fragment within the property matched on. */
  readonly fragment: Scalars['String'];
  /** Highlights within the matched fragment. */
  readonly highlights: ReadonlyArray<Github_TextMatchHighlight>;
  /** The property matched on. */
  readonly property: Scalars['String'];
};

/** Represents a single highlight in a search result match. */
type Github_TextMatchHighlight = {
  /** The indice in the fragment where the matched text begins. */
  readonly beginIndice: Scalars['Int'];
  /** The indice in the fragment where the matched text ends. */
  readonly endIndice: Scalars['Int'];
  /** The text matched. */
  readonly text: Scalars['String'];
};

/** A topic aggregates entities that are related to a subject. */
type Github_Topic = Github_Node & Github_Starrable & {
  readonly id: Scalars['ID'];
  /** The topic's name. */
  readonly name: Scalars['String'];
  /**
   * A list of related topics, including aliases of this topic, sorted with the most relevant
   * first. Returns up to 10 Topics.
   */
  readonly relatedTopics: ReadonlyArray<Github_Topic>;
  /** A list of users who have starred this starrable. */
  readonly stargazers: Github_StargazerConnection;
  /** Returns a boolean indicating whether the viewing user has starred this starrable. */
  readonly viewerHasStarred: Scalars['Boolean'];
};


/** A topic aggregates entities that are related to a subject. */
type Github_Topic_relatedTopicsArgs = {
  first?: Maybe<Scalars['Int']>;
};


/** A topic aggregates entities that are related to a subject. */
type Github_Topic_stargazersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_StarOrder>;
};

/** Metadata for an audit entry with a topic. */
type Github_TopicAuditEntryData = {
  /** The name of the topic added to the repository */
  readonly topic: Maybe<Github_Topic>;
  /** The name of the topic added to the repository */
  readonly topicName: Maybe<Scalars['String']>;
};

/** Reason that the suggested topic is declined. */
enum Github_TopicSuggestionDeclineReason {
  /** The suggested topic is not relevant to the repository. */
  NOT_RELEVANT = 'NOT_RELEVANT',
  /** The suggested topic is too specific for the repository (e.g. #ruby-on-rails-version-4-2-1). */
  TOO_SPECIFIC = 'TOO_SPECIFIC',
  /** The viewer does not like the suggested topic. */
  PERSONAL_PREFERENCE = 'PERSONAL_PREFERENCE',
  /** The suggested topic is too general for the repository. */
  TOO_GENERAL = 'TOO_GENERAL'
}

/** Autogenerated input type of TransferIssue */
type Github_TransferIssueInput = {
  /** The Node ID of the issue to be transferred */
  readonly issueId: Scalars['ID'];
  /** The Node ID of the repository the issue should be transferred to */
  readonly repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of TransferIssue */
type Github_TransferIssuePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The issue that was transferred */
  readonly issue: Maybe<Github_Issue>;
};

/** Represents a 'transferred' event on a given issue or pull request. */
type Github_TransferredEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** The repository this came from */
  readonly fromRepository: Maybe<Github_Repository>;
  readonly id: Scalars['ID'];
  /** Identifies the issue associated with the event. */
  readonly issue: Github_Issue;
};

/** Represents a Git tree. */
type Github_Tree = Github_Node & Github_GitObject & {
  /** An abbreviated version of the Git object ID */
  readonly abbreviatedOid: Scalars['String'];
  /** The HTTP path for this Git object */
  readonly commitResourcePath: Scalars['Github_URI'];
  /** The HTTP URL for this Git object */
  readonly commitUrl: Scalars['Github_URI'];
  /** A list of tree entries. */
  readonly entries: Maybe<ReadonlyArray<Github_TreeEntry>>;
  readonly id: Scalars['ID'];
  /** The Git object ID */
  readonly oid: Scalars['Github_GitObjectID'];
  /** The Repository the Git object belongs to */
  readonly repository: Github_Repository;
};

/** Represents a Git tree entry. */
type Github_TreeEntry = {
  /** Entry file mode. */
  readonly mode: Scalars['Int'];
  /** Entry file name. */
  readonly name: Scalars['String'];
  /** Entry file object. */
  readonly object: Maybe<Github_GitObject>;
  /** Entry file Git object ID. */
  readonly oid: Scalars['Github_GitObjectID'];
  /** The Repository the tree entry belongs to */
  readonly repository: Github_Repository;
  /** If the TreeEntry is for a directory occupied by a submodule project, this returns the corresponding submodule */
  readonly submodule: Maybe<Github_Submodule>;
  /** Entry file type. */
  readonly type: Scalars['String'];
};

/** Autogenerated input type of UnarchiveRepository */
type Github_UnarchiveRepositoryInput = {
  /** The ID of the repository to unarchive. */
  readonly repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnarchiveRepository */
type Github_UnarchiveRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The repository that was unarchived. */
  readonly repository: Maybe<Github_Repository>;
};

/** Represents an 'unassigned' event on any assignable object. */
type Github_UnassignedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the assignable associated with the event. */
  readonly assignable: Github_Assignable;
  /** Identifies the user or mannequin that was unassigned. */
  readonly assignee: Maybe<Github_Assignee>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /**
   * Identifies the subject (user) who was unassigned.
   * @deprecated Assignees can now be mannequins. Use the `assignee` field instead. Removal on 2020-01-01 UTC.
   */
  readonly user: Maybe<Github_User>;
};

/** Autogenerated input type of UnfollowUser */
type Github_UnfollowUserInput = {
  /** ID of the user to unfollow. */
  readonly userId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnfollowUser */
type Github_UnfollowUserPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The user that was unfollowed. */
  readonly user: Maybe<Github_User>;
};

/** Represents a type that can be retrieved by a URL. */
type Github_UniformResourceLocatable = {
  /** The HTML path to this resource. */
  readonly resourcePath: Scalars['Github_URI'];
  /** The URL to this resource. */
  readonly url: Scalars['Github_URI'];
};

/** Represents an unknown signature on a Commit or Tag. */
type Github_UnknownSignature = Github_GitSignature & {
  /** Email used to sign this object. */
  readonly email: Scalars['String'];
  /** True if the signature is valid and verified by GitHub. */
  readonly isValid: Scalars['Boolean'];
  /** Payload for GPG signing object. Raw ODB object without the signature header. */
  readonly payload: Scalars['String'];
  /** ASCII-armored signature header from object. */
  readonly signature: Scalars['String'];
  /** GitHub user corresponding to the email signing this commit. */
  readonly signer: Maybe<Github_User>;
  /**
   * The state of this signature. `VALID` if signature is valid and verified by
   * GitHub, otherwise represents reason why signature is considered invalid.
   */
  readonly state: Github_GitSignatureState;
  /** True if the signature was made with GitHub's signing key. */
  readonly wasSignedByGitHub: Scalars['Boolean'];
};

/** Represents an 'unlabeled' event on a given issue or pull request. */
type Github_UnlabeledEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the label associated with the 'unlabeled' event. */
  readonly label: Github_Label;
  /** Identifies the `Labelable` associated with the event. */
  readonly labelable: Github_Labelable;
};

/** Autogenerated input type of UnlinkRepositoryFromProject */
type Github_UnlinkRepositoryFromProjectInput = {
  /** The ID of the Project linked to the Repository. */
  readonly projectId: Scalars['ID'];
  /** The ID of the Repository linked to the Project. */
  readonly repositoryId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnlinkRepositoryFromProject */
type Github_UnlinkRepositoryFromProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The linked Project. */
  readonly project: Maybe<Github_Project>;
  /** The linked Repository. */
  readonly repository: Maybe<Github_Repository>;
};

/** Represents an 'unlocked' event on a given issue or pull request. */
type Github_UnlockedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Object that was unlocked. */
  readonly lockable: Github_Lockable;
};

/** Autogenerated input type of UnlockLockable */
type Github_UnlockLockableInput = {
  /** ID of the issue or pull request to be unlocked. */
  readonly lockableId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnlockLockable */
type Github_UnlockLockablePayload = {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The item that was unlocked. */
  readonly unlockedRecord: Maybe<Github_Lockable>;
};

/** Represents an 'unmarked_as_duplicate' event on a given issue or pull request. */
type Github_UnmarkedAsDuplicateEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
};

/** Autogenerated input type of UnmarkIssueAsDuplicate */
type Github_UnmarkIssueAsDuplicateInput = {
  /** ID of the issue or pull request currently marked as a duplicate. */
  readonly duplicateId: Scalars['ID'];
  /** ID of the issue or pull request currently considered canonical/authoritative/original. */
  readonly canonicalId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnmarkIssueAsDuplicate */
type Github_UnmarkIssueAsDuplicatePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The issue or pull request that was marked as a duplicate. */
  readonly duplicate: Maybe<Github_IssueOrPullRequest>;
};

/** Autogenerated input type of UnminimizeComment */
type Github_UnminimizeCommentInput = {
  /** The Node ID of the subject to modify. */
  readonly subjectId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnminimizeComment */
type Github_UnminimizeCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The comment that was unminimized. */
  readonly unminimizedComment: Maybe<Github_Minimizable>;
};

/** Represents an 'unpinned' event on a given issue or pull request. */
type Github_UnpinnedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Identifies the issue associated with the event. */
  readonly issue: Github_Issue;
};

/** Autogenerated input type of UnresolveReviewThread */
type Github_UnresolveReviewThreadInput = {
  /** The ID of the thread to unresolve */
  readonly threadId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UnresolveReviewThread */
type Github_UnresolveReviewThreadPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The thread to resolve. */
  readonly thread: Maybe<Github_PullRequestReviewThread>;
};

/** Represents an 'unsubscribed' event on a given `Subscribable`. */
type Github_UnsubscribedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** Object referenced by event. */
  readonly subscribable: Github_Subscribable;
};

/** Entities that can be updated. */
type Github_Updatable = {
  /** Check if the current viewer can update this object. */
  readonly viewerCanUpdate: Scalars['Boolean'];
};

/** Comments that can be updated. */
type Github_UpdatableComment = {
  /** Reasons why the current viewer can not update this comment. */
  readonly viewerCannotUpdateReasons: ReadonlyArray<Github_CommentCannotUpdateReason>;
};

/** Autogenerated input type of UpdateBranchProtectionRule */
type Github_UpdateBranchProtectionRuleInput = {
  /** The global relay id of the branch protection rule to be updated. */
  readonly branchProtectionRuleId: Scalars['ID'];
  /** The glob-like pattern used to determine matching branches. */
  readonly pattern: Maybe<Scalars['String']>;
  /** Are approving reviews required to update matching branches. */
  readonly requiresApprovingReviews: Maybe<Scalars['Boolean']>;
  /** Number of approving reviews required to update matching branches. */
  readonly requiredApprovingReviewCount: Maybe<Scalars['Int']>;
  /** Are commits required to be signed. */
  readonly requiresCommitSignatures: Maybe<Scalars['Boolean']>;
  /** Can admins overwrite branch protection. */
  readonly isAdminEnforced: Maybe<Scalars['Boolean']>;
  /** Are status checks required to update matching branches. */
  readonly requiresStatusChecks: Maybe<Scalars['Boolean']>;
  /** Are branches required to be up to date before merging. */
  readonly requiresStrictStatusChecks: Maybe<Scalars['Boolean']>;
  /** Are reviews from code owners required to update matching branches. */
  readonly requiresCodeOwnerReviews: Maybe<Scalars['Boolean']>;
  /** Will new commits pushed to matching branches dismiss pull request review approvals. */
  readonly dismissesStaleReviews: Maybe<Scalars['Boolean']>;
  /** Is dismissal of pull request reviews restricted. */
  readonly restrictsReviewDismissals: Maybe<Scalars['Boolean']>;
  /** A list of User or Team IDs allowed to dismiss reviews on pull requests targeting matching branches. */
  readonly reviewDismissalActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** Is pushing to matching branches restricted. */
  readonly restrictsPushes: Maybe<Scalars['Boolean']>;
  /** A list of User, Team or App IDs allowed to push to matching branches. */
  readonly pushActorIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** List of required status check contexts that must pass for commits to be accepted to matching branches. */
  readonly requiredStatusCheckContexts: Maybe<ReadonlyArray<Scalars['String']>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateBranchProtectionRule */
type Github_UpdateBranchProtectionRulePayload = {
  /** The newly created BranchProtectionRule. */
  readonly branchProtectionRule: Maybe<Github_BranchProtectionRule>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseActionExecutionCapabilitySetting */
type Github_UpdateEnterpriseActionExecutionCapabilitySettingInput = {
  /** The ID of the enterprise on which to set the members can create repositories setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the action execution capability setting on the enterprise. */
  readonly capability: Github_ActionExecutionCapabilitySetting;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseActionExecutionCapabilitySetting */
type Github_UpdateEnterpriseActionExecutionCapabilitySettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated action execution capability setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the action execution capability setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseAdministratorRole */
type Github_UpdateEnterpriseAdministratorRoleInput = {
  /** The ID of the Enterprise which the admin belongs to. */
  readonly enterpriseId: Scalars['ID'];
  /** The login of a administrator whose role is being changed. */
  readonly login: Scalars['String'];
  /** The new role for the Enterprise administrator. */
  readonly role: Github_EnterpriseAdministratorRole;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseAdministratorRole */
type Github_UpdateEnterpriseAdministratorRolePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** A message confirming the result of changing the administrator's role. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
type Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = {
  /** The ID of the enterprise on which to set the allow private repository forking setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the allow private repository forking setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseAllowPrivateRepositoryForkingSetting */
type Github_UpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated allow private repository forking setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the allow private repository forking setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
type Github_UpdateEnterpriseDefaultRepositoryPermissionSettingInput = {
  /** The ID of the enterprise on which to set the default repository permission setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the default repository permission setting on the enterprise. */
  readonly settingValue: Github_EnterpriseDefaultRepositoryPermissionSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseDefaultRepositoryPermissionSetting */
type Github_UpdateEnterpriseDefaultRepositoryPermissionSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated default repository permission setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the default repository permission setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
type Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = {
  /** The ID of the enterprise on which to set the members can change repository visibility setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can change repository visibility setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanChangeRepositoryVisibilitySetting */
type Github_UpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can change repository visibility setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can change repository visibility setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
type Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingInput = {
  /** The ID of the enterprise on which to set the members can create repositories setting. */
  readonly enterpriseId: Scalars['ID'];
  /**
   * Value for the members can create repositories setting on the enterprise. This
   * or the granular public/private/internal allowed fields (but not both) must be provided.
   */
  readonly settingValue: Maybe<Github_EnterpriseMembersCanCreateRepositoriesSettingValue>;
  /** When false, allow member organizations to set their own repository creation member privileges. */
  readonly membersCanCreateRepositoriesPolicyEnabled: Maybe<Scalars['Boolean']>;
  /** Allow members to create public repositories. Defaults to current value. */
  readonly membersCanCreatePublicRepositories: Maybe<Scalars['Boolean']>;
  /** Allow members to create private repositories. Defaults to current value. */
  readonly membersCanCreatePrivateRepositories: Maybe<Scalars['Boolean']>;
  /** Allow members to create internal repositories. Defaults to current value. */
  readonly membersCanCreateInternalRepositories: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanCreateRepositoriesSetting */
type Github_UpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can create repositories setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can create repositories setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
type Github_UpdateEnterpriseMembersCanDeleteIssuesSettingInput = {
  /** The ID of the enterprise on which to set the members can delete issues setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can delete issues setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteIssuesSetting */
type Github_UpdateEnterpriseMembersCanDeleteIssuesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can delete issues setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can delete issues setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
type Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = {
  /** The ID of the enterprise on which to set the members can delete repositories setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can delete repositories setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanDeleteRepositoriesSetting */
type Github_UpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can delete repositories setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can delete repositories setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
type Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = {
  /** The ID of the enterprise on which to set the members can invite collaborators setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can invite collaborators setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanInviteCollaboratorsSetting */
type Github_UpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can invite collaborators setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can invite collaborators setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanMakePurchasesSetting */
type Github_UpdateEnterpriseMembersCanMakePurchasesSettingInput = {
  /** The ID of the enterprise on which to set the members can make purchases setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can make purchases setting on the enterprise. */
  readonly settingValue: Github_EnterpriseMembersCanMakePurchasesSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanMakePurchasesSetting */
type Github_UpdateEnterpriseMembersCanMakePurchasesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can make purchases setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can make purchases setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
type Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = {
  /** The ID of the enterprise on which to set the members can update protected branches setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can update protected branches setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanUpdateProtectedBranchesSetting */
type Github_UpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can update protected branches setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can update protected branches setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
type Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = {
  /** The ID of the enterprise on which to set the members can view dependency insights setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the members can view dependency insights setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseMembersCanViewDependencyInsightsSetting */
type Github_UpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated members can view dependency insights setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the members can view dependency insights setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseOrganizationProjectsSetting */
type Github_UpdateEnterpriseOrganizationProjectsSettingInput = {
  /** The ID of the enterprise on which to set the organization projects setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the organization projects setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseOrganizationProjectsSetting */
type Github_UpdateEnterpriseOrganizationProjectsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated organization projects setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the organization projects setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseProfile */
type Github_UpdateEnterpriseProfileInput = {
  /** The Enterprise ID to update. */
  readonly enterpriseId: Scalars['ID'];
  /** The name of the enterprise. */
  readonly name: Maybe<Scalars['String']>;
  /** The description of the enterprise. */
  readonly description: Maybe<Scalars['String']>;
  /** The URL of the enterprise's website. */
  readonly websiteUrl: Maybe<Scalars['String']>;
  /** The location of the enterprise. */
  readonly location: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseProfile */
type Github_UpdateEnterpriseProfilePayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated enterprise. */
  readonly enterprise: Maybe<Github_Enterprise>;
};

/** Autogenerated input type of UpdateEnterpriseRepositoryProjectsSetting */
type Github_UpdateEnterpriseRepositoryProjectsSettingInput = {
  /** The ID of the enterprise on which to set the repository projects setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the repository projects setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseRepositoryProjectsSetting */
type Github_UpdateEnterpriseRepositoryProjectsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated repository projects setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the repository projects setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseTeamDiscussionsSetting */
type Github_UpdateEnterpriseTeamDiscussionsSettingInput = {
  /** The ID of the enterprise on which to set the team discussions setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the team discussions setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledDisabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseTeamDiscussionsSetting */
type Github_UpdateEnterpriseTeamDiscussionsSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated team discussions setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the team discussions setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
type Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = {
  /** The ID of the enterprise on which to set the two factor authentication required setting. */
  readonly enterpriseId: Scalars['ID'];
  /** The value for the two factor authentication required setting on the enterprise. */
  readonly settingValue: Github_EnterpriseEnabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateEnterpriseTwoFactorAuthenticationRequiredSetting */
type Github_UpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The enterprise with the updated two factor authentication required setting. */
  readonly enterprise: Maybe<Github_Enterprise>;
  /** A message confirming the result of updating the two factor authentication required setting. */
  readonly message: Maybe<Scalars['String']>;
};

/** Autogenerated input type of UpdateIpAllowListEnabledSetting */
type Github_UpdateIpAllowListEnabledSettingInput = {
  /** The ID of the owner on which to set the IP allow list enabled setting. */
  readonly ownerId: Scalars['ID'];
  /** The value for the IP allow list enabled setting. */
  readonly settingValue: Github_IpAllowListEnabledSettingValue;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIpAllowListEnabledSetting */
type Github_UpdateIpAllowListEnabledSettingPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The IP allow list owner on which the setting was updated. */
  readonly owner: Maybe<Github_IpAllowListOwner>;
};

/** Autogenerated input type of UpdateIpAllowListEntry */
type Github_UpdateIpAllowListEntryInput = {
  /** The ID of the IP allow list entry to update. */
  readonly ipAllowListEntryId: Scalars['ID'];
  /** An IP address or range of addresses in CIDR notation. */
  readonly allowListValue: Scalars['String'];
  /** An optional name for the IP allow list entry. */
  readonly name: Maybe<Scalars['String']>;
  /** Whether the IP allow list entry is active when an IP allow list is enabled. */
  readonly isActive: Scalars['Boolean'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIpAllowListEntry */
type Github_UpdateIpAllowListEntryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The IP allow list entry that was updated. */
  readonly ipAllowListEntry: Maybe<Github_IpAllowListEntry>;
};

/** Autogenerated input type of UpdateIssueComment */
type Github_UpdateIssueCommentInput = {
  /** The ID of the IssueComment to modify. */
  readonly id: Scalars['ID'];
  /** The updated text of the comment. */
  readonly body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIssueComment */
type Github_UpdateIssueCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated comment. */
  readonly issueComment: Maybe<Github_IssueComment>;
};

/** Autogenerated input type of UpdateIssue */
type Github_UpdateIssueInput = {
  /** The ID of the Issue to modify. */
  readonly id: Scalars['ID'];
  /** The title for the issue. */
  readonly title: Maybe<Scalars['String']>;
  /** The body for the issue description. */
  readonly body: Maybe<Scalars['String']>;
  /** An array of Node IDs of users for this issue. */
  readonly assigneeIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** The Node ID of the milestone for this issue. */
  readonly milestoneId: Maybe<Scalars['ID']>;
  /** An array of Node IDs of labels for this issue. */
  readonly labelIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** The desired issue state. */
  readonly state: Maybe<Github_IssueState>;
  /** An array of Node IDs for projects associated with this issue. */
  readonly projectIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateIssue */
type Github_UpdateIssuePayload = {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The issue. */
  readonly issue: Maybe<Github_Issue>;
};

/** Autogenerated input type of UpdateProjectCard */
type Github_UpdateProjectCardInput = {
  /** The ProjectCard ID to update. */
  readonly projectCardId: Scalars['ID'];
  /** Whether or not the ProjectCard should be archived */
  readonly isArchived: Maybe<Scalars['Boolean']>;
  /** The note of ProjectCard. */
  readonly note: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProjectCard */
type Github_UpdateProjectCardPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated ProjectCard. */
  readonly projectCard: Maybe<Github_ProjectCard>;
};

/** Autogenerated input type of UpdateProjectColumn */
type Github_UpdateProjectColumnInput = {
  /** The ProjectColumn ID to update. */
  readonly projectColumnId: Scalars['ID'];
  /** The name of project column. */
  readonly name: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProjectColumn */
type Github_UpdateProjectColumnPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated project column. */
  readonly projectColumn: Maybe<Github_ProjectColumn>;
};

/** Autogenerated input type of UpdateProject */
type Github_UpdateProjectInput = {
  /** The Project ID to update. */
  readonly projectId: Scalars['ID'];
  /** The name of project. */
  readonly name: Maybe<Scalars['String']>;
  /** The description of project. */
  readonly body: Maybe<Scalars['String']>;
  /** Whether the project is open or closed. */
  readonly state: Maybe<Github_ProjectState>;
  /** Whether the project is public or not. */
  readonly public: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateProject */
type Github_UpdateProjectPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated project. */
  readonly project: Maybe<Github_Project>;
};

/** Autogenerated input type of UpdatePullRequest */
type Github_UpdatePullRequestInput = {
  /** The Node ID of the pull request. */
  readonly pullRequestId: Scalars['ID'];
  /**
   * The name of the branch you want your changes pulled into. This should be an existing branch
   * on the current repository.
   */
  readonly baseRefName: Maybe<Scalars['String']>;
  /** The title of the pull request. */
  readonly title: Maybe<Scalars['String']>;
  /** The contents of the pull request. */
  readonly body: Maybe<Scalars['String']>;
  /** The target state of the pull request. */
  readonly state: Maybe<Github_PullRequestUpdateState>;
  /** Indicates whether maintainers can modify the pull request. */
  readonly maintainerCanModify: Maybe<Scalars['Boolean']>;
  /** An array of Node IDs of users for this pull request. */
  readonly assigneeIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** The Node ID of the milestone for this pull request. */
  readonly milestoneId: Maybe<Scalars['ID']>;
  /** An array of Node IDs of labels for this pull request. */
  readonly labelIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** An array of Node IDs for projects associated with this pull request. */
  readonly projectIds: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePullRequest */
type Github_UpdatePullRequestPayload = {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated pull request. */
  readonly pullRequest: Maybe<Github_PullRequest>;
};

/** Autogenerated input type of UpdatePullRequestReviewComment */
type Github_UpdatePullRequestReviewCommentInput = {
  /** The Node ID of the comment to modify. */
  readonly pullRequestReviewCommentId: Scalars['ID'];
  /** The text of the comment. */
  readonly body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePullRequestReviewComment */
type Github_UpdatePullRequestReviewCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated comment. */
  readonly pullRequestReviewComment: Maybe<Github_PullRequestReviewComment>;
};

/** Autogenerated input type of UpdatePullRequestReview */
type Github_UpdatePullRequestReviewInput = {
  /** The Node ID of the pull request review to modify. */
  readonly pullRequestReviewId: Scalars['ID'];
  /** The contents of the pull request review body. */
  readonly body: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdatePullRequestReview */
type Github_UpdatePullRequestReviewPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated pull request review. */
  readonly pullRequestReview: Maybe<Github_PullRequestReview>;
};

/** Autogenerated input type of UpdateRef */
type Github_UpdateRefInput = {
  /** The Node ID of the Ref to be updated. */
  readonly refId: Scalars['ID'];
  /** The GitObjectID that the Ref shall be updated to target. */
  readonly oid: Scalars['Github_GitObjectID'];
  /** Permit updates of branch Refs that are not fast-forwards? */
  readonly force: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateRef */
type Github_UpdateRefPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated Ref. */
  readonly ref: Maybe<Github_Ref>;
};

/** Autogenerated input type of UpdateRepository */
type Github_UpdateRepositoryInput = {
  /** The ID of the repository to update. */
  readonly repositoryId: Scalars['ID'];
  /** The new name of the repository. */
  readonly name: Maybe<Scalars['String']>;
  /** A new description for the repository. Pass an empty string to erase the existing description. */
  readonly description: Maybe<Scalars['String']>;
  /**
   * Whether this repository should be marked as a template such that anyone who
   * can access it can create new repositories with the same files and directory structure.
   */
  readonly template: Maybe<Scalars['Boolean']>;
  /** The URL for a web page about this repository. Pass an empty string to erase the existing URL. */
  readonly homepageUrl: Maybe<Scalars['Github_URI']>;
  /** Indicates if the repository should have the wiki feature enabled. */
  readonly hasWikiEnabled: Maybe<Scalars['Boolean']>;
  /** Indicates if the repository should have the issues feature enabled. */
  readonly hasIssuesEnabled: Maybe<Scalars['Boolean']>;
  /** Indicates if the repository should have the project boards feature enabled. */
  readonly hasProjectsEnabled: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateRepository */
type Github_UpdateRepositoryPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated repository. */
  readonly repository: Maybe<Github_Repository>;
};

/** Autogenerated input type of UpdateSubscription */
type Github_UpdateSubscriptionInput = {
  /** The Node ID of the subscribable object to modify. */
  readonly subscribableId: Scalars['ID'];
  /** The new state of the subscription. */
  readonly state: Github_SubscriptionState;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateSubscription */
type Github_UpdateSubscriptionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The input subscribable entity. */
  readonly subscribable: Maybe<Github_Subscribable>;
};

/** Autogenerated input type of UpdateTeamDiscussionComment */
type Github_UpdateTeamDiscussionCommentInput = {
  /** The ID of the comment to modify. */
  readonly id: Scalars['ID'];
  /** The updated text of the comment. */
  readonly body: Scalars['String'];
  /** The current version of the body content. */
  readonly bodyVersion: Maybe<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateTeamDiscussionComment */
type Github_UpdateTeamDiscussionCommentPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated comment. */
  readonly teamDiscussionComment: Maybe<Github_TeamDiscussionComment>;
};

/** Autogenerated input type of UpdateTeamDiscussion */
type Github_UpdateTeamDiscussionInput = {
  /** The Node ID of the discussion to modify. */
  readonly id: Scalars['ID'];
  /** The updated title of the discussion. */
  readonly title: Maybe<Scalars['String']>;
  /** The updated text of the discussion. */
  readonly body: Maybe<Scalars['String']>;
  /**
   * The current version of the body content. If provided, this update operation
   * will be rejected if the given version does not match the latest version on the server.
   */
  readonly bodyVersion: Maybe<Scalars['String']>;
  /** If provided, sets the pinned state of the updated discussion. */
  readonly pinned: Maybe<Scalars['Boolean']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateTeamDiscussion */
type Github_UpdateTeamDiscussionPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** The updated discussion. */
  readonly teamDiscussion: Maybe<Github_TeamDiscussion>;
};

/** Autogenerated input type of UpdateTopics */
type Github_UpdateTopicsInput = {
  /** The Node ID of the repository. */
  readonly repositoryId: Scalars['ID'];
  /** An array of topic names. */
  readonly topicNames: ReadonlyArray<Scalars['String']>;
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
};

/** Autogenerated return type of UpdateTopics */
type Github_UpdateTopicsPayload = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId: Maybe<Scalars['String']>;
  /** Names of the provided topics that are not valid. */
  readonly invalidTopicNames: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The updated repository. */
  readonly repository: Maybe<Github_Repository>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User = Github_Node & Github_Actor & Github_PackageOwner & Github_ProjectOwner & Github_RepositoryOwner & Github_UniformResourceLocatable & Github_ProfileOwner & Github_Sponsorable & {
  /** Determine if this repository owner has any items that can be pinned to their profile. */
  readonly anyPinnableItems: Scalars['Boolean'];
  /** A URL pointing to the user's public avatar. */
  readonly avatarUrl: Scalars['Github_URI'];
  /** The user's public profile bio. */
  readonly bio: Maybe<Scalars['String']>;
  /** The user's public profile bio as HTML. */
  readonly bioHTML: Scalars['Github_HTML'];
  /** A list of commit comments made by this user. */
  readonly commitComments: Github_CommitCommentConnection;
  /** The user's public profile company. */
  readonly company: Maybe<Scalars['String']>;
  /** The user's public profile company as HTML. */
  readonly companyHTML: Scalars['Github_HTML'];
  /** The collection of contributions this user has made to different repositories. */
  readonly contributionsCollection: Github_ContributionsCollection;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the primary key from the database. */
  readonly databaseId: Maybe<Scalars['Int']>;
  /** The user's publicly visible profile email. */
  readonly email: Scalars['String'];
  /** A list of users the given user is followed by. */
  readonly followers: Github_FollowerConnection;
  /** A list of users the given user is following. */
  readonly following: Github_FollowingConnection;
  /** Find gist by repo name. */
  readonly gist: Maybe<Github_Gist>;
  /** A list of gist comments made by this user. */
  readonly gistComments: Github_GistCommentConnection;
  /** A list of the Gists the user has created. */
  readonly gists: Github_GistConnection;
  /** The hovercard information for this user in a given context */
  readonly hovercard: Github_Hovercard;
  readonly id: Scalars['ID'];
  /** Whether or not this user is a participant in the GitHub Security Bug Bounty. */
  readonly isBountyHunter: Scalars['Boolean'];
  /** Whether or not this user is a participant in the GitHub Campus Experts Program. */
  readonly isCampusExpert: Scalars['Boolean'];
  /** Whether or not this user is a GitHub Developer Program member. */
  readonly isDeveloperProgramMember: Scalars['Boolean'];
  /** Whether or not this user is a GitHub employee. */
  readonly isEmployee: Scalars['Boolean'];
  /** Whether or not the user has marked themselves as for hire. */
  readonly isHireable: Scalars['Boolean'];
  /** Whether or not this user is a site administrator. */
  readonly isSiteAdmin: Scalars['Boolean'];
  /** Whether or not this user is the viewing user. */
  readonly isViewer: Scalars['Boolean'];
  /** A list of issue comments made by this user. */
  readonly issueComments: Github_IssueCommentConnection;
  /** A list of issues associated with this user. */
  readonly issues: Github_IssueConnection;
  /**
   * Showcases a selection of repositories and gists that the profile owner has
   * either curated or that have been selected automatically based on popularity.
   */
  readonly itemShowcase: Github_ProfileItemShowcase;
  /** The user's public profile location. */
  readonly location: Maybe<Scalars['String']>;
  /** The username used to login. */
  readonly login: Scalars['String'];
  /** The user's public profile name. */
  readonly name: Maybe<Scalars['String']>;
  /** Find an organization by its login that the user belongs to. */
  readonly organization: Maybe<Github_Organization>;
  /** Verified email addresses that match verified domains for a specified organization the user is a member of. */
  readonly organizationVerifiedDomainEmails: ReadonlyArray<Scalars['String']>;
  /** A list of organizations the user belongs to. */
  readonly organizations: Github_OrganizationConnection;
  /** A list of packages under the owner. */
  readonly packages: Github_PackageConnection;
  /** A list of repositories and gists this profile owner can pin to their profile. */
  readonly pinnableItems: Github_PinnableItemConnection;
  /** A list of repositories and gists this profile owner has pinned to their profile */
  readonly pinnedItems: Github_PinnableItemConnection;
  /** Returns how many more items this profile owner can pin to their profile. */
  readonly pinnedItemsRemaining: Scalars['Int'];
  /** Find project by number. */
  readonly project: Maybe<Github_Project>;
  /** A list of projects under the owner. */
  readonly projects: Github_ProjectConnection;
  /** The HTTP path listing user's projects */
  readonly projectsResourcePath: Scalars['Github_URI'];
  /** The HTTP URL listing user's projects */
  readonly projectsUrl: Scalars['Github_URI'];
  /** A list of public keys associated with this user. */
  readonly publicKeys: Github_PublicKeyConnection;
  /** A list of pull requests associated with this user. */
  readonly pullRequests: Github_PullRequestConnection;
  /** A list of repositories that the user owns. */
  readonly repositories: Github_RepositoryConnection;
  /** A list of repositories that the user recently contributed to. */
  readonly repositoriesContributedTo: Github_RepositoryConnection;
  /** Find Repository. */
  readonly repository: Maybe<Github_Repository>;
  /** The HTTP path for this user */
  readonly resourcePath: Scalars['Github_URI'];
  /** Replies this user has saved */
  readonly savedReplies: Maybe<Github_SavedReplyConnection>;
  /** The GitHub Sponsors listing for this user. */
  readonly sponsorsListing: Maybe<Github_SponsorsListing>;
  /** This object's sponsorships as the maintainer. */
  readonly sponsorshipsAsMaintainer: Github_SponsorshipConnection;
  /** This object's sponsorships as the sponsor. */
  readonly sponsorshipsAsSponsor: Github_SponsorshipConnection;
  /** Repositories the user has starred. */
  readonly starredRepositories: Github_StarredRepositoryConnection;
  /** The user's description of what they're currently doing. */
  readonly status: Maybe<Github_UserStatus>;
  /** Repositories the user has contributed to, ordered by contribution rank, plus repositories the user has created */
  readonly topRepositories: Github_RepositoryConnection;
  /** The user's Twitter username. */
  readonly twitterUsername: Maybe<Scalars['String']>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The HTTP URL for this user */
  readonly url: Scalars['Github_URI'];
  /** Can the viewer pin repositories and gists to the profile? */
  readonly viewerCanChangePinnedItems: Scalars['Boolean'];
  /** Can the current viewer create new projects on this owner. */
  readonly viewerCanCreateProjects: Scalars['Boolean'];
  /** Whether or not the viewer is able to follow the user. */
  readonly viewerCanFollow: Scalars['Boolean'];
  /** Whether or not this user is followed by the viewer. */
  readonly viewerIsFollowing: Scalars['Boolean'];
  /** A list of repositories the given user is watching. */
  readonly watching: Github_RepositoryConnection;
  /** A URL pointing to the user's public website/blog. */
  readonly websiteUrl: Maybe<Scalars['Github_URI']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_anyPinnableItemsArgs = {
  type: Maybe<Github_PinnableItemType>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_avatarUrlArgs = {
  size: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_commitCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_contributionsCollectionArgs = {
  organizationID: Maybe<Scalars['ID']>;
  from: Maybe<Scalars['Github_DateTime']>;
  to: Maybe<Scalars['Github_DateTime']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_followersArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_followingArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_gistArgs = {
  name: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_gistCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_gistsArgs = {
  privacy: Maybe<Github_GistPrivacy>;
  orderBy: Maybe<Github_GistOrder>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_hovercardArgs = {
  primarySubjectId: Maybe<Scalars['ID']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_issueCommentsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
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


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_organizationArgs = {
  login: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_organizationVerifiedDomainEmailsArgs = {
  login: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_organizationsArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
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


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_pinnableItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_pinnedItemsArgs = {
  types: Maybe<ReadonlyArray<Github_PinnableItemType>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_projectArgs = {
  number: Scalars['Int'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_projectsArgs = {
  orderBy: Maybe<Github_ProjectOrder>;
  search: Maybe<Scalars['String']>;
  states: Maybe<ReadonlyArray<Github_ProjectState>>;
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_publicKeysArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
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


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
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


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
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


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_repositoryArgs = {
  name: Scalars['String'];
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_savedRepliesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Github_SavedReplyOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_sponsorshipsAsMaintainerArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  includePrivate?: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_sponsorshipsAsSponsorArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Maybe<Github_SponsorshipOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_starredRepositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  ownedByViewer: Maybe<Scalars['Boolean']>;
  orderBy: Maybe<Github_StarOrder>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
type Github_User_topRepositoriesArgs = {
  after: Maybe<Scalars['String']>;
  before: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  orderBy: Github_RepositoryOrder;
  since: Maybe<Scalars['Github_DateTime']>;
};


/** A user is an individual's account on GitHub that owns repositories and can make new content. */
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

/** The possible durations that a user can be blocked for. */
enum Github_UserBlockDuration {
  /** The user was blocked for 1 day */
  ONE_DAY = 'ONE_DAY',
  /** The user was blocked for 3 days */
  THREE_DAYS = 'THREE_DAYS',
  /** The user was blocked for 7 days */
  ONE_WEEK = 'ONE_WEEK',
  /** The user was blocked for 30 days */
  ONE_MONTH = 'ONE_MONTH',
  /** The user was blocked permanently */
  PERMANENT = 'PERMANENT'
}

/** Represents a 'user_blocked' event on a given user. */
type Github_UserBlockedEvent = Github_Node & {
  /** Identifies the actor who performed the event. */
  readonly actor: Maybe<Github_Actor>;
  /** Number of days that the user was blocked for. */
  readonly blockDuration: Github_UserBlockDuration;
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  readonly id: Scalars['ID'];
  /** The user who was blocked. */
  readonly subject: Maybe<Github_User>;
};

/** The connection type for User. */
type Github_UserConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_User>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edit on user content */
type Github_UserContentEdit = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** Identifies the date and time when the object was deleted. */
  readonly deletedAt: Maybe<Scalars['Github_DateTime']>;
  /** The actor who deleted this content */
  readonly deletedBy: Maybe<Github_Actor>;
  /** A summary of the changes for this edit */
  readonly diff: Maybe<Scalars['String']>;
  /** When this content was edited */
  readonly editedAt: Scalars['Github_DateTime'];
  /** The actor who edited this content */
  readonly editor: Maybe<Github_Actor>;
  readonly id: Scalars['ID'];
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
};

/** A list of edits to content. */
type Github_UserContentEditConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserContentEditEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_UserContentEdit>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_UserContentEditEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_UserContentEdit>;
};

/** Represents a user. */
type Github_UserEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_User>;
};

/** Email attributes from External Identity */
type Github_UserEmailMetadata = {
  /** Boolean to identify primary emails */
  readonly primary: Maybe<Scalars['Boolean']>;
  /** Type of email */
  readonly type: Maybe<Scalars['String']>;
  /** Email id */
  readonly value: Scalars['String'];
};

/** The user's description of what they're currently doing. */
type Github_UserStatus = Github_Node & {
  /** Identifies the date and time when the object was created. */
  readonly createdAt: Scalars['Github_DateTime'];
  /** An emoji summarizing the user's status. */
  readonly emoji: Maybe<Scalars['String']>;
  /** The status emoji as HTML. */
  readonly emojiHTML: Maybe<Scalars['Github_HTML']>;
  /** If set, the status will not be shown after this date. */
  readonly expiresAt: Maybe<Scalars['Github_DateTime']>;
  /** ID of the object. */
  readonly id: Scalars['ID'];
  /** Whether this status indicates the user is not fully available on GitHub. */
  readonly indicatesLimitedAvailability: Scalars['Boolean'];
  /** A brief message describing what the user is doing. */
  readonly message: Maybe<Scalars['String']>;
  /** The organization whose members can see this status. If null, this status is publicly visible. */
  readonly organization: Maybe<Github_Organization>;
  /** Identifies the date and time when the object was last updated. */
  readonly updatedAt: Scalars['Github_DateTime'];
  /** The user who has this status. */
  readonly user: Github_User;
};

/** The connection type for UserStatus. */
type Github_UserStatusConnection = {
  /** A list of edges. */
  readonly edges: Maybe<ReadonlyArray<Maybe<Github_UserStatusEdge>>>;
  /** A list of nodes. */
  readonly nodes: Maybe<ReadonlyArray<Maybe<Github_UserStatus>>>;
  /** Information to aid in pagination. */
  readonly pageInfo: Github_PageInfo;
  /** Identifies the total count of items in the connection. */
  readonly totalCount: Scalars['Int'];
};

/** An edge in a connection. */
type Github_UserStatusEdge = {
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
  /** The item at the end of the edge. */
  readonly node: Maybe<Github_UserStatus>;
};

/** Ordering options for user status connections. */
type Github_UserStatusOrder = {
  /** The field to order user statuses by. */
  readonly field: Github_UserStatusOrderField;
  /** The ordering direction. */
  readonly direction: Github_OrderDirection;
};

/** Properties by which user status connections can be ordered. */
enum Github_UserStatusOrderField {
  /** Order user statuses by when they were updated. */
  UPDATED_AT = 'UPDATED_AT'
}

/** A hovercard context with a message describing how the viewer is related. */
type Github_ViewerHovercardContext = Github_HovercardContext & {
  /** A string describing this context */
  readonly message: Scalars['String'];
  /** An octicon to accompany this context */
  readonly octicon: Scalars['String'];
  /** Identifies the user who is related to this context. */
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
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
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
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
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
  componentPath = 'componentPath'
}

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
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

type BioQueryQueryVariables = Exact<{ [key: string]: never; }>;


type BioQueryQuery = { readonly avatar: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixed_noBase64Fragment>, readonly blurHash: Maybe<Pick<BlurhashSharp, 'base64Image'>> }> }>, readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'author' | 'description'>
      & { readonly social: Maybe<Pick<SiteSiteMetadataSocial, 'twitter'>> }
    )> }> };

type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_1_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'siteUrl' | 'description'>
      & { readonly social: Maybe<Pick<SiteSiteMetadataSocial, 'twitter'>> }
    )> }>, readonly icon: Maybe<(
    Pick<File, 'absolutePath'>
    & { readonly childImageSharp: Maybe<{ readonly fixed: Maybe<GatsbyImageSharpFixed_noBase64Fragment> }> }
  )> };

type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_2_Query = { readonly switchOnSound: Maybe<Pick<File, 'publicURL'>>, readonly switchOffSound: Maybe<Pick<File, 'publicURL'>> };

type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_3_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }> };

type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_4_Query = { readonly site: Maybe<{ readonly siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title'>> }>, readonly allMarkdownRemark: { readonly edges: ReadonlyArray<{ readonly node: (
        Pick<MarkdownRemark, 'excerpt'>
        & { readonly fields: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, readonly frontmatter: Maybe<Pick<MarkdownRemarkFrontmatter, 'date' | 'title' | 'description'>> }
      ) }> }, readonly github: { readonly viewer: { readonly repository: Maybe<{ readonly issues: { readonly nodes: Maybe<ReadonlyArray<Maybe<Pick<Github_Issue, 'id' | 'number' | 'title' | 'resourcePath' | 'createdAt' | 'bodyHTML'>>>> } }> } } };

type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


type Unnamed_5_Query = { readonly site: Maybe<Pick<Site, 'buildTime'>> };

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

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_withWebp_tracedSVGFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpResolutions_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpResolutions_withWebp_noBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_tracedSVGFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpSizes_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpSizes_withWebp_noBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

}