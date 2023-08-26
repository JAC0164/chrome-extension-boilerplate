export interface Manifest {
  manifest_version: number;
  name: string;
  version: string;
  description?: string;
  options_page?: string;
  background?: Background;
  action?: Action;
  chrome_url_overrides?: ChromeUrlOverrides;
  icons?: Icons;
  content_scripts?: ContentScript[];
  devtools_page?: string;
  web_accessible_resources?: WebAccessibleResource[];
}

export interface Background {
  service_worker: string;
  type?: 'module';
}

export interface Action {
  default_popup: string;
  default_icon?: string | Icons;
  default_title?: string;
}

export interface ChromeUrlOverrides {
  newtab?: string;
  bookmarks?: string;
  history?: string;
}

export interface Icons {
  '16'?: string;
  '32'?: string;
  '48'?: string;
  '128'?: string;
}

export interface ContentScript {
  matches: string[];
  js: string[];
  css?: string[];
  exclude_matches?: string[];
  include_globs?: string[];
  exclude_globs?: string[];
  all_frames?: boolean;
  match_origin_as_fallback?: boolean;
  match_about_blank?: boolean;
  run_at?: 'document_start' | 'document_end' | 'document_idle';
  world?: string;
}

export interface WebAccessibleResource {
  resources: string[];
  matches: string[];
  use_dynamic_url?: boolean;
}
