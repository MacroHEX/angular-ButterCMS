import {ButterCaller} from "../../base/caller/butter";
import {ButterStatic} from "buttercms";

// ::: Butter
//
export class ButterRest {
  private readonly butter: ButterStatic;

  constructor(butterInstance: ButterStatic) {
    this.butter = butterInstance;
  }

  posts(): ButterPosts {
    return new ButterPosts(this.butter);
  }

  pages(): ButterPages {
    return new ButterPages(this.butter);
  }
}

// ::: POSTS
//
export class ButterPosts {
  private readonly butter: ButterStatic;

  constructor(butterInstance: ButterStatic) {
    this.butter = butterInstance;
  }

  // ::: List All POSTS
  //
  list(page?: number, pageSize?: number): ButterCaller {
    let params = {
      page: page || 1,
      page_size: pageSize || 10,
    }

    let caller = () => this.butter.post.list(params);
    return new ButterCaller(caller);
  }

  // ::: Get POST by Slug
  //
  get(slug: string): ButterCaller {
    let caller = () => this.butter.post.retrieve(slug);
    return new ButterCaller(caller);
  }

  // ::: Search POSTS
  //
  search(query?: any, page?: number, pageSize?: number) {
    let params = {
      page: page || 1,
      page_size: pageSize || 10,
    }
    let caller = () => this.butter.post.search(query, params);
    return new ButterCaller(caller);
  }
}

// :::  PAGES
//
export class ButterPages {
  private readonly butter: ButterStatic;

  constructor(butterInstance: ButterStatic) {
    this.butter = butterInstance;
  }

  // ::: List All Pages
  //
  list(pageType?: string, page?: number, pageSize?: number): ButterCaller {
    let arg = {
      pageType: pageType || '*',
    };
    let params = {
      page: page || 1,
      page_size: pageSize || 10,
    }

    let caller = () => this.butter.page.list(arg.pageType, params);
    return new ButterCaller(caller);
  }

  // ::: Get Page by Slug
  //
  get(pageType?: any, pageSlug?: any, params?: any): ButterCaller {
    let arg = {
      pageType: pageType || '*',
    }

    let caller = () => this.butter.page.retrieve(arg.pageType, pageSlug, params);
    return new ButterCaller(caller);
  }

  // ::: Search Pages
  //
  search(query?: any, page?: number, pageSize?: number): ButterCaller {
    let params = {
      page: page || 1,
      page_size: pageSize || 10,
    }

    let caller = () => this.butter.page.search(query, params);
    return new ButterCaller(caller);
  }
}
