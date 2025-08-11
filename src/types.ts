export interface cat_file_args {
  flag: string | undefined;
  hash: string | undefined;
}

export interface hash_object_args {
  flag: string | undefined;
  path: string | undefined;
}

export interface ls_tree_args extends cat_file_args { };
